const initialState = { creditRating: 5 };

export const creditReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_CREDIT_RATING": {
      return { ...state, creditRating: action.payload };
    }
    default: {
      return state;
    }
  }
};
