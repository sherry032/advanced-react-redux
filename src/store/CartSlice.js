import { createSlice } from "@reduxjs/toolkit"
const initialCartState = {
    items:[],
    changed: false,
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        addItem:(state, action)=>{
            const index = state.items.findIndex(item => item.title ===action.payload.title)
            if(index === -1) state.items.push(action.payload)
            if(index !== -1) {
                state.items[index].quantity++
                state.items[index].total += action.payload.price
            }
            state.changed =true
            
    },
        decreaseQty:(state, action)=>{
            const existingItem = state.items.find(item => item.title ===action.payload.title)
            if(existingItem.quantity === 1) state.items = state.items.filter(item => item.title !==action.payload.title)
            if(existingItem.quantity > 1) {
                existingItem.quantity--
                existingItem.total -= action.payload.price}
                state.changed =true
        },
        increaseQty:(state, action)=>{
            const index = state.items.findIndex(item => item.title ===action.payload.title)
            state.items[index].quantity++
            state.items[index].total += action.payload.price
            state.changed =true
        },
        loadCartData:(state, action)=>{
            if(!action.payload) return state
            state.items = action.payload
        }
    }
})



export const cartActions = cartSlice.actions

export default cartSlice.reducer
