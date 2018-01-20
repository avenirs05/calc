function calcIskGeneral () {
	  var paymentSum = 0;
	  var enteredSum = $('#claim-asset-sum').val();
	  var exceed = null;

	  // до 20 000 руб - 4 процента цены иска, но не менее 400 руб;
	  if (enteredSum <= 20000) {
	  	  paymentSum = enteredSum * 4 / 100;
	  	  
	  	  if (paymentSum < 400) {
	  	  		paymentSum = 400;
	  	  }  		
		}

	  //от 20 001 рубля до 100 000 руб - 800 руб плюс 3 процента суммы, превышающей 20 000 руб;
	  if (enteredSum > 20000 && enteredSum <= 100000 ) {
	  		paymentSum = 800;
	  		exceed = enteredSum - 20000;					
	  	  paymentSum = paymentSum + (exceed * 3 / 100);		 
	  }

	  //от 100 001 рубля до 200 000 руб - 3 200 руб плюс 2 процента суммы, превышающей 100 000 руб;
	  if (enteredSum > 100000 && enteredSum <= 200000 ) {
	  		paymentSum = 3200;
	  		exceed = enteredSum - 100000;					
	  	  paymentSum = paymentSum + (exceed * 2 / 100);		 
	  }

	  //от 200 001 руб до 1 000 000 руб - 5 200 руб плюс 1 процент суммы, превышающей 200 000 руб;
	  if (enteredSum > 200000 && enteredSum <= 1000000 ) {
	  		paymentSum = 5200;
	  		exceed = enteredSum - 200000;					
	  	  paymentSum = paymentSum + (exceed * 1 / 100);		 
	  }

	  //свыше 1 000 000 р - 13 200 р плюс 0,5 процента суммы, превышающей 1 000 000 р, но не более 60 000 р;
	  if (enteredSum > 1000000 ) {
	  		paymentSum = 13200;
	  		exceed = enteredSum - 1000000;					
	  	  paymentSum = paymentSum + (exceed * 0.5 / 100);		 
	  	  
	  	  if (paymentSum > 60000) {
	  	  		paymentSum = 60000;
	  	  }
	  }

	  return paymentSum;
}

function calcIskGeneralOrder () {
	  var paymentSum = 0;
	  var enteredSum = $('#claim-asset-sum-order').val();
	  var exceed = null;

	  // до 20 000 руб - 4 процента цены иска, но не менее 400 руб;
	  if (enteredSum <= 20000) {
	  	  paymentSum = enteredSum * 4 / 100;
	  	  
	  	  if (paymentSum < 400) {
	  	  		paymentSum = 400;
	  	  }  		
		}

	  //от 20 001 рубля до 100 000 руб - 800 руб плюс 3 процента суммы, превышающей 20 000 руб;
	  if (enteredSum > 20000 && enteredSum <= 100000 ) {
	  		paymentSum = 800;
	  		exceed = enteredSum - 20000;					
	  	  paymentSum = paymentSum + (exceed * 3 / 100);		 
	  }

	  //от 100 001 рубля до 200 000 руб - 3 200 руб плюс 2 процента суммы, превышающей 100 000 руб;
	  if (enteredSum > 100000 && enteredSum <= 200000 ) {
	  		paymentSum = 3200;
	  		exceed = enteredSum - 100000;					
	  	  paymentSum = paymentSum + (exceed * 2 / 100);		 
	  }

	  //от 200 001 руб до 1 000 000 руб - 5 200 руб плюс 1 процент суммы, превышающей 200 000 руб;
	  if (enteredSum > 200000 && enteredSum <= 1000000 ) {
	  		paymentSum = 5200;
	  		exceed = enteredSum - 200000;					
	  	  paymentSum = paymentSum + (exceed * 1 / 100);		 
	  }

	  //свыше 1 000 000 р - 13 200 р плюс 0,5 процента суммы, превышающей 1 000 000 р, но не более 60 000 р;
	  if (enteredSum > 1000000 ) {
	  		paymentSum = 13200;
	  		exceed = enteredSum - 1000000;					
	  	  paymentSum = paymentSum + (exceed * 0.5 / 100);		 
	  	  
	  	  if (paymentSum > 60000) {
	  	  		paymentSum = 60000;
	  	  }
	  }

	  return paymentSum / 2;
}


function calcIskArbitr () {
	  var paymentSum = 0;
	  var enteredSum = $('#claim-asset-sum').val();
	  var exceed = null;

	  // до 100 000 руб - 4 процента цены иска, но не менее 2 000 руб;
	  if (enteredSum <= 100000) {
	  	  paymentSum = enteredSum * 4 / 100;
	  	  
	  	  if (paymentSum < 2000) {
	  	  		paymentSum = 2000;
	  	  }  		
		}

	  // от 100 001 рубля до 200 000 руб - 4 000 руб плюс 3 процента суммы, превышающей 100 000 руб;
	  if (enteredSum > 100000 && enteredSum <= 200000 ) {
	  		paymentSum = 4000;
	  		exceed = enteredSum - 100000;					
	  	  paymentSum = paymentSum + (exceed * 3 / 100);		 
	  }

	  // от 200 001 рубля до 1 000 000 руб - 7 000 руб плюс 2 процента суммы, превышающей 200 000 руб;
	  if (enteredSum > 200000 && enteredSum <= 1000000 ) {
	  		paymentSum = 7000;
	  		exceed = enteredSum - 200000;					
	  	  paymentSum = paymentSum + (exceed * 2 / 100);		 
	  }

	  //1 000 001 рубля до 2 000 000 руб - 23 000 руб плюс 1 процент суммы, превышающей 1 000 000 руб;
	  if (enteredSum > 1000000 && enteredSum <= 2000000 ) {
	  		paymentSum = 23000;
	  		exceed = enteredSum - 1000000;					
	  	  paymentSum = paymentSum + (exceed * 1 / 100);		 
	  }

	  //свыше 2 000 000 руб - 33 000 руб плюс 0,5 процента суммы, превышающей 2 000 000 руб, но не более 200 000 руб;
	  if (enteredSum > 2000000 ) {
	  		paymentSum = 33000;
	  		exceed = enteredSum - 2000000;					
	  	  paymentSum = paymentSum + (exceed * 0.5 / 100);		 
	  	  
	  	  if (paymentSum > 200000) {
	  	  		paymentSum = 200000;
	  	  }
	  }

	  return paymentSum;
}

function calcIskArbitrOrder () {
	  var paymentSum = 0;
	  var enteredSum = $('#claim-asset-sum-order').val();
	  var exceed = null;

	  // до 100 000 руб - 4 процента цены иска, но не менее 2 000 руб;
	  if (enteredSum <= 100000) {
	  	  paymentSum = enteredSum * 4 / 100;
	  	  
	  	  if (paymentSum < 2000) {
	  	  		paymentSum = 2000;
	  	  }  		
		}

	  // от 100 001 рубля до 200 000 руб - 4 000 руб плюс 3 процента суммы, превышающей 100 000 руб;
	  if (enteredSum > 100000 && enteredSum <= 200000 ) {
	  		paymentSum = 4000;
	  		exceed = enteredSum - 100000;					
	  	  paymentSum = paymentSum + (exceed * 3 / 100);		 
	  }

	  // от 200 001 рубля до 1 000 000 руб - 7 000 руб плюс 2 процента суммы, превышающей 200 000 руб;
	  if (enteredSum > 200000 && enteredSum <= 1000000 ) {
	  		paymentSum = 7000;
	  		exceed = enteredSum - 200000;					
	  	  paymentSum = paymentSum + (exceed * 2 / 100);		 
	  }

	  //1 000 001 рубля до 2 000 000 руб - 23 000 руб плюс 1 процент суммы, превышающей 1 000 000 руб;
	  if (enteredSum > 1000000 && enteredSum <= 2000000 ) {
	  		paymentSum = 23000;
	  		exceed = enteredSum - 1000000;					
	  	  paymentSum = paymentSum + (exceed * 1 / 100);		 
	  }

	  //свыше 2 000 000 руб - 33 000 руб плюс 0,5 процента суммы, превышающей 2 000 000 руб, но не более 200 000 руб;
	  if (enteredSum > 2000000 ) {
	  		paymentSum = 33000;
	  		exceed = enteredSum - 2000000;					
	  	  paymentSum = paymentSum + (exceed * 0.5 / 100);		 
	  	  
	  	  if (paymentSum > 200000) {
	  	  		paymentSum = 200000;
	  	  }
	  }

	  return paymentSum / 2;
}