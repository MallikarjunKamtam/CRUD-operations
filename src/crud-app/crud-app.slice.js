import { getData, postData } from "./crud-app.api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  status: "idle",
  employees: [],
};

export const getEmployeesAsync = createAsyncThunk("/employees", async () => {
  const res = await getData();
  return res;
});

export const postEmployeesAsync = createAsyncThunk(
  "post-employees",
  async (payload) => {
    const res = await postData(payload);
    return res;
  }
);

export const crudOpsSlice = createSlice({
  name: "crudApp",
  initialState,
  reducers: {
    employees: (state, action) => {
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEmployeesAsync.pending, (state, action) => {
      state.status = "loading";
      state.employees = [];
    });
    builder.addCase(postEmployeesAsync.pending, (state, action) => {
      state.status = "loading";
      state.employees = [];
    });
    builder.addCase(getEmployeesAsync.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.employees = action.payload;
    });
    builder.addCase(postEmployeesAsync.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.employees = action.payload;
    });
  },
});

export const crudOpsState = (state) => state;
export default crudOpsSlice.reducer;
