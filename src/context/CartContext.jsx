import React, {useState, createContext} from 'react'; 

const cartContext = createContext()

const CartProvider = ( props ) => {
  const [cart, setCart] = useState([]);
  
  const addProduct = (prod, quantity) => {
    const aux = cart
    let index = aux.findIndex(product => product.id === prod[0]) 
  
    if(index !== -1){ 
      aux[index].amount = quantity 
    } else {
      const id = prod[0]
      const b = prod[1]
      const prodCart = {id, ...b, amount: quantity}
      aux.push(prodCart)
      
    }
    setCart(structuredClone(aux))
  }

  const removeProduct = (prod) => {
    const aux = cart
    let index = aux.findIndex(product => product.id === prod[0])

    aux.splice(index, 1)
    setCart(structuredClone(aux))
  }

  const clearProducts = () => {
    let aux = cart
    aux = []
    setCart(structuredClone(aux))
  }

  return (
    <>
      <cartContext.Provider value={{cart, removeProduct, addProduct, clearProducts}}>
        {props.children}
      </cartContext.Provider>
    </>
  );
}
export {cartContext, CartProvider};
