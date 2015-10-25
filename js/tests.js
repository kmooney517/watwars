import RepublicFighter from './republic.js';
import EmpireFighter from './empire.js';

(function() {
  'use strict';

  	describe('About my Republic Fighter', function(){
		beforeEach( function() {
  			window.x = new RepublicFighter();
  			window.captainPlanet = new RepublicFighter();
  		})

		describe('creating a republic fighter', function() {
		    it('create an instance of a republic fighter', function() {
		        expect(x instanceof RepublicFighter).to.equal(true);
		    });
		});

		describe('republic fighters health', function() {
			it('should have full health when the instance is created', function() {
				expect(x.health).to.equal(100);
			})
		})

		describe('player taking damage', function() {
      		it('should lower the score, after getting hit', function() {
        		x.hit();
        		expect(x.health).to.be.below(100);
      		})
    	});
	})


	describe('About my Empire Fighter', function() {
		beforeEach( function() {
			window.y = new EmpireFighter();
		})

		describe('creating an empire fighter', function() {
			it('create an instance of an empire fighter', function() {
				expect(y instanceof EmpireFighter).to.equal(true);
			});
		});

		describe('empire fighters health', function() {
			it('should have full health when the instance is created', function() {
				expect(y.health).to.equal(100);
			})
		})

		describe('player taking damage', function() {
      		it('should lower the score, after getting hit', function() {
        		y.hit();
        		expect(y.health).to.be.below(100);
      		})
    	});


	})


}());