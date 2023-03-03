import { defineStore } from 'pinia';

type State = {
  isBrowseByType: boolean;
  isFilterByFloorplans: boolean;
  pageCurrent: number;
  pagesTotal: number;
};

export const useFilterStore = defineStore('filterStore', {
  actions: {
    setIsBrowseByType(isBrowseByType: boolean) {
      this.isBrowseByType = isBrowseByType;
    },
    setPageCurrent(pageCurrent: number) {
      this.pageCurrent = pageCurrent;
    },
    setPageNext() {
      if (this.pageCurrent < this.pagesTotal) {
        this.pageCurrent += 1;
      }
    },
    setPagePrevious() {
      if (this.pageCurrent > 1) {
        this.pageCurrent -= 1;
      }
    },
    setPagesTotal(pagesTotal: number) {
      this.pagesTotal = pagesTotal;
    },
    toggleIsFilterByFloorplans() {
      this.isFilterByFloorplans = !this.isFilterByFloorplans;
    },
  },
  state: (): State => ({
    isBrowseByType: true,
    isFilterByFloorplans: false,
    pageCurrent: 1,
    pagesTotal: 0,
  }),
});
