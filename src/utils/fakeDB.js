const addToDb = data =>{
    let shoppingCart = {};

    const storedCart = localStorage.getItem('Applied-jobs')
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    const quantity = shoppingCart[data];
    if (quantity){
        const newQuantity = quantity + 1;
        shoppingCart[data] = newQuantity;
    }
    else{
        shoppingCart[data] = 1; //if data not get stored before 
    }

    localStorage.setItem('Applied-jobs', JSON.stringify(shoppingCart))
}

const getStoredCart = () =>{
   let shoppingCart = {} 
   const storedCart = localStorage.getItem('Applied-jobs')
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart

}

export {addToDb, getStoredCart}
