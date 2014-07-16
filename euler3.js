//check if inputted number is prime by dividing it by all possible numbers between 1 and the inputted number

var prime = function(input) {
    for(i = 2; i < input; i++) {
        if(input % i === 0) {
            return false;
        }
    }
    return true;
}

//Using the number 1-below the inputted number as the divisor, check to see if the inputted number is evenly divisible by that divisor AND also prime.  If both, return the divisor.  If not, decrement down until you get a divisor that divides evenly into the inputted number AND is prime.
var maxPrime = function(input) {
    var divisor = input-1;
    while (divisor>1) {
       if (input % divisor === 0 && prime(divisor)) {
            return divisor;
        }
        divisor--;
    }
    
}
maxPrime(42)

//This was supposed to be an alternative way of getting maxPrime, but it's not working
/*
var altMaxPrime = function(input) {
    var divisor = input-1;
    for(i > 1; i<= divisor; i--) {
        if (input % divisor === 0 && prime(divisor)) {
            return divisor;
        }
    }
}
altMaxPrime(7)
