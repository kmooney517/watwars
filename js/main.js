import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

// Constructor Function for all Fighters
let RepublicFighter = function(obj) {
	this.name = 'republicName';
	this.health = 100;
	this.attack1 = obj.attack1;
	this.attack2 = obj.attack2;
	this.attack3 = obj.attack3;
	this.attack4 = obj.attack4;
}

// Instances created for each republic fighter
let watMan = new RepublicFighter({
	attack1: 'wat',
	attack2: 'watEr',
	attack3: 'batarang',
	attack4: 'sWat'
});

let tRex = new RepublicFighter({
	attack1: 'meow',
	attack2: 'paint',
	attack3: 'scratchNose',
	attack4: 'hug'
});

let bobRoss = new RepublicFighter({
	attack1: 'paintTree',
	attack2: 'paintCloud',
	attack3: 'smile',
	attack4: 'sing'
})

let potatoVader = new RepublicFighter({
	attack1: 'useForce',
	attack2: 'electrocute',
	attack3: 'choke',
	attack4: 'frenchFry'
})


let EmpireFighter = function(obj) {
	this.name = 'empire name';
	this.health = 80;
	this.attack1 = obj.attack1;
	this.attack2 = obj.attack2;
	this.attack3 = obj.attack3;
	this.attack4 = obj.attack4;
}

let captainPlanet = new EmpireFighter({
	attack1: 'water',
	attack2: 'earth',
	attack3: 'fire',
	attack4: 'wind'	
})

let nemoFish = new EmpireFighter({
	attack1: 'fin',
	attack2: 'bubbles',
	attack3: 'getLost',
	attack4: 'swim'
})

let johnnyBravo = new EmpireFighter({
	attack1: 'hairGel',
	attack2: 'monkey',
	attack3: 'comb',
	attack4: 'tinyLegs'	
})

let barneyStinson = new EmpireFighter({
	attack1: 'legenDary',
	attack2: 'suitUp',
	attack3: 'suitUp',
	attack4: 'suitUp'
})





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
	$('.goodAtck3').html('baterang');
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


// Attack Attributes need to populate the buttons when specific character is selected

let abilities = function() {

}








// when fight button is clicked then intro box fades out, and battle screen fades in



// Fighting stuffs












