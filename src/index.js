import _ from "lodash";

function getReducers(model, type) {
  let reducers = {};
  reducers[`${model}/add`] = (state, action) => {
    if (!state) state = {};
    let resp = action.payload.resp;
    if (type === "collection") {
      if (!_.isArray(resp)) resp = [resp];
      resp = resp.reduce((o, v) => {
        o[v.id] = v;
        return o;
      }, {});
    } else {
      if (_.isArray(resp)) resp = resp[0];
    }
    state = Object.assign({}, state, resp);
    return state;
  };

  reducers[`${model}/remove`] = (state, action) => {
    if (!state) state = {};
    let resp = action.payload.resp;
    if (type === "collection") {
      if (!_.isArray(resp)) resp = [resp];
      resp.forEach((v) => {
        delete state[v.id];
      });
    }
    return state;
  };

  return reducers;
}

export { getReducers };
