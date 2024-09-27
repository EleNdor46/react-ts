import { getLoginUsername } from './getLoginUsername';
import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";

describe(" getLoginError", () => {
 test("should return error", () => {
    const state:DeepPartial<StateSchema> = {
        loginForm:{
           username:'1'
        }
    }
expect( getLoginUsername(state as StateSchema)).toEqual('1');
  });
  test("should work with empty state", () => {
    const state:DeepPartial<StateSchema> = {}
expect( getLoginUsername(state as StateSchema)).toEqual('');
  });
});