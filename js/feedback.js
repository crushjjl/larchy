(function($) {
	$(function() {
		/* load header and footer to this feedback.html */
		$("#Message_header").load('header.html');
		$("#Message_footer").load('footer.html');
		/* save users' recommend message to this MySql... */
		var username = localStorage.loginUsername;
		// console.log(username);
		$('#msg_submit').on('click', function(event) {
			event.preventDefault();
			var msgName = $('#msg_nameTxt').val(),
				msgEmail = $('#msg_emailTxt').val(),
				msgTel = $('#msg_telTxt').val(),
				msgWords = $('#msg_remarks').val(),
				msgIdentifyCode = $('#msg_identify_codeTxt').val(),
				msgSendTime = new Date();
			if (username != undefined) {
				if (msgName != '' && msgEmail != '' && msgTel != '' && msgWords != '') {
					console.log(msgIdentifyCode);
					if (msgIdentifyCode == localStorage.validate) {
						$.ajax({
								url: '../php/feedback.php',
								type: 'GET',
								dataType: 'json',
								data: {
									'm_user': msgName,
									'm_email': msgEmail,
									'm_phone': msgTel,
									'm_content': msgWords,
									'm_sendtime': msgSendTime,
									'm_system_user': username
								}
							})
							.done(function(res) {
								console.log(res);
								if (res.status == 0) {
									alert('留言成功!');
								} else {
									alert('未知错误...');
								}
							})
							.fail(function() {
								console.log("error");
							});
					} else {
						alert('验证码输入有误!');
					}
				} else {
					alert('请完整填写您的留言信息!');
				}
			} else {
				alert('请先去登录!');
			}
		});
		$('#msg_reset').on('click', function(event) {
			event.preventDefault();
			$(this).parent().siblings('div').find('input').val("");
			$(this).parent().siblings('.msg_remarks').children('#msg_remarks').val("");
		});

		/***** 生成验证码**********/
		/*生成4位随机数*/
		function rand() {
			var str = "abcdefghijklmnopqrstuvwxyz0123456789";
			var arr = str.split("");
			var validate = "";
			var ranNum;
			for (var i = 0; i < 4; i++) {
				ranNum = Math.floor(Math.random() * 36); //随机数在[0,35]之间
				validate += arr[ranNum];
			}
			localStorage.validate = validate;
			return validate;
		}
		/*干扰线的随机x坐标值*/
		function lineX() {
			var ranLineX = Math.floor(Math.random() * 90);
			return ranLineX;
		}
		/*干扰线的随机y坐标值*/
		function lineY() {
			var ranLineY = Math.floor(Math.random() * 40);
			return ranLineY;
		}
		/****点击更换验证****/
		/*用户*/
		function clickChange() {
			var mycanvas = document.getElementById('mycanvas');
			var cxt = mycanvas.getContext('2d');
			cxt.fillStyle = '#000';
			cxt.fillRect(0, 0, 107, 38);
			/*生成干扰线20条*/
			for (var j = 0; j < 20; j++) {
				cxt.strokeStyle = '#fff';
				cxt.beginPath(); //若省略beginPath，则每点击一次验证码会累积干扰线的条数
				cxt.moveTo(lineX(), lineY());
				cxt.lineTo(lineX(), lineY());
				cxt.lineWidth = 0.5;
				cxt.closePath();
				cxt.stroke();
			}
			cxt.fillStyle = 'red';
			cxt.font = 'normal 26px Arial';
			cxt.fillText(rand(), 30, 25); //把rand()生成的随机数文本填充到canvas中  
		}
		clickChange();
		mycanvas.onclick = function(e) {
			e.preventDefault(); //阻止鼠标点击发生默认的行为
			clickChange();
			console.log(localStorage.validate);
		}
	});
})(jQuery);