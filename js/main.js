var checkbox_selected = false;

$(document).ready(function(){
	$('#popupBack').click(function(){
		$('#popupBack').fadeOut(200);
		$('#popupBody').fadeOut(200);
		$('body').attr('style', 'overflow-y: auto;');
	});
	
	$("#chb").on("click", function () {
		if ($(this).is(":checked")) {
			checkbox_selected = true;
			$('.button').attr('style', 'opacity: 1; cursor: pointer;');
		} else {
			checkbox_selected = false;
			$('.button').attr('style', 'opacity: 0.5;');
		}
	});
});

function openItem(id) {
	$('#popupBack').fadeIn(200);
	$('#popupBody').fadeIn(200);
	$('body').attr('style', 'overflow-y: hidden;');
	switch (id) {
		case 1:
			$('#popupInfoName').text('Чулки полосатые');
			$('#popupInfoKK').text('Материал: нейлон');
			$('#popupInfoDescription').text('Чулки полосатые черного ' +
			'и оранжевого цветов создают веселое шкодливое настроение хозяйке. А длина выше колен ' +
			'- зрительно увеличивает длину женских ножек.');
			$('#popupInfoPrice').html('2199 &#8381;');
			break;
		case 2:
			$('#popupInfoName').text('Носки высокие');
			$('#popupInfoKK').text('Материал: хлопок');
			$('#popupInfoDescription').text('Носки с высокой спортивной резинкой универсальны: так как цвета ' +
			'сдержанные, их сначала надевают с брюками на собеседование, а после — с шортами в барчик.');
			$('#popupInfoPrice').html('700 &#8381;');
			break;
		case 3:
			$('#popupInfoName').text('Носки тонкие');
			$('#popupInfoKK').text('Материал: мерсеризованный хлопок');
			$('#popupInfoDescription').text('Тонкие прочные носки из мерсеризованного хлопка, ' +
			'итальянского качества, премиальная коллекция.');
			$('#popupInfoPrice').html('550 &#8381;');
			break;
		case 4:
			$('#popupInfoName').text('Гольфы');
			$('#popupInfoKK').text('Материал: полиамид');
			$('#popupInfoDescription').text('Гольфы с однобортной анатомической резинкой, которая ' +
			'не сдавливает и прекрасно удерживает гольфы на ногах.');
			$('#popupInfoPrice').html('1550 &#8381;');
			break;
		case 5:
			$('#popupInfoName').text('Носки вязаные шерстяные');
			$('#popupInfoKK').text('Материал: овечья шерсть');
			$('#popupInfoDescription').text('Шерстяные носки связаны из овечьей шерсти. Они толстые, ' +
			'мягкие и теплые. Основная часть носка связана из 100% овечьей шерсти.');
			$('#popupInfoPrice').html('50 000 &#8381;');
			break;
		case 6:
			$('#popupInfoName').text('Носки детские');
			$('#popupInfoKK').text('Материал: хлопок');
			$('#popupInfoDescription').text('Носки выполнены из пряжи с высоким содержанием хлопка, с добавлением эластана ' + 
			'для лучшей посадки по ноге и высокой износостойкости.');
			$('#popupInfoPrice').html('700 &#8381;');
			break;
		default:
			alert( "Такого товара не существует" );
	}
	$('#popupImage img').attr('src', 'image/tovar/'+id+'.jpg');
}

function goOrder() {
	if(checkbox_selected == false) { alert('Нужно дать согласие на обработку персональных данных'); }
	else {
		var fullname = $('#add_order_fullname').val();
		var email = $('#add_order_email').val();
		var phone = $('#add_order_phone').val();
		var delivery = $('#add_order_delivery').attr("value");
		var addtext = $('#add_order_addtext').val();
		if(isEmpty(fullname)) { alert('Укажите фамилию, имя и отчество'); }
		else if(isEmpty(email)) { alert('Укажите E-Mail'); }
		else if(isEmpty(phone)) { alert('Укажите номер телефона'); }
		else {
			$.ajax({
				url: '/formdata.php',
				type: 'POST',
				data: {fullname: fullname, email: email, phone: phone, delivery: delivery, addtext: addtext},
				success: function(data){
					if(data){
						var getData = $.parseJSON(data);
						if(getData.result == 1){
							alert('Письмо отправлено на почту');
						}
						else if(getData.result == 2) {
							alert('3. Неизвестная ошибка');
						}
						else if(getData.result == 3) {
							alert('4. Неизвестная ошибка');
						}
					}
					else{ alert('1. Неизвестная ошибка'); }
				},
				error:function(){ alert('2. Неизвестная ошибка'); }
			});
		}
	}
}

function isEmpty(string) {
	if(string == '' || string == ' ' || string.length < 1) {return true;}
	else { return false; }
}