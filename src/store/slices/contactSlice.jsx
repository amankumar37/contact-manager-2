import { createSlice } from "@reduxjs/toolkit";

const contactSlice =  createSlice({
       name:"contact",
       initialState:[],
       reducers:{
           initializeContact(state,action){
           return   state = action.payload;
           },
           addContact(state,action) {
           // console.log(action.payload);
            state.push(action.payload);
           },
           removeContact(state,action){
           // console.log(action.payload);
            state.splice(action.payload,1);
           },
           
       },
})


export default contactSlice ;
export const {addContact, removeContact , initializeContact} = contactSlice.actions;