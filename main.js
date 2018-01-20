$(function () {    

	$(document).on('change', function() {
		$('input:radio').each(function(indx, el) {
				if ( $(el).prop('checked') && $(el).attr('id') === 'claim-asset') {
							$('#span-sum-entry').show();
							$('#claim-asset-sum-order').focus();
				}				
				if ( $(el).prop('checked') && $(el).attr('id') !== 'claim-asset') {
							$('#span-sum-entry').hide();
				}		
				if ( $(el).prop('checked') && $(el).attr('id') === 'claim-asset-order') {
							$('#span-sum-entry-order').show();
							$('#claim-asset-sum-order').focus();
				}
				
				if ( $(el).prop('checked') && $(el).attr('id') !== 'claim-asset-order') {
							$('#span-sum-entry-order').hide();
				}		  			
		})

		if ( $('#general').prop('checked') ) {
					if ( $('#salary, #crime, #documents, #divorce-appeal, #adoption, #invalid, #consumer').prop('checked') ) {
								$('#sum-text').text( '0' );
					}
					if ( $('#claim-asset').prop('checked') ) {						
									 $('#sum-text').text( calcIskGeneral() );							
					}	
					if ( $('#claim-asset-order').prop('checked') ) {		
									 $('#sum-text').text( calcIskGeneralOrder() );	
					}				
		}

		if ( $('#arbitr').prop('checked') ) {
					if ( $('#salary').prop('checked') ) {
								$('#sum-text').text( '0' );
					}
					if ( $('#claim-asset').prop('checked') ) {						
								 $('#sum-text').text( calcIskArbitr() );							
					}
					if ( $('#claim-asset-order').prop('checked') ) {		
									 $('#sum-text').text( calcIskArbitrOrder() );	
					}		
		}		
					
	});

  // Введение суммы пользователем
	$('#claim-asset-sum').keyup(function() {
			if ( $('#general').prop('checked') ) {
						$('#sum-text').text( calcIskGeneral() );
			}		

			if ( $('#arbitr').prop('checked') ) {
						$('#sum-text').text( calcIskArbitr() );
			}		
	});

	$('#claim-asset-sum-order').keyup(function() {
			if ( $('#general').prop('checked') ) {
						$('#sum-text').text( calcIskGeneralOrder() );
			}		

			if ( $('#arbitr').prop('checked') ) {
						$('#sum-text').text( calcIskArbitrOrder() );
			}		
	});


	// Выбор радиокнопки Общая юрисдикция или Арбитражный суд 
	// $('#general').change(function() {
	// 		if ( $('#claim-asset').prop('checked') ) {
	// 					$('#sum-text').text( calcIskGeneral() );
	// 		}			
	// });

	// $('#arbitr').change(function() {
	// 		if ( $('#claim-asset').prop('checked') ) {
	// 					$('#sum-text').text( calcIskArbitr() );	
	// 		}
	// });


































































	// $('.request-type-wrap').on('change', function(event) {
	// 			if (event.target.id == 'claim-asset') {
	// 						if ( $('#claim-asset').prop('checked') ) {
	// 									$('#span-sum-entry').show();										
	// 						}								
	// 			} else $('#span-sum-entry').hide();	
	// })



});