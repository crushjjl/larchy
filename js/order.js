(function($) {
	$(function() {
		/*order.html load header and footer*/
		$("#order_header").load('header.html');
		$("#order_footer").load('footer.html');
		/*use distpicker pulg-in*/
		// $("#distpicker").distpicker({
		// 	placeholder:false,
		// 	province:'----省----',
		// 	city:'----市----',
		// 	district:'----区----'
		// });
		/* load datas from cart to the order.html */
		var orderHtml = "";
		$.ajax({
				url: '../php/cart_detail.php',
				type: 'GET',
				dataType: 'json'
			})
			.done(function(res) {
				for (var i = 0; i < res.length; i++) {
					var orderData = res[i],
						smallSum = parseFloat(orderData.c_g_price * orderData.c_g_count).toFixed(2);
					orderHtml += `<ul class="cart_goods_info_list">
							<li class="cart_goods_selected">
				<input type="checkbox" id="cart_pro_select" name="" checked>
							</li>
							<li class="cart_pro_attr">
								<div class="cart_pro_attr_detail">
									<a href="" title=""><img class="cart_goods_img" src="${orderData.c_g_src}" alt="showGoods" title="showGoods"></a>
									<a class="cart_goods_msg">${orderData.c_g_name}</a>
								</div>
							</li>
							<li class="cart_pro_id">
					<span class="cart_pro_id_num">${orderData.c_g_id}</span>
							</li>
							<li class="cart_pro_price">
								<span class="cart_pro_price_num">${orderData.c_g_price}</span>
							</li>
							<li class="cart_pro_quantity">
								<div class="cart_quantity_revise">
									<button class="cart_goods_reduce">-</button>
									<input type="text" class="cart_goods_num" name="" value=${orderData.c_g_count}>
									<button class="cart_goods_increase">+</button>
								</div>
							</li>
							<li class="cart_pro_sum">
					<span class="cart_samll_sum">${smallSum}</span>
							</li>
							<li class="cart_pro_operate">
								<a href="javascript:void(0);" class="cart_pro_delete" title="">删除</a>
							</li>
						</ul>`;
				}
				$(".products_info").append(orderHtml);
			})
			.fail(function() {
				console.log("error");
			});

		/* user order information click event */
		var username = localStorage.loginUsername,
			cartTotalMoney = localStorage.cartTotalMoney;
		$('.pay_amount_money').text(cartTotalMoney);
		$('.select_district').change(function(event) {
			var select_province = $('.select_province').val(),
				select_city = $('.select_city').val(),
				select_district = $('.select_district').val();
			var addressHtml = select_province + select_city + select_district;
			$('#user_rece_address').val(addressHtml);
		});
		$('.confirm_receiver_info').on('click', function(event) {
			event.preventDefault();
			var usernameTxt = $('#receiver_name').val(),
				userTel = $('#receiver_tel').val(),
				userAddress = $('#user_rece_address').val(),
				userRemarks = $('#user_order_remarks').val();
			// console.log(usernameTxt + ',' + userTel + ',' + userAddress + ',' + userRemarks);
			console.log(cartTotalMoney);
			if (usernameTxt != '' && userTel != '' && userAddress != '' && cartTotalMoney != undefined) {
				// console.log(1231231);
				$.ajax({
						url: '../php/order.php',
						type: 'GET',
						dataType: 'json',
						data: {
							'o_user': usernameTxt,
							'o_user_tel': userTel,
							'o_user_add': userAddress,
							'o_remarks': userRemarks,
							'o_totalmoney': cartTotalMoney,
							'o_c_user': username
						}
					})
					.done(function(res) {
						console.log(res);
						// alert('个人信息提交成功!');
					})
					.fail(function() {
						console.log("error");
					});
			} else {
				alert('请先填写核对订单信息!');
			}
		});
		/* confirm_order event */
		$('.confirm_order').on('click', function(event) {
			event.preventDefault();
			var usernameTxt = $('#receiver_name').val(),
				userTel = $('#receiver_tel').val(),
				userAddress = $('#user_rece_address').val(),
				userRemarks = $('#user_order_remarks').val();
			if (usernameTxt != '' && userTel != '' && userAddress != '' && cartTotalMoney != undefined) {
				window.location = '../html/pay_order.html';
			} else {
				alert('请先填写订单信息!');
			}
		});
	});
})(jQuery);