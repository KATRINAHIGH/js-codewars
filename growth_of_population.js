
/*In a small town the population is p0 = 1000 at the beginning of a year. 
The population regularly increases by 2 percent per year and moreover 50 new 
inhabitants per year come to live in the town. How many years does the town 
need to see its population greater or equal to p = 1200 inhabitants?
More generally given parameters:
p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
the function nb_year should return n number of entire years needed to get a population 
greater or equal to p. aug is an integer, percent a positive or null number, 
p0 and p are positive integers(> 0)*/

function nbYear(p0, percent, aug, p) {
    n = 0;
	yearlyPop = p0;
	while(yearlyPop < p){
		yearlyPop = yearlyPop + yearlyPop * percent/100 + aug;
		n++;
	}
	return n;
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1500000, 0.25, 1000, 2000000));
