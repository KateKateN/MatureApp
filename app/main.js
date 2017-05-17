// fuction for different backgrounds on reload (login.html)
function changeImg(imgNumber)	{
			var myImages = ["img/bg_1.jpg", "img/bg_2.jpg", "img/bg_3.jpg", "img/bg_4.jpg", "img/bg_5.jpg", "img/bg_8.jpg", "img/bg_9.jpg", "img/bg_10.jpg", "img/bg_12.jpg"]; 
			var imgShown = document.body.style.backgroundImage;
			var newImgNumber =Math.floor(Math.random()*myImages.length);
			document.body.style.backgroundImage = 'url('+myImages[newImgNumber]+')';
		}
		window.onload=changeImg;