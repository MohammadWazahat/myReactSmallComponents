export const reducer = (state, action) => {
  if (action.type === "ASCENDING") {
    const sorted = action.payload.sort((a, b) => {
      return a.first_name.localeCompare(b.first_name);
    });
    return sorted;
  }
  if (action.type === "DESCENDING") {
    const sorted = action.payload.sort((a, b) => {
      return b.first_name.localeCompare(a.first_name);
    });
    return sorted;
  }
  if (action.type === "LOWEST") {
    const sorted = action.payload.sort((a, b) => {
      return a.stock - b.stock;
    });
    return sorted;
  }
  if (action.type === "HIGHEST") {
    const sorted = action.payload.sort((a, b) => {
      return b.stock - a.stock;
    });
    return sorted;
  }
  return state;
};
