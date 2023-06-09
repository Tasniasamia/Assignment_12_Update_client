// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getShoppingCart();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
//another object into local storage
const adValue = id => {
    let shoppingCart={};
 const quantity=shoppingCart[id];

 if(quantity){
    const newQuantity=quantity+1;
    shoppingCart[id]=newQuantity;

    // sessionStorage.setItem('shop-cart',id);
 }
 else{
    shoppingCart[id]=1;
 }
 sessionStorage.setItem('shop-cart',JSON.stringify(shoppingCart));
}
const getshopcart = () => {

    

    //get the shopping cart from local storage
  
}
getshopcart();
const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart,
    adValue,
    getshopcart
}