import { defineStore } from "pinia";

export const useImageStore = defineStore("image", {
  state: () => ({
    img_procs: [],
    deep_learning: [],
  }),
  actions: {
    addImageProc(data) {
      this.img_procs.push(data);
    },
    clearImageProcs() {
      this.img_procs = [];
    },
    addDeepLearning(data) {
      this.deep_learning.push(data);
    },
    clearDeepLearning() {
      this.deep_learning = [];
    },
    resetStore() {
      this.$reset();
    },
  },
});
