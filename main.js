$(function () {    

	$(document).on('change', function() {
		// Убираем/ставим нужные виды пошлин в зависимости от условий (физ_лицо, юрлицо, арб суд и т.д.)
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
					if ( $('#claim-asset').prop('checked') ) {						
									 $('#sum-text').text( calcIskGeneral() );							
					}	
					
					if ( $('#claim-asset-order').prop('checked') ) {		
									 $('#sum-text').text( calcIskGeneralOrder() );	
					}	

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

					if ( $('#gov-act').prop('checked')) {
								if ( $('#person').prop('checked') ) {
											$('#sum-text').text('300');
								}
								if ( $('#company').prop('checked') ) {
											$('#sum-text').text('4500');
								}
					}

					if ( $('#claim-divorce').prop('checked') ) {
								$('#sum-text').text('150');
					}

					if ( $('#alimony').prop('checked') ) {
								$('#sum-text').text('150');
					}

					if ( $('#supervision').prop('checked') ) {
								if ( $('#person').prop('checked') ) {
											$('#sum-text').text('300');
								}
								if ( $('#company').prop('checked') ) {
											$('#sum-text').text('6000');
								}
					}

					if ( $('#appeal').prop('checked') ) {
								if ( $('#person').prop('checked') ) {
											$('#sum-text').text('150');
								}
								if ( $('#company').prop('checked') ) {
											$('#sum-text').text('3000');
								}
					}

					if ( $('#law-meaning').prop('checked') ) {
								$('#sum-text').text('300');
					}


		}

		if ( $('#arbitr').prop('checked') ) {
					if ( $('#claim-asset').prop('checked') ) {						
								 $('#sum-text').text( calcIskArbitr() );							
					}
					
					if ( $('#claim-asset-order').prop('checked') ) {		
									 $('#sum-text').text( calcIskArbitrOrder() );	
					}		
					
					if ( $('#salary').prop('checked') ) {
								$('#sum-text').text( '0' );
					}
					
					if ( $('#dispute-not-asset').prop('checked')) {
									$('#sum-text').text('6000');
					}

					if ( $('#gov-act').prop('checked')) {
								if ( $('#person').prop('checked') ) {
											$('#sum-text').text('300');
								}
								if ( $('#company').prop('checked') ) {
											$('#sum-text').text('2000');
								}
					}

					if ( $('#supervision').prop('checked') ) {
								$('#sum-text').text('6000');
					}

					if ( $('#appeal').prop('checked') ) {
								$('#sum-text').text('3000');
					}

					if ( $('#agreement').prop('checked') ) {
								$('#sum-text').text('6000');
					}

					if ( $('#law-meaning').prop('checked') ) {
								$('#sum-text').text('3000');
					}

					if ( $('#bankruptcy').prop('checked')) {
								if ( $('#person').prop('checked') ) {
											$('#sum-text').text('300');
								}
								if ( $('#company').prop('checked') ) {
											$('#sum-text').text('6000');
								}
					}

					if ( $('#secure-claim').prop('checked') ) {
								$('#sum-text').text('3000');
					}
		}
					
	});

  // Введение суммы пользователем - иск
	$('#claim-asset-sum').keyup(function() {
			if ( $('#general').prop('checked') ) {
						$('#sum-text').text( calcIskGeneral() );
			}		

			if ( $('#arbitr').prop('checked') ) {
						$('#sum-text').text( calcIskArbitr() );
			}		
	});
	// Введение суммы пользователем - судебный приказ
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

	// При смена с судебного приказа на иск введенная сумма должна сохраняться
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