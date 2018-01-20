$(function () {    

	$(document).on('change', function() {
		if ( $('#person').prop('checked') && $('#general').prop('checked') ) {
				showHideIfPersonGeneralChecked();
		}	

		if ( $('#company').prop('checked') && $('#general').prop('checked') ) {
				showHideIfCompanyGeneralChecked();
		}		

		if ( $('#person').prop('checked') && $('#arbitr').prop('checked') ) {
				showHideIfPersonArbitrChecked();
		}

		if ( $('#company').prop('checked') && $('#arbitr').prop('checked') ) {
				showHideIfCompanyArbitrChecked();
		}


		$('input:radio').each(function(indx, el) {
				if ( $(el).prop('checked') && $(el).attr('id') === 'claim-asset') {
							$('#span-sum-entry').show();
						  $('#claim-asset-sum').focus();
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
					if ( $('#dispute-not-asset').prop('checked')) {
								if ( $('#person').prop('checked') ) {
											$('#sum-text').text('300');
								}
								if ( $('#company').prop('checked') ) {
											$('#sum-text').text('6000');
								}
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
					if ( $('#dispute-not-asset').prop('checked')) {
									$('#sum-text').text('6000');
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


	// При смена с иска на судебный приказ введенная сумма должна сохраняться
	$('#claim-asset').change(function() {
			if ( $('#claim-asset-sum-order').val() !== '' ) {
					$('#claim-asset-sum').val( $('#claim-asset-sum-order').val() );
					if ( $('general').prop('checked') ) {
						calcIskGeneral();
					}
					if ( $('arbitr').prop('checked') ) {
						calcIskArbitr();
					}
			}
	})

	$('#claim-asset-order').change(function() {
		if ( $('#claim-asset-sum').val() !== '' ) {
				$('#claim-asset-sum-order').val( $('#claim-asset-sum').val() );
				if ( $('general').prop('checked') ) {
					calcIskGeneralOrder();
				}
				if ( $('arbitr').prop('checked') ) {
					calcIskArbitrOrder();
				}
		}		
	})




































































	// $('.request-type-wrap').on('change', function(event) {
	// 			if (event.target.id == 'claim-asset') {
	// 						if ( $('#claim-asset').prop('checked') ) {
	// 									$('#span-sum-entry').show();										
	// 						}								
	// 			} else $('#span-sum-entry').hide();	
	// })



});