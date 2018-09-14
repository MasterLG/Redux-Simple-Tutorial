export const loading = () => {
  return {
    type: "LOADING"
  };
};

export const onAgeUpAsync = val => {
  //async
  return { type: "AGE_UP", value: val };
};
export const onAgeUp = val => {
  return dispatch => {
    dispatch(loading()); //sync
    setTimeout(() => {
      dispatch(onAgeUpAsync(val)); //async
    }, 5000);
  };
};
export const onAgeDown = val => {
  //sync
  return { type: "AGE_DOWN", value: val };
};
