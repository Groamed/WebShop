const goods = (state = [], action) => {
  switch (action.type) {
    case "FETCH_GOODS_START": {
      return [];
    }
    case "FETCH_GOODS_SUCCESS": {
      return [...action.data];
    }
    case "FETCH_GOODS_ERROR": {
      return [];
    }
    default: {
      return state;
    }
  }
};

export default goods;