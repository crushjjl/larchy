(function($) {
	$(function() {
		/*detail.html load header and footer*/
		var clickGoodsID = localStorage.clickGoodsID,
			username = localStorage.loginUsername;
		$("#detail_header").load('header.html');
		$("#detail_footer").load('footer.html');
		/* magnifier */
		$('.picZoomer').picZoomer();
		$('.piclist li').on('click', function() {
			var $pic = $(this).find('img');
			$('.picZoomer-pic').attr('src', $pic.attr('src'));
		});
		/*detail_pro_show click event*/
		$(".detail_pro_show_list li").on('click', function(event) {
			event.preventDefault();
			$(this).addClass('selected').siblings().removeClass('selected');
			$(".detail_pro_show_content").children('div').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
		});
		/* from list.html click img to detail.html */
		$.ajax({
				url: '../php/pro_detail.php',
				type: 'GET',
				dataType: 'json',
				data: {
					"pro_id": clickGoodsID
				}
			})
			.done(function(res) {
				var data = res[0];
				$(".detail_tip_name").text(data.pro_name);
				$(".pic_preview img").attr('src', data.pro_src);
				$(".goodsDtail_name").text(data.pro_name);
				$(".goodsDtail_price_num").text(data.pro_price);
				$(".goodsDtail_sales_num").text(data.pro_sales);
				$(".goodsDtail_id_num").text(data.pro_id);
				$(".goodsDtail_service>span>a").text(data.pro_service);
				$(".goodsInventory_num").text(data.pro_num);
				$(".info_m").text(data.pro_comment);
			})
			.fail(function() {
				console.log("error");
			});
		/* opera goods quantity add or reduce */
		// reduce
		$(".goodsDtail_reduce").on('click', function(event) {
			event.preventDefault();
			var g_amount = $("#goodsDtail_quantity_num").val();
			if (g_amount <= 1) {
				return;
			} else {
				g_amount--;
			}
			$("#goodsDtail_quantity_num").val(g_amount);
		});

		// add
		$(".goodsDtail_increase").on('click', function(event) {
			event.preventDefault();
			var g_amount = $("#goodsDtail_quantity_num").val();
			if (g_amount >= 999) {
				return;
			} else {
				g_amount++;
			}
			$("#goodsDtail_quantity_num").val(g_amount);
		});
		// buy now
		$(".goodsDtail_buy_now").on('click', function(event) {
			event.preventDefault();
			// console.log(clickGoodsID);
			$.ajax({
					url: '../php/pro_detail.php',
					type: 'GET',
					dataType: 'json',
					data: {
						"pro_id": clickGoodsID
					}
				})
				.done(function(res) {
					var data = res[0];
					// console.log(data);
					var c_id = data.id,
						c_user = username,
						c_g_name = data.pro_name,
						c_g_id = data.pro_id,
						c_g_price = data.pro_price,
						c_g_src = data.pro_src,
						c_g_num = data.pro_num,
						c_g_count = $("#goodsDtail_quantity_num").val();
					// console.log(c_g_count);
					$.ajax({
							url: '../php/cart_add.php',
							type: 'GET',
							dataType: 'json',
							data: {
								'c_id': c_id,
								'c_user': c_user,
								'c_g_id': c_g_id,
								'c_g_name': c_g_name,
								'c_g_price': c_g_price,
								'c_g_src': c_g_src,
								'c_g_num': c_g_num,
								'c_g_count': c_g_count
							}
						})
						.done(function(res) {
							console.log(res);
							window.location = 'cart.html';
						})
						.fail(function() {
							console.log("error");
						});
				})
				.fail(function() {
					console.log("error");
				});
		});

		// addToCar
		$(".goodsDtail_addToCar").on('click', function(event) {
			event.preventDefault();
			// console.log(clickGoodsID);
			$.ajax({
					url: '../php/pro_detail.php',
					type: 'GET',
					dataType: 'json',
					data: {
						"pro_id": clickGoodsID
					}
				})
				.done(function(res) {
					var data = res[0];
					// console.log(data);
					var c_id = data.id,
						c_user = username,
						c_g_name = data.pro_name,
						c_g_id = data.pro_id,
						c_g_price = data.pro_price,
						c_g_src = data.pro_src,
						c_g_num = data.pro_num,
						c_g_count = $("#goodsDtail_quantity_num").val();
					// console.log(c_g_count);
					$.ajax({
							url: '../php/cart_add.php',
							type: 'GET',
							dataType: 'json',
							data: {
								'c_id': c_id,
								'c_user': c_user,
								'c_g_id': c_g_id,
								'c_g_name': c_g_name,
								'c_g_price': c_g_price,
								'c_g_src': c_g_src,
								'c_g_num': c_g_num,
								'c_g_count': c_g_count
							}
						})
						.done(function(res) {
							alert("添加成功!");
							console.log(res);
						})
						.fail(function() {
							console.log("error");
						});
				})
				.fail(function() {
					console.log("error");
				});
		});

		/* the same goods hot recommend */
		var hot_html = "";
		$.ajax({
				url: '../php/detail_hot.php',
				type: 'GET',
				dataType: 'json'
			})
			.done(function(res) {
				for (var i = 0; i < res.length; i++) {
					var hotDatas = res[i];
					hot_html += `
					<li>
						<a href="" title=""><img src="${hotDatas.pro_src}" alt="detailSimilarGoods" title="detailSimilarGoods"></a>
						<div class="dpstc_list_gooods">
							<a class="dpstc_list_gooods_name" href="" >${hotDatas.pro_name}</a>
							<span class="dpstc_list_gooods_price"><b>￥</b>${hotDatas.pro_price}</span>
							<span class="dpstc_list_gooods_sales">销量:<span>${hotDatas.pro_sales}</span></span>
						</div>
					</li>`;
				}
				$('.dpstc_list').append(hot_html);
			})
			.fail(function() {
				console.log("error");
			});
	});
})(jQuery);