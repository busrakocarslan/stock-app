import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firmsData: [],
  loading: false,
  error: false,
};

const firmSlice = createSlice({
  name: "firms",
  initialState,
  reducers: {
    firmPending: (state) => {
      state.loading = true;
    },
    firmSuccess: (state, { payload }) => {
      state.loading = false;
      state.firmsData = payload.data;
    },
    firmRegister: (state) => {
      state.loading = false;
      state.error = true;
    },
    removeFirmAction: (state, { payload }) => {
      return {
        ...state,
        firmsData: state.firmsData.filter(
          (firmList) => firmList._id !== payload
        ),
      };
    },
    editFirm: (state, { payload }) => {
      return {
        ...state,
        firmsData: state.firmsData.map((firmList) =>
          firmList._id === payload
            ? { ...firmList, payload: !firmList.payload }
            : firmList
        ),
      };
    },
    addFirm:(state,{payload})=>{
      return {
        ...state, firmsData:[...state.firmsData,{id:new Date().getTime(),text:payload}]
      }
    }
  },
});

export const { firmPending, firmSuccess, firmRegister, removeFirmAction,editFirm,addFirm } =
  firmSlice.actions;

export default firmSlice.reducer;
