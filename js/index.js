/*Carousel about banner*/
(function($) {
	$(function() {
		/* Carousel figure */
		var $lis = $(".banner li"),
			len = $lis.length,
			currentIndex = 0,
			nextIndex = 1,
			html = "",
			timer = null;
		// create dynamics circles
		for (var i = 0; i < len; i++) {
			html += "<div></div>";
		}
		// circles' add+css+click event
		$(html).appendTo('#pages').eq(0).addClass('curr').end().on('click', function(event) {
			// event.preventDefault();
			if (currentIndex === $(this).index()) {
				return;
			}
			nextIndex = $(this).index();
			move();
		});
		// prev
		$("#prev").on('click', function(event) {
			nextIndex = currentIndex - 1;
			if (nextIndex < 0) {
				nextIndex = len - 1;
			}
			move();
		});
		// next
		$("#next").on('click', function(event) {
			move();
		});
		// hover event
		$(".banner").hover(function() {
			clearInterval(timer);
		}, function() {
			timer = setInterval(move, 3000);
		}).mouseleave();
		// img move
		function move() {
			$lis.eq(currentIndex).fadeOut();
			$lis.eq(nextIndex).fadeIn();
			// set circle's css change
			$("#pages div").eq(nextIndex).addClass('curr').siblings().removeClass('curr');
			currentIndex = nextIndex;
			nextIndex++;
			// when to last img
			if (nextIndex === len) {
				nextIndex = 0;
			}
		}
		/*prev and next click event*/
		$(".banner").hover(function() {
			$("#prev,#next").css('display', 'block');
		}, function() {
			$("#prev,#next").css('display', 'none');
		});
		/*input click event*/
		$("#search_value").focus(function(event) {
			$(".search").animate({
				"width": "+300px"
			}, "slow");
		}).blur(function(event) {
			$(".search").animate({
				"width": "250px"
			}, "slow");
		});
		/*Sign in and Sign up modal box*/
		$(".signIn").on('click', function() {
			$(".signIn_box").fadeIn();
		});
		$(".signUp").on('click', function() {
			$(".signUp_box").fadeIn();
		});
		$(".goToSignup").on('click', function(event) {
			event.preventDefault();
			$(".signIn_box").fadeOut();
			$(".signUp_box").fadeIn();
		});
		$(".goToSignin").on('click', function(event) {
			event.preventDefault();
			$(".signUp_box").fadeOut();
			$(".signIn_box").fadeIn();
		});
		/* click else area hidden this modal box */
		$(document).mouseup(function(e) {
			// 设置目标区域
			var modal_area1 = $(".signIn_content"),
				modal_area2 = $(".signUp_content");
			// 判断点击事件发生在区域外的条件是：
			// 1. 点击事件的对象不是目标区域本身
			// 2. 事件对象同时也不是目标区域的子元素
			if (!modal_area1.is(e.target) && modal_area1.has(e.target).length === 0) {
				$(".signIn_box").fadeOut();
			}
			if (!modal_area2.is(e.target) && modal_area2.has(e.target).length === 0) {
				$(".signUp_box").fadeOut();
			}
		});
		// set modal box's width and height
		$(".signIn_box").css({
			"width": $(window).width(),
			"height": $(window).height()
		}).resize(function(event) {
			$(".signIn_box").css({
				"width": $(window).width(),
				"height": $(window).height()
			});
		});
	});
})(jQuery);
(function($) {
	$(function() {
		/*classify click event*/
		$(".classify_list li a").on('click', function(event) {
			event.preventDefault();
			$(this).addClass('classify_active').parent().siblings().children().removeClass('classify_active');
			$(".classify_content_flag").eq($(this).parent().index()).css('display', 'block').siblings('div').not($('.classify_item')[0]).css('display', 'none');
		});
		/*nav_list hover event*/
		// 线程 IDs  
		var mouseout_tid = [],
			mouseover_tid = [];
		$('.nav_list > li').each(function(index) {
			$(this).hover(
				// 鼠标进入 		
				function() {
					var _self = this;
					// 停止卷起事件 		
					clearTimeout(mouseout_tid[index]);
					// 当鼠标进入超过 0.2 秒, 展开菜单, 并记录到线程 ID 中 		
					mouseover_tid[index] = setTimeout(function() {
						$(_self).addClass('navList_li_active').siblings().removeClass('navList_li_active');
						$(_self).find('div').slideDown("400");
					}, 200);
				},
				// 鼠标离开 			
				function() {
					var _self = this;
					// 停止展开事件 			
					clearTimeout(mouseover_tid[index]);
					// 当鼠标离开超过 0.2 秒, 卷起菜单, 并记录到线程 ID 中 			
					mouseout_tid[index] = setTimeout(function() {
						$(_self).find('div').slideUp("400");
					}, 200);
				}
			);
		});
		/* backtoTop  hide or show */
		var winHeight = $(window).height(),
			hn_height = $(".header_logo").height() + $(".nav").height();
		$(window).on('scroll', function(event) {
			event.preventDefault();
			var _scrollTop = $(this).scrollTop();
			if (_scrollTop > hn_height) {
				$(".backtoTop,.header_horizontal").stop().fadeIn();
			} else {
				$(".backtoTop,.header_horizontal").stop().fadeOut();
			}
		});
		/* backtoTop click event */
		$(".backtoTop_logo").on('click', function(event) {
			event.preventDefault();
			$(window).scrollTop(0);
		});
	});
})(jQuery);
/*Carousel about classify*/
(function($) {
	/*$(function() {
		$(window).on('load', function() {
			var $lisClassify = $(".classify_content_first_center li"),
				lenClassify = $lisClassify.length,
				liWidth = $lisClassify.eq(0).outerWidth(),
				index = 2,
				html = "",
				timer = null,
				$first = $lisClassify.eq(0).clone(true),
				$last = $lisClassify.eq(lenClassify - 1).clone(true);

			$(".classify_content_first_center_list").append($first).prepend($last);
			lenClassify += 2;
			$(".classify_content_first_center_list").width(lenClassify * liWidth);

			// begin show picture
			$(".classify_content_first_center_list").css("left", -liWidth);
			for (var i = 0; i < lenClassify - 2; i++) {
				html += "<div>" + (i + 1) + "</div>";
			}
			$(html).appendTo('#pagesClassify').eq(0).addClass('currClassify').end().on('click', function() {
				index = $(this).index() + 1;
				moveClassify();
			});
			// hover event
			$(".classify_content_first_center").hover(function() {
				clearInterval(timer);
			}, function() {
				timer = setInterval(moveClassify, 2000);
			}).trigger('mouseleave');

			// move
			function moveClassify() {
				var _left = -1 * index * liWidth;
				// calc circles index from img index
				var circleIndex = index > lenClassify - 2 ? 0 : index - 1;
				$("#pagesClassify div").eq(circleIndex).addClass('currClassify').siblings().removeClass('currClassify');
				index++;
				$(".classify_content_first_center_list").animate({
					left: _left
				}, function() {
					if (index === lenClassify) { //when index++ to last img,to initial status
						$(".classify_content_first_center_list").css('left', -liWidth);
						index = 2;
					} else if (index === 1) {
						$(".classify_content_first_center_list").css('left', -1 * (lenClassify - 2) * liWidth);
						index = lenClassify - 1;
					}
				})
			}
		});
	});*/

	/*use swiper for Carousel*/
	var mySwiper1 = new Swiper('.swiper-container-1', {
		direction: 'vertical',
		loop: true,
		effect: 'cube',
		autoplay: 3000,
		cube: {
			slideShadows: true,
			shadow: true,
			shadowOffset: 100,
			shadowScale: 0.6
		},
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev'
	});
	var mySwiper2 = new Swiper('.swiper-container-2', {
		direction: 'horizontal',
		loop: true,
		effect: 'cube',
		autoplay: 3000,
		cube: {
			slideShadows: true,
			shadow: true,
			shadowOffset: 100,
			shadowScale: 0.6
		}
	});
	/*search click event*/
	$(document).on('click', '.search_logo', function(event) {
		event.preventDefault();
		localStorage.flage = true;
		event.preventDefault();
		var searchTxt = $('#search_value').val(),
			searchGoodsID = [];
		if (searchTxt != '') {
			// console.log(searchTxt);
			$.ajax({
					url: 'php/search_goods.php',
					type: 'GET',
					dataType: 'json',
					data: {
						'pro_name': searchTxt
					},
				})
				.done(function(res) {
					if (res.status == 0) {
						var data = res.msg;
						for (var i = 0; i < data.length; i++) {
							var _data = data[i];
							searchGoodsID.push(_data.pro_id);
						}
						// console.log(searchGoodsID);
						localStorage.searchGoodsID = searchGoodsID;
						window.location = 'html/list.html';
					} else {
						alert('没有你所查找的商品信息!');
					}
				})
				.fail(function() {
					console.log("error");
				});
		} else {
			alert('请输入搜素商品的信息或关键字!');
		}
	});
})(jQuery);
/*Sign in and Sign up*/
(function($) {
	$(function() {
		/* user register */
		// username and password at least 3 words
		var register_flag = true;
		$("#register_name").on('blur', function(event) {
			event.preventDefault();
			var unametxt = $("#register_name").val(),
				upwdtxt = $("#register_pwd").val(),
				upwd2txt = $("#confirm_pwd").val();
			if (!(/^\w{3,}$/.test(this.value))) {
				$(".unameError").html("Username Error!");
				register_flag = false;
				return;
			}
			$.ajax({
					url: 'php/check_username.php',
					type: 'GET',
					dataType: 'json',
					data: {
						"username": unametxt
					}
				})
				.done(function(data) {
					// console.log(data);
					if (data.status === 0) {
						$(".unameError").html("The name already exists.");
						register_flag = false;
					} else {
						$(".unameError").html("√");
					}
				});
		});
		$("#register_email").on('blur', function(event) {
			event.preventDefault();
			var uemailtxt = $("#register_email").val(),
				emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
			if (!(emailReg.test(this.value))) {
				$(".uemailError").html("Email Address Error!");
				register_flag = false;
			} else {
				$(".uemailError").html("√");
			}
		});
		$("#register_pwd").on('blur', function(event) {
			event.preventDefault();
			var pwdReg = /^\w{3,17}$/;
			if (!(pwdReg.test(this.value))) {
				$(".upwdError").html("Password Error!");
				register_flag = false;
			} else {
				$(".upwdError").html("√");
			}
		});
		$("#confirm_pwd").on('blur', function(event) {
			event.preventDefault();
			var upwdtxt = $("#register_pwd").val(),
				upwd2txt = $("#confirm_pwd").val();
			if (upwdtxt !== upwd2txt) {
				$(".upwd2Error").html("Password Not Match!");
				register_flag = false;
			} else {
				$(".upwd2Error").html("＜（＾－＾）＞");
			}
		});
		$("#register_btn").on('click', function(event) {
			event.preventDefault();
			if (register_flag == true) {
				var unametxt = $("#register_name").val(),
					uemailtxt = $("#register_email").val(),
					upwdtxt = $("#register_pwd").val(),
					upwd2txt = $("#confirm_pwd").val();
				$.ajax({
						url: 'php/register.php',
						type: 'post',
						dataType: 'json',
						data: {
							"username": unametxt,
							"password": upwdtxt,
							"email": uemailtxt
						}
					})
					.done(function(data) {
						console.log("success");
						if (data.status === 0) {
							$("#register_btn").val("Success,go to Sign in...");
						} else {
							$("#register_btn").val("Failed!");
						}
					});
			}
		});

		/*user login*/
		$("#login_btn").on('click', function(event) {
			event.preventDefault();
			var username = $("#login_field").val(),
				password = $("#login_pwd").val();
			$.ajax({
					url: 'php/login.php',
					type: 'POST',
					dataType: 'json',
					data: {
						"username": username,
						"email": username,
						"password": password
					}
				})
				.done(function(data) {
					if (data.status === 0) {
						$("#login_btn").val("Sign in Success,go to shopping...");
						setTimeout(function() {
							$(".signIn_box").css('display', 'none');
							$('.user').html("Welcome to LaRcHY:" + "<a href='html/cart.html' style='color:red;'>" + username + "</a>");
						}, 2000);
						if (!window.localStorage) {
							alert("浏览器支持localstorage");
						} else {
							var storage = window.localStorage;
							storage.loginUsername = username;
							// console.log(storage.loginUsername);
						}
					} else {
						$("#login_btn").val("Sorry,Sign in Failed...");
						$(".signIn_logo>h1").text('Sorry,Login Failed!').css('color', 'red');
					}
				});
		});

		/*username*/
		console.log(localStorage.loginUsername)
		var username = localStorage.loginUsername;
		/*if (username != undefined) {
			// console.log(username);
			$('.user').html("Welcome to LaRcHY:" + "<a href='html/cart.html' style='color:red;'>" + username + "</a>");
			// var $success = $("<div style='width:100%;height:32px;lineHeight:32px;textAlign:center;'>Welcome to LaRcHY:"+"<a style='color:red;'>"+username+"</a></div>");
			// $('.user').append($success);
		} else {
			return;
		}*/
	});
})(jQuery);