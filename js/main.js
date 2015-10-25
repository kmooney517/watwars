import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

import RepublicFighter from './republic.js';
import EmpireFighter from './empire.js';



// Combat Sequence --------------------------------------------------------


//RepublicFighter Instance
let watMan = new RepublicFighter();
	watMan.health = _.random (120, 150);
// let tRex = new RepublicFighter();
// 	tRex.health = 250;
// let bobRoss = new RepublicFighter();
// let potatoVader= new RepublicFighter();

//EmpireFighter Instance
let captainPlanet = new EmpireFighter();
	captainPlanet.health = _.random (100, 130);
// let nemoFish = new EmpireFighter();
// let johnnyBravo = new EmpireFighter();
// let barneyStinson = new EmpireFighter();


//DOM Nodes Selected for health
let repHealth = $('.repHealthBar');
let empHealth = $('.empHealthBar');


//DOM Nodes Selected for attacks

let repAtck1 = $('.goodAtck1');
let repAtck2 = $('.goodAtck2');
let repAtck3 = $('.goodAtck3');
let repAtck4 = $('.goodAtck4');

let empAtck1 = $('.badAtck1');
let empAtck2 = $('.badAtck2');
let empAtck3 = $('.badAtck3');
let empAtck4 = $('.badAtck4');

// Show health of current player
repHealth.text(watMan.health);
empHealth.text(captainPlanet.health);


//Making it actually turn based

// Setting up the click events for the attacks

repAtck1.on('click', function(){

	//Determining the hitpoints
	let num = _.random (9, 10);
	captainPlanet.hit(num);

	if (captainPlanet.health <= 0) {
		empHealth.text('Defeated!');
		empHealth.css('color', 'red');
	} else {
		empHealth.text(captainPlanet.health);
	}

	// Make animation

	$('.attackGifs').html('<img src="images/hug.gif" width="100%" height="100%">').fadeIn(400).fadeOut(1000);
})

repAtck2.on('click', function(){

	//Determining the hitpoints
	let num = _.random (0, 20);
	captainPlanet.hit(num);

	if (captainPlanet.health <= 0) {
		empHealth.text('Defeated!');
		empHealth.css('color', 'red');
	} else {
		empHealth.text(captainPlanet.health);
	}
	$('.attackGifs').html('<img src="images/yoda.gif" width="100%" height="100%">').fadeIn(400).fadeOut(1000);
	
})

repAtck3.on('click', function(){

	//Determining the hitpoints
	let num = _.random (0, 60);
	captainPlanet.hit(num);

	if (captainPlanet.health <= 0) {
		empHealth.text('Defeated!');
		empHealth.css('color', 'red');
	} else {
		empHealth.text(captainPlanet.health);

	}

	$('.attackGifs').html('<img src="images/fireball2.gif" width="100%" height="100%">').fadeIn(400).fadeOut(1000);
})

repAtck4.on('click', function(){

	//Determining the hitpoints
	let num = _.random (0, 40);
	captainPlanet.hit(num);

	if (captainPlanet.health <= 0) {
		empHealth.text('Defeated!');
		empHealth.css('color', 'red');
	} else {
		empHealth.text(captainPlanet.health);
	}

	$('.attackGifs').html('<img src="images/yoda.gif" width="100%" height="100%">').fadeIn(400).fadeOut(1000);
})



// ------------------------------------------------------------------



empAtck1.on('click', function(){

	//Determining the hitpoints
	let num = _.random (9, 10);
	watMan.hit(num);

	if (watMan.health <= 0) {
		repHealth.text('Defeated!');
		repHealth.css('color', 'red');
	} else {
		repHealth.text(watMan.health);
	}

	$('.attackGifs').html('<img src="images/grass.gif" width="100%" height="100%">').fadeIn(400).fadeOut(1000);
})

empAtck2.on('click', function(){

	//Determining the hitpoints
	let num = _.random (0, 20);
	watMan.hit(num);

	if (watMan.health <= 0) {
		repHealth.text('Defeated!');
		repHealth.css('color', 'red');
	} else {
		repHealth.text(watMan.health);

	}

	$('.attackGifs').html('<img src="images/lightning.gif" width="100%" height="100%">').fadeIn(400).fadeOut(1000);
})

empAtck3.on('click', function(){
	//Determining the hitpoints
	let num = _.random (0, 60);
	watMan.hit(num);

	if (watMan.health <= 0) {
		repHealth.text('Defeated!');
		repHealth.css('color', 'red');
	} else {
		repHealth.text(watMan.health);
	}

	$('.attackGifs').html('<img src="images/megaman.gif" width="100%" height="100%">').fadeIn(400).fadeOut(1000);
});

empAtck4.on('click', function(){

	//Determining the hitpoints
	let num = _.random (0, 40);
	watMan.hit(num);

	if (watMan.health <= 0) {
		repHealth.text('Defeated!');
		repHealth.css('color', 'red');
	} else {
		repHealth.text(watMan.health);
	}

	$('.attackGifs').html('<img src="images/wario.gif" width="100%" height="100%">').fadeIn(400).fadeOut(1000);
})


$('.playAgain').on('click', function(){
	location.reload();
});










// Character Selection Process ----------------------------------------------------------------

// Wat Man
$('.watMan').on('click', function(){
	$('.watMan').removeClass('border').addClass('selected');
	$('.tRex').removeClass('selected');
	$('.bobRoss').removeClass('selected');
	$('.vader').removeClass('selected');
});

$('.watMan').on('click',function(){
	$('.republicName').html('Wat Man');
	$('.playerOne').html('<img src="images/watman.jpg" width="100%" height="100%">');
	$('.goodAtck1').html('wat');
	$('.goodAtck2').html('watEr');
	$('.goodAtck3').html('waterang');
	$('.goodAtck4').html('sWat');
})



// T Rex
$('.tRex').on('click', function(){
	$('.tRex').removeClass('border').addClass('selected');
	$('.watMan').removeClass('selected');
	$('.bobRoss').removeClass('selected');
	$('.vader').removeClass('selected');
});

$('.tRex').on('click',function(){
	$('.republicName').html('T-Rex');
	$('.playerOne').html('<img src="images/trex.png" height="100%" width="100%">')
	$('.goodAtck1').html('meow');
	$('.goodAtck2').html('paint');
	$('.goodAtck3').html('scratchNose');
	$('.goodAtck4').html('hug');
})

//Bob Ross
$('.bobRoss').on('click', function(){
	$('.bobRoss').removeClass('border').addClass('selected');
	$('.tRex').removeClass('selected');
	$('.watMan').removeClass('selected');
	$('.vader').removeClass('selected');
});

$('.bobRoss').on('click',function(){
	$('.republicName').html('Bob Ross');
	$('.playerOne').html('<img src="images/bobRoss.png" height="100%" width="100%">')
	$('.goodAtck1').html('paintTree');
	$('.goodAtck2').html('paintCloud');
	$('.goodAtck3').html('sing');
	$('.goodAtck4').html('smile');
})


//Vader
$('.vader').on('click', function(){
	$('.vader').removeClass('border').addClass('selected');
	$('.tRex').removeClass('selected');
	$('.bobRoss').removeClass('selected');
	$('.watMan').removeClass('selected');
});

$('.vader').on('click',function(){
	$('.republicName').html('Potato Vader');
	$('.playerOne').html('<img src="images/vader.jpg" height="100%" width="100%">');
	$('.goodAtck1').html('useForce');
	$('.goodAtck2').html('electrocute');
	$('.goodAtck3').html('choke');
	$('.goodAtck4').html('frenchFry');
})

// Captain Planet
$('.captainPlanet').on('click', function(){
	$('.captainPlanet').removeClass('border').addClass('selected');
	$('.nemo').removeClass('selected');
	$('.johnny').removeClass('selected');
	$('.barneyStinson').removeClass('selected');
});

$('.captainPlanet').on('click',function(){
	$('.empireName').html('Captain Planet');
	$('.playerTwo').html('<img src="images/Captain_Planet.jpg" height="100%" width="100%">')
	$('.badAtck1').html('water');
	$('.badAtck2').html('earth');
	$('.badAtck3').html('wind');
	$('.badAtck4').html('fire');
})

// Nemo
$('.nemo').on('click', function(){
	$('.nemo').removeClass('border').addClass('selected');
	$('.captainPlanet').removeClass('selected');
	$('.johnny').removeClass('selected');
	$('.barneyStinson').removeClass('selected');
});

$('.nemo').on('click',function(){
	$('.empireName').html('Find yoself, Nemo');
	$('.playerTwo').html('<img src="images/Nemo.png" height="100%" width="100%">')
	$('.badAtck1').html('fin');
	$('.badAtck2').html('bubbles');
	$('.badAtck3').html('getLost');
	$('.badAtck4').html('swim');
})

// Johnny Bravo
$('.johnny').on('click', function(){
	$('.johnny').removeClass('border').addClass('selected');
	$('.nemo').removeClass('selected');
	$('.captainPlanet').removeClass('selected');
	$('.barneyStinson').removeClass('selected');
});

$('.johnny').on('click',function(){
	$('.empireName').html('Johnny Bravo');
	$('.playerTwo').html('<img src="images/johnny-bravo.jpg" height="100%" width="100%">')
	$('.badAtck1').html('hairGel');
	$('.badAtck2').html('monkey');
	$('.badAtck3').html('comb');
	$('.badAtck4').html('tinyLegs');
})

//Barney Stinson
$('.barneyStinson').on('click', function(){
	$('.barneyStinson').removeClass('border').addClass('selected');
	$('.nemo').removeClass('selected');
	$('.johnny').removeClass('selected');
	$('.captainPlanet').removeClass('selected');
});

$('.barneyStinson').on('click',function(){
	$('.empireName').html('Barney Stinson');
	$('.playerTwo').html('<img src="images/Barney_Stinson.jpg" height="100%" width="100%">')
	$('.badAtck1').html('legenDary');
	$('.badAtck2').html('suitUp');
	$('.badAtck3').html('suitUp');
	$('.badAtck4').html('suitUp');
})

// Alert the user if not enough characters selected - then fade to battle screen

$('.fight').on('click', function(event) {
	$('.mainScreen').fadeOut(300);
	$('.battleScreen').fadeIn(1500);
});	













