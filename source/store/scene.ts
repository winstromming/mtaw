import { reactive } from "vue";

export type Scene = typeof scene;

export const scene = reactive({
  witnesses: 0,
  negation: 0,
  paradox: 0,
  reset() {
    this.witnesses = 0;
    this.negation = 0;
    this.paradox = 0;
  },
});
