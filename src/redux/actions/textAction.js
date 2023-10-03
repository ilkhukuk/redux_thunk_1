export function sayiArti() {
    return {
      type: 'addCount',
      payload: 1,
    };
  }
  
  function getData() {
    return function (dispatch) {
      const data = [];
      dispatch({});
    };
  }