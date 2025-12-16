
export const cart=[
    {
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity:2,
  },
  {
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:1
  }
];//outside the file used export
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