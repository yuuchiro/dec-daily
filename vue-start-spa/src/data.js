const pageKey = "pages";

let pagesJson = localStorage.getItem(pageKey);
let pagesStore = JSON.parse(pagesJson);

export default {
  getAllPages() {
    return pagesStore;
  },

  getSinglePage(index) {
    return pagesStore[index];
  },
};
