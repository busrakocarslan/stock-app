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

    },
    removeFirm:(state,{payload})=>{
      
      return {
        ...state,
        firmsData:state.firmsData.filter(firmList=>firmList._id !== payload)
      }
    }
  }
});

export const {firmPending,firmSuccess,firmRegister,removeFirm} = firmSlice.actions

export default firmSlice.reducer