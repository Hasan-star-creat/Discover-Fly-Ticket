 function ticketSelectClass(ticketCount){
         const inputClassTicket =  document.getElementById('inputEconomy-ticket');
         const inputclassTicketCoutn = parseInt(inputClassTicket.value);
         let  totalInputTicket = inputclassTicketCoutn;
            if(ticketCount == true){
                totalInputTicket = inputclassTicketCoutn + 1;
            }
            if(ticketCount == false && inputclassTicketCoutn > 0){
                totalInputTicket = inputclassTicketCoutn - 1;  
            }
              inputClassTicket.value = totalInputTicket;   
              const subTotalAmountEconomy = totalInputTicket * 100 ;
             const subTotalAmountNumber = document.getElementById('sub-total').innerText = subTotalAmountEconomy;
             const totalTax = 0.1 * subTotalAmountEconomy ;
             document.getElementById('totalTax').innerText = totalTax;
             const totalAmount = subTotalAmountEconomy + totalTax ;
             document.getElementById('total-price').innerText = totalAmount ;
             
             document.getElementById('inputClass-ticket').value = 0; 
              
           }
             function ticketSelect(ticketCount){
             const inputClassTicket =  document.getElementById('inputClass-ticket');
             const inputclassTicketCoutn = parseInt(inputClassTicket.value);
            let  totalInputTicket = inputclassTicketCoutn;
            if(ticketCount == true){
                totalInputTicket = inputclassTicketCoutn + 1;
            }
            if(ticketCount == false && inputclassTicketCoutn > 0){
                totalInputTicket = inputclassTicketCoutn - 1;  
            }
              inputClassTicket.value = totalInputTicket; 
              const subTotalAmount = totalInputTicket * 150 ;  
              const subTotalAmountNumber = document.getElementById('sub-total').innerText = subTotalAmount; 
              const totalTax = 0.1 * subTotalAmount; 
             document.getElementById('totalTax').innerText = totalTax;
             const totalAmount = subTotalAmount + totalTax ;
             document.getElementById('total-price').innerText = totalAmount ;
              document.getElementById('inputEconomy-ticket').value = 0;
           }
            document.getElementById('book-now').addEventListener('click',function(){
            alert("are you sure boking this ticket");
             
                          
            })
