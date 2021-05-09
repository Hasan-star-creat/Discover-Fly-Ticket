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
  updateSubTotal();
  updateTotal(); 
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
    if(qty < 1){
        money.innerText = 00;
    }else{
        money.innerText = (qty * parseFloat(tk)).toFixed(2);
    }
     
    }

    // sub total 
   function  updateSubTotal(){
      const first = document.getElementById('first-class-total').innerText;
      const second = document.getElementById('second-class-total').innerText;
     const subTotal = document.getElementById('sub-total');
     subTotal.innerText = parseFloat(first) + parseFloat(second);       
   }

    // update Total value with tax
   function updateTotal(){
     const subTotal = document.getElementById('sub-total').innerText;
     const tax = document.getElementById('tax').innerText = parseFloat(subTotal) * 0.1;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = (tax + parseFloat(subTotal)).toFixed(2);

   }
     