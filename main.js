$(function () {    


	$(document).on('change', function() {
		$('input:radio').each(function(indx, el) {
				if ( $(el).prop('checked') && $(el).attr('id') === 'claim-asset') {
							$('#span-sum-entry').show();
				}
				
				if ( $(el).prop('checked') && $(el).attr('id') !== 'claim-asset') {
							$('#span-sum-entry').hide();
				}			  			
		})
	})


	$('#claim-asset-sum').keyup(function() {
			var paymentSum = 0;
			var enteredSum = $(this).val();
			var exceed = null;

			// до 20 000 руб - 4 процента цены иска, но не менее 400 руб;
			if (enteredSum <= 20000) {
				  paymentSum = enteredSum * 4 / 100;
				  
				  if (paymentSum < 400) {
				  		paymentSum = 400;
				  }
					
					$('#sum-text').text( paymentSum );
			}

			//от 20 001 рубля до 100 000 руб - 800 руб плюс 3 процента суммы, превышающей 20 000 руб;
			if (enteredSum > 20000 && enteredSum <= 100000 ) {
					paymentSum = 800;
					exceed = enteredSum - 20000;					
				  paymentSum = paymentSum + (exceed * 3 / 100);		 
					$('#sum-text').text( paymentSum );
			}

			//от 100 001 рубля до 200 000 руб - 3 200 рублей плюс 2 процента суммы, превышающей 100 000 руб;
			if (enteredSum > 100000 && enteredSum <= 200000 ) {
					paymentSum = 3200;
					exceed = enteredSum - 100000;					
				  paymentSum = paymentSum + (exceed * 2 / 100);		 
					$('#sum-text').text( paymentSum );
			}

			//от 200 001 руб до 1 000 000 руб - 5 200 руб плюс 1 процент суммы, превышающей 200 000 руб;
			if (enteredSum > 200000 && enteredSum <= 1000000 ) {
					paymentSum = 5200;
					exceed = enteredSum - 200000;					
				  paymentSum = paymentSum + (exceed * 1 / 100);		 
					$('#sum-text').text( paymentSum );
			}

			//свыше 1 000 000 р - 13 200 р плюс 0,5 процента суммы, превышающей 1 000 000 р, но не более 60 000 р;
			if (enteredSum > 1000000 ) {
					paymentSum = 13200;
					exceed = enteredSum - 1000000;					
				  paymentSum = paymentSum + (exceed * 0.5 / 100);		 
				  
				  if (paymentSum > 60000) {
				  		paymentSum = 60000;
				  }
					
					$('#sum-text').text( paymentSum );
			}



	});































































	// $('.request-type-wrap').on('change', function(event) {
	// 			if (event.target.id == 'claim-asset') {
	// 						if ( $('#claim-asset').prop('checked') ) {
	// 									$('#span-sum-entry').show();										
	// 						}								
	// 			} else $('#span-sum-entry').hide();	
	// })



});