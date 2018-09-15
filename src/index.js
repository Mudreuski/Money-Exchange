// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let money = {};
	
	if	(currency <=  0) {
		
		return money;	 
	}
	
	else if (currency > 10000) {
		
		money = {error: "You are rich, my friend! We don't have so much coins for exchange"};
		return money;
		
	}

	let h = Math.floor(currency / 50);
	let cache = currency % 50;
	let q = Math.floor(cache / 25);
	cache = cache % 25;
	let d = Math.floor(cache / 10);
	cache = cache % 10;
	let n = Math.floor(cache / 5);
	let p = cache % 5;
		
	if (h > 0) {
		money.H = h;		
	}
	if (q > 0) {
		money.Q = q;		
	}
	if (d > 0) {
		money.D = d;		
	}
	if (n > 0) {
		money.N = n;		
	}
	if (p > 0) {
		money.P = p;		
	}
	
	return money;	
}
