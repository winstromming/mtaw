<template>
  <n-space :size="6">
    <n-button size="tiny" secondary strong type="success" @click="onExport" title="Export">
      <template #icon>
        <n-icon>
          <FileDown />
        </n-icon>
      </template>
    </n-button>
    <n-upload :show-file-list="false" accept=".pdf" :custom-request="onUpload" style="width: auto">
      <n-button size="tiny" secondary strong type="warning" title="Import">
        <template #icon>
          <n-icon>
            <FileUp />
          </n-icon>
        </template>
      </n-button>
    </n-upload>
    <n-button size="tiny" secondary strong type="error" @click="onClear" title="Clear">
      <template #icon>
        <n-icon>
          <Trash />
        </n-icon>
      </template>
    </n-button>
  </n-space>
</template>

<script setup lang="ts">
import { assign, cloneDeep } from "lodash";
import type { UploadCustomRequestOptions } from "naive-ui";
import { getDocument } from "pdfjs-dist";
import "pdfmake/build/pdfmake";
import type { TDocumentDefinitions } from "pdfmake/interfaces";
import { toRaw } from "vue";
import { manaLimit } from "../../config/values";
import { caster } from "../../store/caster";
import { FileDown, FileUp, Trash } from "lucide-vue-next";
import { dots, getDurationSummary, getPotencySummary, getRangeSummary, getScaleSummary } from "../../functions/methods";

const pdfMake = window.pdfMake;

const onClear = async () => {
  caster.reset();
};

const onUpload = async ({ file }: UploadCustomRequestOptions) => {
  try {
    // Create a blob URL for the PDF file
    const blobUrl = URL.createObjectURL(file.file as File);
    // Load the PDF file
    const doc = getDocument(blobUrl);
    const pdf = await doc.promise;
    const page = await pdf.getPage(1);
    const text = await page.getTextContent();
    // Format the text content
    const string = text.items.map((item: any) => item.str).join(" ");
    const cleaned = string.split("rawjsondump:")[1]?.replace(/\s{2,}/g, " ");
    // Update the store
    if (cleaned?.length) assign(caster, JSON.parse(cleaned));
    // Clean up the blob URL
    URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error("Error extracting text from PDF", error);
  }
};

const dot = (n: number, t: number) =>
  Array.from({ length: n }, () => "●")
    .concat(Array.from({ length: t - n }, () => "○"))
    .join("");

const onExport = () => {
  const w = 600;
  const h = 850;
  const m = 10;
  const p = m * 2;

  const background = "#faf9f7";
  const accent = "#50a9bf";
  const darker = "#16819c";

  const svgAggr =
    '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-asterisk"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 8v8"/><path d="m8.5 14 7-4"/><path d="m8.5 10 7 4"/></svg>';
  const svgLeth =
    '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-x"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>';
  const svgBash =
    '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-slash"><rect width="18" height="18" x="3" y="3" rx="2"/><line x1="9" x2="15" y1="15" y2="9"/></svg>';
  const svgNone =
    '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>';

  const empty = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-icon lucide-circle"><circle cx="12" cy="12" r="10"/></svg>`
  const filled = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="#000000" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-icon lucide-circle"><circle cx="12" cy="12" r="10"/></svg>`
  const emptyAccent = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#16819c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-icon lucide-circle"><circle cx="12" cy="12" r="10"/></svg>`
  const filledAccent = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="#16819c" stroke="#16819c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-icon lucide-circle"><circle cx="12" cy="12" r="10"/></svg>`

  const healthRemaining =
    caster.health.maximum.base -
    caster.health.bashing -
    caster.health.lethal -
    caster.health.aggravated;

  const circles = (n: number, accent?: boolean) => {
    return [
      ...Array.from({ length: n }).map((i) => ({ width: 10, svg: accent ? filledAccent : filled })),
      ...Array.from({ length: 5 - n }).map((i) => ({ width: 10, svg: accent ? emptyAccent : empty })),
    ];
  }

  const json = cloneDeep(toRaw(caster));

  const def: TDocumentDefinitions = {
    defaultStyle: { fontSize: 8, lineHeight: 1.3 },
    pageSize: { width: w, height: h },
    pageMargins: m * 2,
    background: [
      {
        canvas: [
          { type: "rect", x: 0, y: 0, w: w, h: h, color: background },
        ],
      },
    ],
    content: [
      {
        columnGap: p,
        columns: [
          {
            width: "34%",
            stack: [
              // Caster Details
              { text: `${caster.details.name || "Shadow Name"}`, color: darker, bold: true },
              { text: " ", fontSize: 2 },
              { text: `${caster.details.concept || "Concept"}`, bold: true },
              { text: `${caster.details.virtue || "Virtue"} • ${caster.details.vice || "Vice"} • Gnosis ${caster.traits.Gnosis || 1} • Wisdom ${caster.traits.Wisdom || 7}` },
              { text: `${caster.details.path?.name || "Path"} • ${caster.details.order?.name || "Order"}` },
              { text: `${caster.details.cabal || "No Cabal"} • ${caster.details.legacy || "No Legacy"}` },
              { text: " " },
              // Appearance
              { bold: true, color: darker, text: "Appearance" },
              { text: " ", fontSize: 2 },
              { text: `${caster.extras.appearance}` },
              { text: " " },
              // Attributes
              { bold: true, color: darker, text: "Attributes" },
              { text: " ", fontSize: 2 },
              { text: [
                ...Object.entries(caster.attributes.mental).map(([key, value]) => `${key} ${value.dots}`),
                ...Object.entries(caster.attributes.physical).map(([key, value]) => `${key} ${value.dots}`),
                ...Object.entries(caster.attributes.social).map(([key, value]) => `${key} ${value.dots}`),
                ].join(", ")
              },
              { text: " " },
              // Skills
              { bold: true, color: darker, text: "Skills" },
              { text: " ", fontSize: 2 },
              { text: [
                ...Object.entries(caster.skills.mental).filter(([key, value]) => value.dots > 0).map(([key, value]) => `${key}${value.label !== "" ? ` (${value.label})` : ""} ${value.dots}`),
                ...Object.entries(caster.skills.physical).filter(([key, value]) => value.dots > 0).map(([key, value]) => `${key}${value.label !== "" ? ` (${value.label})` : ""} ${value.dots}`),
                ...Object.entries(caster.skills.social).filter(([key, value]) => value.dots > 0).map(([key, value]) => `${key}${value.label !== "" ? ` (${value.label})` : ""} ${value.dots}`),
                ].join(", ")
              },
              { text: " " },
              // Merits
              { bold: true, color: darker, text: "Merits" },
              { text: " ", fontSize: 2 },
              {
                text: caster.merits
                  .filter((i) => i.name.length)
                  .map((item) => `${item.name} ${item.dots}`).join(", "),
              },
              { text: " " },
              // Backstory
              { bold: true, color: darker, text: "Backstory" },
              { text: " ", fontSize: 2 },
              { text: `${caster.extras.backstory}` },
              { text: " " },
              // People
              { bold: true, color: darker, text: "People" },
              { text: " ", fontSize: 2 },
              { text: `${caster.extras.people}` },
              { text: " " },
              // Places
              { bold: true, color: darker, text: "Places" },
              { text: " ", fontSize: 2 },
              { text: `${caster.extras.places}` },
              { text: " " },
            ]
          },
          {
            width: "33%",
            stack: [
              // Arcana
              { bold: true, color: darker, text: "Arcana" },
              { text: " ", fontSize: 2 },
              {
                text: Object.entries(caster.arcana)
                  .filter(([_name, value]) => value.dots > 0)
                  .map(([name, value]) => `${name} ${value.dots}`)
                  .join(", "),
              },
              { text: " " },
              // Nimbus
              { bold: true, color: darker, text: "Nimbus" },
              { text: " ", fontSize: 2 },
              { text: `${caster.nimbus}` },
              { text: " " },
              // Praxes
              { bold: true, color: darker, text: "Praxes" },
              { text: " ", fontSize: 2 },
              caster.praxes.map((item) => ({
                text: [
                  { text: `${item.name} ` },
                  { text: `(${item.primaryArcana.arcana} ${dots(item.primaryArcana.level)})`, opacity: 0.5 },
                ],
              })),
              { text: " " },
              // Rotes
              { bold: true, color: darker, text: "Rotes" },
              { text: " ", fontSize: 2 },
              caster.rotes.map((item) => ({
                text: [
                  { text: `${item.name} ` },
                  { text: `(${item.skill ?? "None"}, ${item.primaryArcana.arcana} ${dots(item.primaryArcana.level)})`, opacity: 0.5 },
                ],
              })),
              { text: " " },
              // Grimoires
              { bold: true, color: darker, text: "Grimoires" },
              { text: " ", fontSize: 2 },
              caster.grimoires.map((item) => ({
                text: [
                  { text: `${item.name} ` },
                  { text: `(${item.primaryArcana.arcana} ${dots(item.primaryArcana.level)})`, opacity: 0.5 },
                ],
              })),
              { text: " " },
              // Tools
              { bold: true, color: darker, text: "Tools" },
              { text: " ", fontSize: 2 },
              caster.tools.map((item) => ({
                text: [
                  { text: `${item.description}, ` },
                  { text: `${item.dedicated ? "Dedicated " : ""}${item.type}`, opacity: 0.5 },
                ],
              })),
              { text: " " },
              // Items
              { bold: true, color: darker, text: "Items" },
              { text: " ", fontSize: 2 },
              { text: `${caster.extras.things}` },
            ]
          },
          {
            width: "33%",
            stack: [
              // Health
              { bold: true, color: darker, text: "Health" },
              { text: " ", fontSize: 2 },
              // Experience
              {
                columns: [
                  ...Array.from({ length: caster.health.aggravated }).map(
                    (_i) => ({ width: 13, svg: svgAggr }),
                  ),
                  ...Array.from({ length: caster.health.lethal }).map((_i) => ({
                    width: 13,
                    svg: svgLeth,
                  })),
                  ...Array.from({ length: caster.health.bashing }).map((_i) => ({
                    width: 13,
                    svg: svgBash,
                  })),
                  ...Array.from({ length: healthRemaining }).map((_i) => ({
                    width: 13,
                    svg: svgNone,
                  })),
                ],
                lineHeight: 1,
                columnGap: 0,
              },
              { text: " ", fontSize: 2 },
              {
                columns: [
                  { width: "*", text: `${caster.progress.NormalExperience} Normal Experience` },
                  { width: "auto", text: `(${caster.progress.NormalBeats}/5 Beats)`, alignment: "right"}
                ]
              },
              {
                columns: [
                  { width: "*", text: `${caster.progress.ArcaneExperience} Arcane Experience` },
                  { width: "auto", text: `(${caster.progress.ArcaneBeats}/5 Beats)`, alignment: "right"}
                ]
              },
              { text: " " },
              // Aspirations
              { bold: true, color: darker, text: "Aspirations" },
              { text: " ", fontSize: 2 },
              { text: `• ${caster.traits.Aspirations["1"]}` },
              { text: `• ${caster.traits.Aspirations["2"]}` },
              { text: `• ${caster.traits.Aspirations["3"]}` },
              { text: " " },
              { bold: true, color: darker, text: "Obsessions" },
              { text: " ", fontSize: 2 },
              {
                stack: Object.values(caster.traits.Obsessions).filter((o) => o.length > 0).map((o) => `• ${o}`),
              },
              { text: " " },
              // Conditions
              { bold: true, color: darker, text: "Conditions" },
              { text: " ", fontSize: 2 },
              { text: caster.conditions.map((c) => `• ${c}`).join("\n") },
              { text: " " },
              // Active Spells
              { bold: true, color: darker, text: "Active Spells" },
              { text: " ", fontSize: 2 },
              caster.active.map((item) => ({
                stack: [
                  {
                    text: [
                      { text: `${item.name} ` },
                      { text: `(${getPotencySummary(caster, item)}, ${getDurationSummary(caster, item)}, ${getRangeSummary(caster, item)}, ${getScaleSummary(caster, item)})`.toLowerCase(), opacity: 0.5 },
                    ],
                  },
                  { text: " ", fontSize: 2 },
                ],
              })),
              // JSON DUMP
              {
                fontSize: 1,
                color: background,
                text: `rawjsondump:${JSON.stringify(json)}`,
              },
            ]
          }
        ],
      },
    ],
  };

  pdfMake
    .createPdf(def, undefined, {
      Roboto: {
        normal: "https://winstromming.github.io/spell/Arial-Regular.ttf",
        bold: "https://winstromming.github.io/spell/Arial-Medium.ttf",
        italics: "https://winstromming.github.io/spell/Arial-Italic.ttf",
        bolditalics:
          "https://winstromming.github.io/spell/Arial-MediumItalic.ttf",
      },
    })
    .download(`Character-Sheet-${caster.details.name.replace(/\s/g, "-")}.pdf`);
};
</script>
