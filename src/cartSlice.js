import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
name:"cart",
initialState :{
    value : 0
},
reducers :{
    addItem: (state, action) => {
     state.value = state.value + 1
},
    removeItem:(state,action)=>{
       console.log(action.payload)
       state.value = 0     
    }
}

})

export const {addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;
