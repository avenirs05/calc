<!doctype html>
<html>
  <head>
    <title>Калькулятор госпошлины</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">		
		
    <!-- Bootstrap CSS -->
<!--     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous"> -->
 
    <link href="style-calc.css" rel="stylesheet">

<!--     <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script> -->
		


  </head>

  <body> 
	
		<div id="wrapper">
			<div class="payment-sum-wrap">
				<h5><b>Госпошлина:</b><br> <span id="sum-text">0</span> руб.</h5>
			</div>
			<h2>Калькулятор государственной пошлины</h2>
			
			<div class="claimant-wrap">
				<h5><b>Истец:</b></h5>
				<label>
					<input id="person" type="radio" name="claimant">
					<span>&nbsp;&nbsp;Физическое лицо</span>
				</label>
				<label>
					<input id="company" type="radio" name="claimant">
					<span>&nbsp;&nbsp;Юридическое лицо</span>
				</label>
			</div>

			<div class="court-wrap">
				<h5><b>Обращение в:</b></h5>
				<label>
					<input id="general" type="radio" name="court">
					<span>&nbsp;&nbsp;Суд общей юрисдикции</span>
				</label>
				<label>
					<input id="arbitr" type="radio" name="court">
					<span>&nbsp;&nbsp;Арбитражный суд</span>
				</label>
			</div>

			<div class="request-type-wrap">
				<h5><b>Тип заявления:</b></h5>

				<label>
					<input id="claim-asset" type="radio" name="request">
					<span>&nbsp;&nbsp;Исковое обращение имущественного характера</span>.						
					<span id="span-sum-entry" style="display: none;">
						<span id="label-sum-entry"><i>Введите сумму иска:&nbsp;</i></span>
						<input id="claim-asset-sum" type="text" name="request" autofocus>&nbsp;руб.
					</span>					
				</label>

				<label>
					<input id="claim-asset-order" type="radio" name="request">
					<span>&nbsp;&nbsp;Заявление о выдаче судебного приказа</span>.						
					<span id="span-sum-entry-order" style="display: none;">
						<span id="label-sum-entry-order"><i>Введите сумму требования:&nbsp;</i></span>
						<input id="claim-asset-sum-order" type="text" name="request">&nbsp;руб.
					</span>					
				</label>
				
				<label>
					<input id="salary" type="radio" name="request">
					<span>&nbsp;&nbsp;Требование зарплат, пособий, алиментов, возмещение вреда</span>
				</label>
				
				<label>
					<input id="crime" type="radio" name="request">
					<span>&nbsp;&nbsp;Взыскание вреда причиненного в результате совершенного преступления</span>
				</label>
				
				<label>
					<input id="documents" type="radio" name="request">
					<span>&nbsp;&nbsp;Выдача документов по уголовным делам либо требованию алиментов</span>
				</label>
				
				<label>
					<input id="divorce-appeal" type="radio" name="request">
					<span>&nbsp;&nbsp;Апелляция в отношении бракоразводных процессов</span>
				</label>
				
				<label>
					<input id="adoption" type="radio" name="request">
					<span>&nbsp;&nbsp;Дела об усыновлении</span>
				</label>
				
				<label>
					<input id="invalid" type="radio" name="request">
					<span>&nbsp;&nbsp;Защита неимущественных интересов инвалидов</span>
				</label>
				
				<label>
					<input id="consumer" type="radio" name="request">
					<span>&nbsp;&nbsp;Защита потребителями своих прав при приобретении товаров и услуг</span>
				</label>
				
				<label>
					<input id="dispute-not-asset" type="radio" name="request">
					<span>&nbsp;&nbsp;Подача искового заявления неимущественного характера</span>
				</label>	
			
				<label>
					<input id="claim-divorce" type="radio" name="request">
					<span>&nbsp;&nbsp;Подача искового заявления о расторжении брака</span>
				</label>
				
				<label>
					<input id="gov-act" type="radio" name="request">
					<span>&nbsp;&nbsp;Подача искового заявления об оспаривании нормативных актов государственных органов</span>
				</label>
				
				<label>
					<input id="alimony" type="radio" name="request">
					<span>&nbsp;&nbsp;Подача заявления по делам о взыскании алиментов</span>
				</label>

				<label>
					<input id="agreement" type="radio" name="request">
					<span>&nbsp;&nbsp;Подача искового заявления по спорам, возникающим при заключении, изменении или расторжении договоров</span>
				</label>

				<label>
					<input id="law-meaning" type="radio" name="request">
					<span>&nbsp;&nbsp;Подача заявления об установлении фактов, имеющих юридическое значение</span>
				</label>

				<label>
					<input id="bankruptcy" type="radio" name="request">
					<span>&nbsp;&nbsp;Подача заявления о признании должника несостоятельным (банкротом)</span>
				</label>

				<label>
					<input id="secure-claim" type="radio" name="request">
					<span>&nbsp;&nbsp;Подача заявления об обеспечении иска</span>
				</label>

				<label>
					<input id="supervision" type="radio" name="request">
					<span>&nbsp;&nbsp;Подача надзорной жалобы</span>
				</label>

				<label>
					<input id="appeal" type="radio" name="request">
					<span>&nbsp;&nbsp;Подача апелляционной жалобы и (или) кассационной жалобы</span>
				</label>

			</div>

			

		</div>

	<script src="jquery-3.1.1.min.js"></script>
	<script src="main.js"></script>
	<script src="script.js"></script>
	</body>
	
	</html>

