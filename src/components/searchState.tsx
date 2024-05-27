import searchEventEmitter from "./eventEmitter";

let searchQuery = "Dark";

export const setSearchQuery = (query: string) => {
  searchQuery = query;
  searchEventEmitter.emit("searchQueryChanged", searchQuery);
};

export const getSearchQuery = () => {
  return searchQuery;
};
