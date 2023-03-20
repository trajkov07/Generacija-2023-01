const initialState = { balance: 1000 };

export const balanceReducer = (state = initialState, action) => {
  console.log("inside the reducer");
  switch (action.type) {
    case "DEPOSIT": {
      return { ...state, balance: state.balance + Number(action.payload) };
    }
    case "WITHDRAW": {
      return { ...state, balance: state.balance - Number(action.payload) };
    }

    default: {
      console.log("inside default");
      return state;
    }
  }
};
