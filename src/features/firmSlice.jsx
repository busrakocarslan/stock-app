import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firmsData:[],
    loading:false,
    error:false,


}

const firmSlice = createSlice({
  name: "firms",
  initialState,
  reducers: {
    firmPending:(state)=>{
        state.loading=true
    },
    firmSuccess:(state,{payload})=>{
        state.loading=false
        state.firmsData=payload.data
    },
    firmRegister:(state)=>{
        state.loading=false
        state.error=true

    }
  }
});

export const {firmPending,firmSuccess,firmRegister} = firmSlice.actions

export default firmSlice.reducer