import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';


// Adding Border around selected characters
$('.bio').on('click', function(){
	$(this).removeClass('border').addClass('selected');
});


// Constructor Function for all Fighters
let Fighter = function() {

}


// Instances created for each fighter
let watMan = new Fighter({
	attack1: 'wat',
	attack2: 'watEr',
	attack3: 'batarang',
	attack4: 'sWat'
});

let tRex = new Fighter({
	attack1: 'meow',
	attack2: 'paint',
	attack3: 'scratchNose',
	attack4: 'hug'
});

let bobRoss = new Fighter({
	attack1: 'paintTree',
	attack2: 'paintCloud',
	attack3: 'smile',
	attack4: 'sing'
})

let potatoVader = new Fighter({
	attack1: 'useForce',
	attack2: 'electrocute',
	attack3: 'useMoreForce',
	attack4: 'timsChoice	'
})

let captainPlanet = new Fighter({
	attack1: 'water',
	attack2: 'earth',
	attack3: 'fire',
	attack4: 'wind'	
})

let nemoFish = new Fighter({
	attack1: 'fin',
	attack2: 'bubbles',
	attack3: 'getLost',
	attack4: 'swim'
})

let johnnyBravo = new Fighter({
	attack1: 'hairGel',
	attack2: 'pumpIron',
	attack3: 'comb',
	attack4: 'tinyLegs'	
})

let barneyStinson = new Fighter({
	attack1: 'legenDary',
	attack2: 'suitUp',
	attack3: 'suitUp',
	attack4: 'suitUp'
})