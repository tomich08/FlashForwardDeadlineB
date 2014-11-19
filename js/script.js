
/**
* The following function/methods are used to transition between different pages on the one page site.
* animates opacity
* manipulates display/block of HTML elements
* manipulates zIndex
*/
document.getElementsByClassName("next")[4].onclick = 
	function(){
		finished();
	}
	
function finished(){
	//sets display options in order for step four to display
	alert("Thank you for visiting! This site is intended for portfolio purposes only by Matt Tomich");
	document.getElementById("main").style.opacity = "1";
	document.getElementById("build").style.opacity = "0";
	document.getElementById("build").style.zIndex = "5";
	document.getElementById("about").style.opacity = "0";
	document.getElementById("about").style.zIndex = "1";
	document.getElementById("contact").style.opacity = "0";
	document.getElementById("contact").style.zIndex = "1";
	
	document.getElementById("contact").style.transition = "opacity 1s";
	document.getElementById("contact").style.webkitTransition = "opacity 1s";
	
	document.getElementById("main").style.transition = "opacity 2s";
	document.getElementById("main").style.webkitTransition = "opacity 2s";
	
	document.getElementById("build").style.transition = "opacity 1s";
	document.getElementById("build").style.webkitTransition = "opacity 1s";
	
	document.getElementById("about").style.transition = "opacity 1s";
	document.getElementById("about").style.webkitTransition = "opacity 1s";
	updateCart();
}//end cart


document.getElementsByClassName("prev")[3].onclick = 
	function(){
		goBackStepFour();
		
	}

	
function goBackStepFour(){
	//sets display options in order to go back to step three from step four.
	document.getElementsByClassName("steps")[0].src="img/stepFour.png";
	document.getElementsByClassName("stepFour")[0].style.display="block";	
	document.getElementsByClassName("stepThree")[0].style.display= "none";	
	document.getElementById("miniCart").style.display= "none";
	updateCart();
}//end goBackStepThree
	

document.getElementsByClassName("next")[3].onclick = 
	function(){
		cart();
	}
	
function cart(){
	//sets display options in order for step four to display
	document.getElementsByClassName("steps")[0].src="img/checkout.png";
	document.getElementsByClassName("stepThree")[0].style.display="none";
	document.getElementsByClassName("stepFour")[0].style.display= "none";
	document.getElementById("miniCart").style.display= "block";
	updateCart();
}//end cart


document.getElementsByClassName("prev")[2].onclick = 
	function(){
		goBackStepThree();
	}

	
function goBackStepThree(){
	//sets display options in order to go back to step three from step four.
	document.getElementsByClassName("steps")[0].src="img/stepthree.png";
	document.getElementsByClassName("stepFour")[0].style.display="none";
	document.getElementsByClassName("stepThree")[0].style.display= "block";	
	document.getElementById("miniCart").style.display= "none";
	updateCart();
}//end goBackStepThree
	

document.getElementsByClassName("next")[2].onclick = 
	function(){
		step4();
	}
	
function step4(){
	//sets display options in order for step four to display
	document.getElementsByClassName("steps")[0].src="img/stepfour.png";
	document.getElementsByClassName("stepThree")[0].style.display="none";
	document.getElementsByClassName("stepFour")[0].style.display= "block";
	document.getElementById("miniCart").style.display= "none";
	updateCart();
}//end step4

document.getElementsByClassName("prev")[1].onclick = 
	function(){
		goBackStepTwo();
	}
	
function goBackStepTwo(){
	//sets display options for step 2 to appear
	document.getElementsByClassName("steps")[0].src="img/steptwo.png";
	document.getElementsByClassName("stepTwo")[0].style.display="block";	
	document.getElementsByClassName("stepThree")[0].style.display= "none";
	document.getElementById("miniCart").style.display= "none";
	updateCart();
}//end goBackStepTwo
	

document.getElementsByClassName("next")[1].onclick = 
	function(){
		step3();
	}
	
function step3(){
	//sets display options for step 3 to appear
	document.getElementsByClassName("steps")[0].src="img/stepthree.png";
	document.getElementsByClassName("stepTwo")[0].style.display="none";	
	document.getElementsByClassName("stepThree")[0].style.display= "block";
	document.getElementById("miniCart").style.display= "none";
	updateCart();
}//end step3



document.getElementsByClassName("prev")[0].onclick = 
	function(){
		goBackStepOne();
	}
	
function goBackStepOne(){
	//sets display options for step 1 to appear
	document.getElementsByClassName("steps")[0].src="img/stepone.png";
	document.getElementsByClassName("stepTwo")[0].style.display="none";	
	document.getElementsByClassName("stepOne")[0].style.display= "block";
	document.getElementById("miniCart").style.display= "none";
	updateCart();
}//end goBackStepOne
	

document.getElementsByClassName("next")[0].onclick = 
	function(){
		step2();
	}
	
function step2(){
	//sets display options for step 2 to appear
	document.getElementsByClassName("steps")[0].src="img/steptwo.png";
	document.getElementsByClassName("stepTwo")[0].style.display="block";	
	document.getElementsByClassName("stepOne")[0].style.display= "none";
	document.getElementById("miniCart").style.display= "none";
	updateCart();
}//end step2


//this will open up contact and about pages

document.getElementsByTagName("a")[3].onclick = 
	function(){
		contactDisplay();	
	}
	
function contactDisplay(){
	//displays content Contact display
	document.getElementById("main").style.opacity = ".3";
	document.getElementById("build").style.opacity = "0";
	document.getElementById("about").style.opacity = "0";
	document.getElementById("about").style.zIndex = "5";
	document.getElementById("contact").style.opacity = ".9";
	document.getElementById("contact").style.zIndex = "20";
	
	document.getElementById("contact").style.transition = "opacity 2s";
	document.getElementById("contact").style.webkitTransition = "opacity 2s";
	
	document.getElementById("main").style.transition = "opacity 1s";
	document.getElementById("main").style.webkitTransition = "opacity 1s";
	
	document.getElementById("build").style.transition = "opacity 1s";
	document.getElementById("build").style.webkitTransition = "opacity 1s";	
	
	document.getElementById("about").style.transition = "opacity 2s";
	document.getElementById("about").style.webkitTransition = "opacity 2s";
}//end contactDisplay





document.getElementsByTagName("a")[2].onclick = 
	function(){
		aboutDisplay();	
	}
	
function aboutDisplay(){
	//displays the about section
	document.getElementById("main").style.opacity = ".3";
	document.getElementById("build").style.opacity = "0";
	document.getElementById("about").style.opacity = ".9";
	document.getElementById("about").style.zIndex = "20";
	document.getElementById("contact").style.opacity = "0";
	document.getElementById("contact").style.zIndex = "1";
	document.getElementById("contact").style.transition = "opacity 1s";
	document.getElementById("contact").style.webkitTransition = "opacity 1s";
	
	document.getElementById("main").style.transition = "opacity 1s";
	document.getElementById("main").style.webkitTransition = "opacity 1s";
	
	document.getElementById("build").style.transition = "opacity 1s";
	document.getElementById("build").style.webkitTransition = "opacity 1s";	
	
	document.getElementById("about").style.transition = "opacity 2s";
	document.getElementById("about").style.webkitTransition = "opacity 2s";
}//end aboutDisplay
	
	

document.getElementById("center").onclick = 
	function(){
		displayBuild();	
	}
	
document.getElementsByTagName("a")[1].onclick = 
	function(){
		displayBuild2();	
	}
	
document.getElementsByTagName("a")[0].onclick = 
	function(){
		homeDisplay();	
	}

function homeDisplay(){
	//sets disply to home screen
	document.getElementById("main").style.opacity = "1";
	document.getElementById("build").style.opacity = "0";
	document.getElementById("build").style.zIndex = "5";
	document.getElementById("about").style.opacity = "0";
	document.getElementById("about").style.zIndex = "1";
	document.getElementById("contact").style.opacity = "0";
	document.getElementById("contact").style.zIndex = "1";
	
	document.getElementById("contact").style.transition = "opacity 1s";
	document.getElementById("contact").style.webkitTransition = "opacity 1s";
	
	document.getElementById("main").style.transition = "opacity 2s";
	document.getElementById("main").style.webkitTransition = "opacity 2s";
	
	document.getElementById("build").style.transition = "opacity 1s";
	document.getElementById("build").style.webkitTransition = "opacity 1s";
	
	document.getElementById("about").style.transition = "opacity 1s";
	document.getElementById("about").style.webkitTransition = "opacity 1s";
}//end homeDisplay

function displayBuild(){
	//enables display for custom watch building
	document.getElementById("main").style.opacity = ".3";
	document.getElementById("build").style.opacity = ".9";
	document.getElementById("build").style.zIndex = "20";
	document.getElementById("about").style.opacity = "0";
	document.getElementById("about").style.zIndex = "1";
	document.getElementById("contact").style.opacity = "0";
	document.getElementById("contact").style.zIndex = "1";
	document.getElementById("thankYou").style.display= "none";
	
	document.getElementById("contact").style.transition = "opacity 1s";
	document.getElementById("contact").style.webkitTransition = "opacity 1s";
	
	document.getElementById("main").style.transition = "opacity 1s";
	document.getElementById("main").style.webkitTransition = "opacity 1s";
	
	document.getElementById("build").style.transition = "opacity 2s";
	document.getElementById("build").style.webkitTransition = "opacity 2s";
	
	document.getElementById("about").style.transition = "opacity 1s";
	document.getElementById("about").style.webkitTransition = "opacity 1s";
	
	
}//end displayBuild

function displayBuild2(){
	//enables display for other custom watch link
	document.getElementById("main").style.opacity = ".3";
	document.getElementById("build").style.opacity = ".9";
	document.getElementById("build").style.zIndex = "20";
	document.getElementById("about").style.opacity = "0";
	document.getElementById("about").style.zIndex = "1";
	document.getElementById("contact").style.opacity = "0";
	document.getElementById("contact").style.zIndex = "1";
	document.getElementById("thankYou").style.display= "none";
	
	document.getElementById("contact").style.transition = "opacity 1s";
	document.getElementById("contact").style.webkitTransition = "opacity 1s";
	
	document.getElementById("main").style.transition = "opacity 1s";
	document.getElementById("main").style.webkitTransition = "opacity 1s";
	
	document.getElementById("build").style.transition = "opacity 2s";
	document.getElementById("build").style.webkitTransition = "opacity 2s";
	
	document.getElementById("about").style.transition = "opacity 1s";
	document.getElementById("about").style.webkitTransition = "opacity 1s";
}//end displayBuild2


/**
* the following methods enables the event handler so user selections can be stored in session storage
*/
document.getElementById("black").onclick = function(e){
		e.preventDefault();
		choseBlack();
		
	document.getElementsByClassName("headImage")[0].src='img/black.png';
	
	document.getElementById("black1").style.display="block";
	document.getElementById("black2").style.display="block";
	
	document.getElementById("gold1").style.display="none";
	document.getElementById("gold2").style.display="none";
	
	document.getElementById("silver1").style.display="none";
	document.getElementById("silver2").style.display="none";
	
}
	
	document.getElementById("silver").onclick = function(e){
		e.preventDefault();
		choseSilver();	
		
	document.getElementsByClassName("headImage")[0].src='img/silver.png';
	
	document.getElementById("black1").style.display="none";
	document.getElementById("black2").style.display="none";
	
	document.getElementById("gold1").style.display="none";
	document.getElementById("gold2").style.display="none";
	
	document.getElementById("silver1").style.display="block";
	document.getElementById("silver2").style.display="block";
	}
	
	document.getElementById("gold").onclick = function(e){
		e.preventDefault();
		choseGold();
		
	document.getElementsByClassName("headImage")[0].src='img/gold.png';
	
	document.getElementById("black1").style.display="none";
	document.getElementById("black2").style.display="none";
	
	document.getElementById("gold1").style.display="block";
	document.getElementById("gold2").style.display="block";
	
	document.getElementById("silver1").style.display="none";
	document.getElementById("silver2").style.display="none";

		
	}
	
	document.getElementById("silverS").onclick = function(e){
		e.preventDefault();
		choseSilverS();	
		
		document.getElementsByClassName("backImage")[0].src='img/silverSwatch.png';
	}
	
	document.getElementById("redS").onclick = function(e){
		e.preventDefault();
		choseRedS();
		
		document.getElementsByClassName("backImage")[0].src='img/redSwatch.png';	
	}

	document.getElementById("greenS").onclick = function(e){
		e.preventDefault();
		choseGreenS();
		
		document.getElementsByClassName("backImage")[0].src='img/greenSwatch.png';	
	}

	document.getElementById("brownS").onclick = function(e){
		e.preventDefault();
		choseBrownS();	
		
		document.getElementsByClassName("backImage")[0].src='img/brownSwatch.png';
	}

	document.getElementById("blueS").onclick = function(e){
		e.preventDefault();
		choseBlueS();
		
		document.getElementsByClassName("backImage")[0].src='img/blueSwatch.png';	
	}

	document.getElementById("blackS").onclick = function(e){
		e.preventDefault();
		choseBlackS();	
		
		document.getElementsByClassName("backImage")[0].src='img/blackSwatch.png';
	}
	
	document.getElementById("whiteS").onclick = function(e){
		e.preventDefault();
		choseWhiteS();	
		
		document.getElementsByClassName("backImage")[0].src='img/whiteSwatch.png';
	}
	
	document.getElementById("black1").onclick = function(e){
		e.preventDefault();
		choseBlackBand1();
		
		document.getElementsByClassName("bandImage")[0].src='img/band1black.png';	
	}
	
	document.getElementById("black2").onclick = function(e){
		e.preventDefault();
		choseBlackBand2();	
		
		document.getElementsByClassName("bandImage")[0].src='img/band2black.png';
	}
	
	document.getElementById("gold1").onclick = function(e){
		e.preventDefault();
		choseGoldBand1();	
		
		document.getElementsByClassName("bandImage")[0].src='img/band1gold.png';
	}
	
	document.getElementById("gold2").onclick = function(e){
		e.preventDefault();
		choseGoldBand2();
		
		document.getElementsByClassName("bandImage")[0].src='img/band2gold.png';	
	}
	
	document.getElementById("silver1").onclick = function(e){
		e.preventDefault();
		choseSilverBand1();	
		
		document.getElementsByClassName("bandImage")[0].src='img/band1silver.png';
	}
	
	document.getElementById("silver2").onclick = function(e){
		e.preventDefault();
		choseSilverBand2();	
		
		document.getElementsByClassName("bandImage")[0].src='img/band2silver.png';
	}
	
	document.getElementById("tacticBlack").onclick = function(e){
		e.preventDefault();
		choseTacticBlack();	
		
		document.getElementsByClassName("bandImage")[0].src='img/tacticBandBlack.png';
	}
	
	document.getElementById("tacticBlue").onclick = function(e){
		e.preventDefault();
		choseTacticBlue();	
		
		document.getElementsByClassName("bandImage")[0].src='img/tacticBandBlue.png';
	}
	
	document.getElementById("tacticGreen").onclick = function(e){
		e.preventDefault();
		choseTacticGreen();	
		
		document.getElementsByClassName("bandImage")[0].src='img/tacticBandGreen.png';
	}
	
	document.getElementById("tacticRed").onclick = function(e){
		e.preventDefault();
		choseTacticRed();	
		
		document.getElementsByClassName("bandImage")[0].src='img/tacticBandRed.png';
	}

	document.getElementById("regW").onclick = function(e){
		e.preventDefault();
		choseRegularWhite();
		
		document.getElementsByClassName("dialImage")[0].src = 'img/regWhiteDial.png';	
	}
	
	document.getElementById("romW").onclick = function(e){
		e.preventDefault();
		choseRomanWhite();	
		
		document.getElementsByClassName("dialImage")[0].src = 'img/romanWhiteDial.png';
	}
	
	document.getElementById("romB").onclick = function(e){
		e.preventDefault();
		choseRomanBlack();
		
		document.getElementsByClassName("dialImage")[0].src = 'img/romanBlackDial.png';	
	}
	
	document.getElementById("tacW").onclick = function(e){
		e.preventDefault();
		choseTacWhite();
		
		document.getElementsByClassName("dialImage")[0].src = 'img/tactWhiteDial.png';	
	}

onload=init;

function init(){
	updateCart();
}	

/**
*	the folling methods store information bases on user selections
*/

function choseBlack(){
	localStorage.colorImage = '<img src="img/black.png" class="watchImages headImage"/>';
	localStorage.colorDesc = 'Black';
	localStorage.colorPrice = 50;
	updateCart;
}


function choseGold(){
	localStorage.colorImage ='<img src="img/gold.png" class="watchImages headImage"/>';
	localStorage.colorDesc = 'Gold';
	localStorage.colorPrice = 150;
	updateCart;
}

function choseSilver(){
	localStorage.colorImage = '<img src="img/silver.png" class="watchImages headImage"/>';
	localStorage.colorDesc = 'Silver';
	localStorage.colorPrice = 100;
	updateCart;
}

function choseBlueS(){
	localStorage.swatchImage = '<img src="img/blueSwatch.png" class="watchImages backImage"/>';
	localStorage.swatchDesc = "Blue";
	localStorage.swatchPrice = 0;
}

function choseBlackS(){
	localStorage.swatchImage = '<img src="img/blackSwatch.png" class="watchImages backImage"/>';
	localStorage.swatchDesc = "Black";
	localStorage.swatchPrice = 0;
}

function choseBrownS(){
	localStorage.swatchImage = '<img src="img/brownSwatch.png" class="watchImages backImage"/>';
	localStorage.swatchDesc = "Brown";
	localStorage.swatchPrice = 0;
}

function choseGreenS(){
	localStorage.swatchImage = '<img src="img/greenSwatch.png" class="watchImages backImage"/>';
	localStorage.swatchDesc = "Green";
	localStorage.swatchPrice = 0;
}

function choseRedS(){
	localStorage.swatchImage = '<img src="img/redSwatch.png" class="watchImages backImage"/>';
	localStorage.swatchDesc = "Red";
	localStorage.swatchPrice = 0;
}

function choseSilverS(){
	localStorage.swatchImage = '<img src="img/silverSwatch.png" class="watchImages backImage"/>';
	localStorage.swatchDesc = "Silver";
	localStorage.swatchPrice = 0;
}

function choseWhiteS(){
	localStorage.swatchImage = '<img src="img/whiteSwatch.png" class= "watchImages backImage"/>';
	localStorage.swatchDesc = "White";
	localStorage.swatchPrice = 0;
}


//band choices

function choseBlackBand1(){
	localStorage.bandImage = '<img src="img/band1black.png" class="watchImages bandImage"/>'; 
	localStorage.bandDesc = 'Black Titanium';
	localStorage.bandPrice = 25;
}
	
function choseBlackBand2(){
	localStorage.bandImage = '<img src="img/band2black.png" class="watchImages bandImage"/>'; 
	localStorage.bandDesc = 'Black Regular';
	localStorage.bandPrice = 10;
}
	
function choseGoldBand1(){
	localStorage.bandImage = '<img src="img/band1gold.png" class="watchImages bandImage"/>'; 
	localStorage.bandDesc = '18K Gold';
	localStorage.bandPrice = 75;	
}

function choseGoldBand2(){
	localStorage.bandImage = '<img src="img/band2gold.png" class="watchImages bandImage"/>'; 
	localStorage.bandDesc = 'Gold';
	localStorage.bandPrice = 50;		
}
	
function choseSilverBand1(){
	localStorage.bandImage = '<img src="img/band1silver.png" class="watchImages bandImage"/>'; 
	localStorage.bandDesc = 'Silver Titanium';
	localStorage.bandPrice = 50;	
}
	
function choseSilverBand2(){
	localStorage.bandImage = '<img src="img/band2silver.png" class="watchImages bandImage"/>'; 
	localStorage.bandDesc = 'Silver';
	localStorage.bandPrice = 25;	
}

function choseTacticBlack(){
	localStorage.bandImage = '<img src="img/tacticBandBlack.png" class="watchImages bandImage"/>'; 
	localStorage.bandDesc = 'Black Tactic';
	localStorage.bandPrice = 10;
}

function choseTacticBlue(){
	localStorage.bandImage = '<img src="img/tacticBandBlue.png" class="watchImages bandImage"/>'; 
	localStorage.bandDesc = 'Blue Tactic';
	localStorage.bandPrice = 10;
}

function choseTacticGreen(){
	localStorage.bandImage = '<img src="img/tacticBandGreen.png" class="watchImages bandImage"/>'; 
	localStorage.bandDesc = 'Green Tactic';
	localStorage.bandPrice = 10;
}

function choseTacticRed(){
	localStorage.bandImage = '<img src="img/tacticBandRed.png" class="watchImages bandImage"/>'; 
	localStorage.bandDesc = 'Red Tactic';
	localStorage.bandPrice = 10;
}

//dial selections
function choseRegularWhite(){
	localStorage.dialImage = '<img src="img/regWhiteDial.png" class="watchImages dialImage"/>'; 
	localStorage.dialDesc = 'Regular White';
	localStorage.dialPrice = 25;	
}

function choseRomanWhite(){
	localStorage.dialImage = '<img src="img/romanWhiteDial.png" class="watchImages dialImage"/>'; 
	localStorage.dialDesc = 'Roman White';
	localStorage.dialPrice = 15;
}

function choseRomanBlack(){
	localStorage.dialImage = '<img src="img/romanBlackDial.png" class="watchImages dialImage"/>'; 
	localStorage.dialDesc = 'Roman Black';
	localStorage.dialPrice = 15;
}

function choseTacWhite(){
	localStorage.dialImage = '<img src="img/tactWhiteDial.png" class="watchImages dialImage"/>'; 
	localStorage.dialDesc = 'Tactical White';
	localStorage.dialPrice = 10;
	
}



function updateCart(){
	
	var c_price = 0;
	var s_price = 0;
	var b_price = 0;
	var d_price = 0;
	
	/**
	* 	the following if statements take the selected optins from local storage and display them on the build page
	*/
	
	if(localStorage.colorImage){	
	document.getElementsByClassName("watchColor3")[0].innerHTML=localStorage.colorDesc;
	document.getElementsByClassName("watchColor2")[0].innerHTML=localStorage.colorDesc;
	document.getElementsByClassName("watchHead")[0].innerHTML=localStorage.colorImage;
	c_price = Number(localStorage.colorPrice).toFixed(2);
	document.getElementsByClassName("watchColorPrice")[0].innerHTML='$'+localStorage.colorPrice;
	document.getElementsByClassName("watchColorPrice2")[0].innerHTML='$'+localStorage.colorPrice;
	}
	
	if(localStorage.swatchImage){	
	document.getElementsByClassName("swatchColor")[0].innerHTML=localStorage.swatchDesc;
	document.getElementsByClassName("swatchColor2")[0].innerHTML=localStorage.swatchDesc;
	document.getElementsByClassName("dialBackIMG")[0].innerHTML=localStorage.swatchImage;
	s_price = Number(localStorage.swatchPrice).toFixed(2);
	document.getElementsByClassName("swatchColorPrice")[0].innerHTML='$'+localStorage.swatchPrice;
	}
	
	if(localStorage.bandImage){	
	document.getElementsByClassName("bandColorType")[0].innerHTML=localStorage.bandDesc;
	document.getElementsByClassName("bandColorType2")[0].innerHTML=localStorage.bandDesc;
	document.getElementsByClassName("bandIMG")[0].innerHTML=localStorage.bandImage;
	b_price = Number(localStorage.bandPrice).toFixed(2);
	document.getElementsByClassName("bandColorTypePrice")[0].innerHTML='$'+localStorage.bandPrice;
	document.getElementsByClassName("bandColorTypePrice2")[0].innerHTML='$'+localStorage.bandPrice;
	}
	
	if(localStorage.dialImage){	
	document.getElementsByClassName("dialType")[0].innerHTML=localStorage.dialDesc;
	document.getElementsByClassName("dialType2")[0].innerHTML=localStorage.dialDesc;
	document.getElementsByClassName("dialIMG")[0].innerHTML=localStorage.dialImage;
	d_price = Number(localStorage.dialPrice).toFixed(2);
	document.getElementsByClassName("dialTypePrice")[0].innerHTML='$'+localStorage.dialPrice;
	document.getElementsByClassName("dialTypePrice2")[0].innerHTML='$'+localStorage.dialPrice;
	}



	document.getElementsByClassName("total")[0].innerHTML = (Number(c_price)+ Number(s_price)+ Number(b_price)+ Number(d_price)).toFixed(2);
	document.getElementsByClassName("total2")[0].innerHTML = (Number(c_price)+ Number(s_price)+ Number(b_price)+ Number(d_price)).toFixed(2);

}