
export const cart=[];//outside the file used export
export function addToCart(prodId)
  {
    
     let matchedItem;
    cart.forEach((Cartitem)=>
    {
      if(prodId===Cartitem.productId)
      {
        matchedItem=Cartitem;
      }
    })

    if( matchedItem)
    {
      matchedItem.quantity+=1;
    }
    else{
      cart.push({
      productId:prodId,
      
      quantity:1
    });}
    
  }