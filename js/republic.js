// Constructor Function for all Fighters
let RepublicFighter = function(obj) {

	this.health = 100;


	this.hit = function (num) {
		let hitPoints = num || 10;
		return this.health = this.health - hitPoints;
	};
};

export default RepublicFighter;

