export const reducer = (state, action) => {
    console.log(action);
    if (action.type === "FILTER_BY_BRAND") {
      const brands = action.payload.pay1.filter(
        (data) => data.brand === action.payload.pay2
      );
      return brands;
    }
    return state;
  };