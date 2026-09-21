function getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

r = getInt(1, 10);

function Find(n){
	us_in = prompt("Введите число от 1 до 10:");
	
    if (us_in == n) {
        console.log("Угадал.");
        return 0;
    } 
	if (us_in > 10 || us_in < 1) {
		Find(n);
    }
	if (us_in < n){
		console.log("Больше.")
		Find(n);
	}
	if (us_in > n){
		console.log("Меньше.")
		Find(n);
	}

}
Find(r);