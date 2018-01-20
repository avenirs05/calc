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




});