 
const addToDb = id =>{
    let bookCart = getBookCart();
    const quantity = bookCart[id];
    if (quantity) {
        console.log("alrady exist");
            }
            else {
                 
               
                bookCart[id] = 1;
                localStorage.setItem('bookMark', JSON.stringify(bookCart));
            }
           
}


const getBookCart = () => {
    let bookCart = {}
    const storeBookMark = localStorage.getItem('bookMark');
    if ( storeBookMark) {
         bookCart = JSON.parse(storeBookMark);
    }
    return  bookCart;
}

 export{
    addToDb,
getBookCart
}