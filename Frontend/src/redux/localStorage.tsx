export const saveToLocalStorage = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);

    localStorage.setItem("state", serializedState);
  } catch (e) {
    //
  }
};

export const getPreloadedState = () => {
  try {
    const serializedState = localStorage.getItem("state");

    if (serializedState === null) return undefined;

    return JSON.parse(serializedState);
  } catch (e) {
    //

    return undefined;
  }
};

export const setSsBackRoute = (value: any) => {
  console.log(value, "BackRoute");

  sessionStorage.setItem("backRoute", value && JSON.stringify(value));
};

export const getSsBackRoute = () => {
  let value: any = sessionStorage.getItem("backRoute");
  console.log(value, "BackRoute get");
  return value && JSON.parse(value);
};
export const removeSsBackRoute = () => sessionStorage.removeItem("backRoute");
