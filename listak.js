function generalAlaptomb(hossz = 10, min = 1, max = 100) {
	const tomb = [];
	for (let i = 0; i < hossz; i++) {
		const veletlenszam = Math.floor(Math.random() * (max - min + 1)) + min;
		tomb.push(veletlenszam);
	}
	return tomb;
}

// minimumkiválasztás

function kiszamitMin(tomb) {
	if (tomb.length === 0) return null;
	let min = tomb[0];
	for (let i = 1; i < tomb.length; i++) {
		if (tomb[i] < min) {
			min = tomb[i];
		}
	}
	return min;
}
// maximumkiválasztás

function kiszamitMax(tomb) {
	if (tomb.length === 0) return null;
	let max = tomb[0];
	for (let i = 1; i < tomb.length; i++) {
		if (tomb[i] > max) {
			max = tomb[i];
		}
	}
	return max;
}
