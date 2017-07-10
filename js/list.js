(function($) {
	$(function() {
		/*list.html load header and footer*/
		$("#list_header").load('header.html');
		$("#list_footer").load('footer.html');
		/*list_nav click event*/
		$('.list_nav_title>li').on('click', function(event) {
			event.preventDefault();
			$(this).find('a').addClass('list_nav_active').parent().siblings().children().removeClass('list_nav_active');
			// console.log($('.list_goods_flag'));
			$('.list_goods_flag').eq($(this).index()).css('display', 'block').siblings('div').not($('.list_nav')).css('display', 'none');
		});
		/* load datas from database Rendering to list.html */
		var _html = "",
			flage = "false";
		if (localStorage.flage) {
			flage = localStorage.flage;
		}
		if (flage == "false") {
			$.ajax({
					url: '../php/pro_list.php',
					type: 'GET',
					dataType: 'json'
				})
				.done(function(res) {
					for (var i = 0; i < res.length; i++) {
						var data = res[i];
						// console.log(data);
						_html += `
				<li>
					<div class="list_pro_info">
						<div class="pro_img">
							<a href=""><img src="${data.pro_src}" alt="goodsImg" class="goodsImg"></a>
						</div>
						<div class="pro_price">
							<span class="pro_price_logo">￥</span>
							<span class="pro_price_num">${data.pro_price}</span>
							<span class="pro_sales_logo">销量:</span>
							<span class="pro_sales_num">${data.pro_sales}</span>
						</div>
						<div class="pro_name">
							<a href="" title="">${data.pro_name}</a>
							<span class="pro_sales_id">${data.pro_id}</span>
						</div>
					</div>
				</li>`;
					}
					$(".list_pro_show").append(_html);
				})
				.fail(function() {
					console.log("error");
				});
		}

		/* load search goods to this page */
		var searchGoodsID = (window.localStorage.searchGoodsID).split(","),
			searchHtml = "";
		// console.log(searchGoodsID);
		if (flage == "true") {
			$.ajax({
					url: '../php/search_result.php',
					type: 'GET',
					dataType: 'json',
					data: {
						'goodsid': searchGoodsID
					},
				})
				.done(function(res) {
					var searchDatas = res.msg;
					// console.log(searchDatas);
					for (var i = 0; i < searchDatas.length; i++) {
						var datas = searchDatas[i];
						// console.log(datas);
						searchHtml += `
						<li>
							<div class="list_pro_info">
								<div class="pro_img">
									<a href=""><img src="${datas.pro_src}" alt="goodsImg" class="goodsImg"></a>
								</div>
								<div class="pro_price">
									<span class="pro_price_logo">￥</span>
									<span class="pro_price_num">${datas.pro_price}</span>
									<span class="pro_sales_logo">销量:</span>
									<span class="pro_sales_num">${datas.pro_sales}</span>
								</div>
								<div class="pro_name">
									<a href="" title="">${datas.pro_name}</a>
									<span class="pro_sales_id">${datas.pro_id}</span>
								</div>
							</div>
						</li>
					`;
					}
					$(".list_pro_show").html(searchHtml);
					localStorage.flage = false;
				})
				.fail(function() {
					console.log("error");
				});
		}

		/* click the img go to detail.html */
		$('body').on('click', '.pro_img', function(event) {
			event.preventDefault();
			var clickGoodsID = $(this).siblings('.pro_name').find('.pro_sales_id').html();
			if (!window.localStorage) {
				alert("浏览器支持localStorage!")
			} else {
				console.log(clickGoodsID);
				localStorage.clickGoodsID = clickGoodsID;
				window.location = 'detail.html';
			}
		});

	});
})(jQuery);