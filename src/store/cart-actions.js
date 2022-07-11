import { uiActions } from "./UiSlice";
import { cartActions } from "./CartSlice";

export const sendCartData = (cartData)=>{
  return async (dispatch)=>{
    dispatch(uiActions.setNotification({message:"sending", status: "sending", title: "sending cart data"}))
    const sendRequest = async ()=>{
      const res = await fetch("https://meals-8f81d-default-rtdb.firebaseio.com/cart.json", {
        method: "PUT",
        body:JSON.stringify(cartData),
        headers: {'Content-Type': 'application/json'}
      })
      if(!res.ok) throw new Error ("send data error")
    }
    try{await sendRequest()
      dispatch(uiActions.setNotification({message:"Cart data sent", status: "success", title: "Send cart successfully"}))
    } catch(err){
      dispatch(uiActions.setNotification({message:err.message, status: "error", title: "Send cart failed"}))
    }

  } 
}

export const loadCartData = () =>{
  return async (dispatch)=>{

    const sendRequest = async ()=>{
      const res = await fetch("https://meals-8f81d-default-rtdb.firebaseio.com/cart.json")
      if(!res.ok) throw new Error ("Load data error")
      return res.json()
    }
    try{
      const data = await sendRequest()
      dispatch(cartActions.loadCartData(data.items))

    }catch(err){
      dispatch(uiActions.setNotification({message:err.message, status: "error", title: "Send cart failed"}))
    }
  }
}
