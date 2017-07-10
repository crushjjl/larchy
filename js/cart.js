(function($) {
	$(function() {
		/*cart.html load header and footer*/
		$("#cart_header").load('header.html');
		$("#cart_footer").load('footer.html');
		/* detail.html buy now to cart.html */
		var _html = "",
			shopGoodsCount = 0,
			shopGoodsSub = 0,
			shopGoodsType = 0;
		$.ajax({
				url: '../php/cart_detail.php',
				type: 'GET',
				dataType: 'json',
			})
			.done(function(res) {
				// console.log(res.status);
				if (res.status == 1) {
					$(".cart_goods_info").html("购物车为空啦~,<a href='list.html' style='color:#9400D3;'>去购物吧></a>");
				} else {
					for (var i = 0; i < res.length; i++) {
						var data = res[i],
							smallSum = parseFloat(data.c_g_price * data.c_g_count).toFixed(2);
						_html += `
						<ul class="cart_goods_info_list">
							<li class="cart_goods_selected">
								<input type="checkbox" id="cart_pro_select" name="">
							</li>
							<li class="cart_pro_attr">
								<div class="cart_pro_attr_detail">
									<a href="" title=""><img class="cart_goods_img" src="${data.c_g_src}" alt="showGoods" title="showGoods"></a>
									<a class="cart_goods_msg">${data.c_g_name}</a>
								</div>
							</li>
							<li class="cart_pro_id">
					<span class="cart_pro_id_num">${data.c_g_id}</span>
							</li>
							<li class="cart_pro_price">
								<span class="cart_pro_price_num">${data.c_g_price}</span>
							</li>
							<li class="cart_pro_quantity">
								<div class="cart_quantity_revise">
									<button class="cart_goods_reduce">-</button>
									<input type="text" class="cart_goods_num" name="" value=${data.c_g_count}>
									<button class="cart_goods_increase">+</button>
								</div>
							</li>
							<li class="cart_pro_sum">
					<span class="cart_samll_sum">${smallSum}</span>
							</li>
							<li class="cart_pro_operate">
								<a href="javascript:void(0);" class="cart_pro_delete" title="">删除</a>
							</li>
						</ul>
					`;
						shopGoodsCount += parseInt(data.c_g_count);
						shopGoodsType++;
					}
					$(".cart_goods_info").append(_html);
					$(".cart_content_tip_num").text(shopGoodsCount);
					$('.cart_goods_count').text(shopGoodsType);
				}
			})
			.fail(function() {
				console.log("error");
			});
		/*cart_goods reduce*/
		$('body').on('click', '.cart_goods_reduce', function(event) {
			event.preventDefault();
			var clickGoodsID = $(this).parent().parent().siblings('.cart_pro_id').children('.cart_pro_id_num').html(),
				clickGoodscount = $(this).siblings('.cart_goods_num').val(),
				shopGoodsCountNew = $('.cart_content_tip_num').text(),
				cartSamllSum = $('.cart_samll_sum').text(),
				cartGoodsMoneyNew = $('.cart_goods_money').text();
			console.log(clickGoodscount);
			if (clickGoodscount <= 1) {
				return;
			} else {
				clickGoodscount--;
				shopGoodsCountNew--;
			}
			$(this).siblings('.cart_goods_num').val(clickGoodscount);
			$('.cart_content_tip_num').text(shopGoodsCountNew);
			// 更新数据库
			$.ajax({
					url: '../php/cart_opera.php',
					type: 'GET',
					dataType: 'json',
					data: {
						'c_g_id': clickGoodsID,
						'c_g_count': clickGoodscount
					}
				})
				.done(function(res) {
					console.log(res);
				})
				.fail(function() {
					console.log("error");
				});
			// update 小计金额
			var c_g_priceTxt = $(this).parent().parent().siblings('.cart_pro_price').children('.cart_pro_price_num').text(),
				smallCount = (parseFloat(c_g_priceTxt * clickGoodscount).toFixed(2));
			$(this).parent().parent().siblings('.cart_pro_sum').children('.cart_samll_sum').text(smallCount);
			// console.log(smallCount);

		});
		/*cart_goods increase*/
		$('body').on('click', '.cart_goods_increase', function(event) {
			event.preventDefault();
			var clickGoodsID = $(this).parent().parent().siblings('.cart_pro_id').children('.cart_pro_id_num').html(),
				clickGoodscount = $(this).siblings('.cart_goods_num').val(),
				shopGoodsCountNew = $('.cart_content_tip_num').text();
			if (clickGoodscount >= 999) {
				return;
			} else {
				clickGoodscount++;
				shopGoodsCountNew++;
			}
			$(this).siblings('.cart_goods_num').val(clickGoodscount);
			$('.cart_content_tip_num').text(shopGoodsCountNew);
			$.ajax({
					url: '../php/cart_opera.php',
					type: 'GET',
					dataType: 'json',
					data: {
						'c_g_id': clickGoodsID,
						'c_g_count': clickGoodscount
					}
				})
				.done(function(res) {
					console.log(res);
				})
				.fail(function() {
					console.log("error");
				});
			// update 小计金额
			var c_g_priceTxt = $(this).parent().parent().siblings('.cart_pro_price').children('.cart_pro_price_num').text(),
				smallCount = (parseFloat(c_g_priceTxt * clickGoodscount).toFixed(2));
			$(this).parent().parent().siblings('.cart_pro_sum').children('.cart_samll_sum').text(smallCount);
		});
		/* change the input:text value */
		var inputTxt = 0;
		$('body').on('focus', '.cart_goods_num', function(event) {
			event.preventDefault();
			inputTxt = $(this).val();
		});
		$('body').on('blur', '.cart_goods_num', function(event) {
			event.preventDefault();
			var initValue = $(this).val(),
				clickGoodsID = $(this).parent().parent().siblings('.cart_pro_id').children('.cart_pro_id_num').html(),
				shopGoodsCountNew = $('.cart_content_tip_num').text();
			if (!(/^[1-9]\d*$/.test(initValue))) { //不为数字
				$(this).val(inputTxt);
			} else { //为数字，则保存到数据库中，更新database
				$.ajax({
						url: '../php/cart_opera.php',
						type: 'GET',
						dataType: 'json',
						data: {
							'c_g_id': clickGoodsID,
							'c_g_count': initValue
						}
					})
					.done(function(res) {
						console.log(res);
					})
					.fail(function() {
						console.log("error");
					});
				// update 小计金额
				var c_g_priceTxt = $(this).parent().parent().siblings('.cart_pro_price').children('.cart_pro_price_num').text(),
					smallCount = (parseFloat(c_g_priceTxt * initValue).toFixed(2));
				$(this).parent().parent().siblings('.cart_pro_sum').children('.cart_samll_sum').text(smallCount);
			}
		});
		/*delete goods*/
		$('body').on('click', '.cart_pro_delete', function(event) {
			event.preventDefault();
			var $row = $(this).parents('.cart_goods_info_list'),
				deletegoodsID = $(this).parent().siblings('.cart_pro_id').children('.cart_pro_id_num').html(),
				shopGoodsTypeNew = $('.cart_goods_count').html(),
				cartTotalSum = $('.cart_goods_money').text(),
				cartSamllSumNew = $(this).parent().siblings('.cart_pro_sum').find('.cart_samll_sum').html();
			// console.log(deletegoodsID);
			$.ajax({
					url: '../php/cart_delete.php',
					type: 'GET',
					dataType: 'json',
					data: {
						'c_g_id': deletegoodsID
					},
				})
				.done(function(res) {
					console.log(res);
					if (res.status == 0) {
						console.log('还可以继续删除');
					} else if (res.status == 1) {
						$(".cart_goods_info").html("购物车为空啦~,<a href='list.html' style='color:#9400D3;'>去购物吧></a>");
						console.log('没得东西可以删除了!!');
					}
				})
				.fail(function() {
					console.log("error");
				});
			$row.remove();
			shopGoodsTypeNew--;
			var cartTotalSumNew = parseFloat(cartTotalSum - cartSamllSumNew).toFixed(2);
			$('.cart_goods_count').text(shopGoodsTypeNew);
			$('.cart_goods_money').text(cartTotalSumNew);
		});
		/*select all cart goods*/
		var checkedFlag = true;
		$('body').on('click', '#all_check,#cart_result_select', function() {
			if (checkedFlag) {
				$("input[type='checkbox']").prop('checked', true);
				checkedFlag = false;
			} else {
				$("input[type='checkbox']").prop('checked', false);
				checkedFlag = true;
			}
		});
		/*delete choose goods*/
		$('body').on('click', '.cart_del_pitchon', function(event) {
			event.preventDefault();
			var selectGoods = $("input:checked"),
				selectCheckedID = [],
				// $row = $(this).parents('.cart_goods_result').siblings('.cart_goods_info').find('.cart_goods_info_list'),
				selectGoodsID = selectGoods.parent().siblings('.cart_pro_id').find('.cart_pro_id_num');
			for (var i = 0; i < selectGoodsID.length; i++) {
				selectCheckedID.push($(selectGoodsID[i]).html());
			}
			$.ajax({
					url: '../php/cart_delete_sele.php',
					type: 'GET',
					dataType: 'json',
					data: {
						'ids': selectCheckedID
					}
				})
				.done(function(res) {
					console.log(res);
				})
				.fail(function() {
					console.log('error');
				});
			selectGoods.parents('.cart_goods_info_list').remove();
		});
		/*clear shop_cart*/
		$('body').on('click', '.cart_clear', function(event) {
			event.preventDefault();
			$.ajax({
					url: '../php/cart_clear.php',
					type: 'GET',
					dataType: 'json'
				})
				.done(function() {
					console.log("success");
				})
				.fail(function() {
					console.log("error");
				});
			$('.cart_goods_info').empty();
			$(".cart_goods_info").html("购物车为空啦~,<a href='list.html' style='color:#9400D3;'>去购物吧></a>");
		});
		/*Cart goods total money*/
		$('body').on('click', ":checkbox", function() {
			var selectedGoods = $('.cart_goods_info_list input:checked'),
				totalMoney = 0;
			selectedGoods.each(function(index, el) {
				totalMoney += parseFloat($(this).parents('.cart_goods_info_list').find('.cart_samll_sum').text());
			});
			$('.cart_goods_money').text(totalMoney.toFixed(2));
		});
		/*user submit order*/
		$('.cart_submitOrder').on('click', function(event) {
			event.preventDefault();
			var cartTotalMoney = $('.cart_goods_money').text(),
				username = window.localStorage.loginUsername;
			if (username != undefined) {
				if (cartTotalMoney != '0.00') {
					if (!window.localStorage) {
						alert("浏览器支持localStorage!")
					} else {
						console.log(cartTotalMoney);
						localStorage.cartTotalMoney = cartTotalMoney;
						window.location = 'order.html';
					}
				} else {
					alert('请先选择商品!');
				}
			} else {
				alert('请先去登录!')
			}
		});
	});
})(jQuery)