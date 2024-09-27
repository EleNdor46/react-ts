import { getLoginPassword } from './getLoginPassword';
import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";

describe(" getLoginError", () => {
 test("should return error", () => {
    const state:DeepPartial<StateSchema> = {
        loginForm:{
           password:'1'
        }
    }
expect( getLoginPassword(state as StateSchema)).toEqual('1');
  });
  test("should work with empty state", () => {
    const state:DeepPartial<StateSchema> = {}
expect( getLoginPassword(state as StateSchema)).toEqual('');
  });
});