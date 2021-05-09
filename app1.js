function ticketSelect(id, isTrue){
    console.log(id , isTrue);
  let quantity =  getQuantity(id);
    const singlePrice = getPrice(id)
  if(isTrue){
      quantity++;
      updateQty(id,quantity)
      
  }else{
      quantity--;
      if(quantity < 1){
        updateQty(id,0);
      }
      else{
        updateQty(id,quantity)
      }   
  }
  updateTicketPrice(id, quantity, singlePrice);
   
}

function getQuantity(id){
    const qty = document.getElementById(`${id}-qty`).value;
     return qty;
     } 

   function updateQty(id,value){
    document.getElementById(`${id}-qty`).value = value;
   }

    function getPrice(id){
    const price =  document.getElementById(`${id}-price`).innerText;
    return price;
    }

    function updateTicketPrice(id , qty , tk){
    const money  = document.getElementById(`${id}-total`);
     money.innerText = (qty * parseFloat(tk)).toFixed(2);
     
    }