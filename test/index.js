import { assert } from "chai";
import { getReducers } from "../src";

describe("getReducers", () => {
  it("returns add and remove reducers for specified sclice", () => {
    const reducers = getReducers("slice");
    assert.include(Object.keys(reducers), "slice/add");
    assert.include(Object.keys(reducers), "slice/remove");
    assert.isFunction(reducers["slice/add"]);
    assert.isFunction(reducers["slice/remove"]);
  });
});
