export const depositBalance = (value) => {
  return {
    type: "DEPOSIT",
    payload: value,
  };
};

export const withdrawBalance = (value) => {
  return {
    type: "WITHDRAW",
    payload: value,
  };
};
