const body = document.body;

const cim = document.createElement('h1');
cim.textContent = 'Tömb generálás és min/max számítás';
body.appendChild(cim);

const hosszLabel = document.createElement('label');
hosszLabel.textContent = 'Tömb hossza: ';
body.appendChild(hosszLabel);

const hosszInput = document.createElement('input');
hosszInput.type = 'number';
hosszInput.value = '10';
body.appendChild(hosszInput);

body.appendChild(document.createElement('br'));

const minLabel = document.createElement('label');
minLabel.textContent = 'Min érték: ';
body.appendChild(minLabel);

const minInput = document.createElement('input');
minInput.type = 'number';
minInput.value = '1';
body.appendChild(minInput);

body.appendChild(document.createElement('br'));

const maxLabel = document.createElement('label');
maxLabel.textContent = 'Max érték: ';
body.appendChild(maxLabel);

const maxInput = document.createElement('input');
maxInput.type = 'number';
maxInput.value = '100';
body.appendChild(maxInput);

body.appendChild(document.createElement('br'));

const generalGomb = document.createElement('button');
generalGomb.textContent = 'Tömb generálása';
body.appendChild(generalGomb);

const szamitGomb = document.createElement('button');
szamitGomb.textContent = 'Min / Max számítás';
body.appendChild(szamitGomb);

const tombCim = document.createElement('h2');
tombCim.textContent = 'Generált tömb:';
body.appendChild(tombCim);

const tombDiv = document.createElement('div');
body.appendChild(tombDiv);

const eredmenyCim = document.createElement('h2');
eredmenyCim.textContent = 'Eredmények:';
body.appendChild(eredmenyCim);

const eredmenyDiv = document.createElement('div');
body.appendChild(eredmenyDiv);

let aktualisTomb = [];

generalGomb.addEventListener('click', () => {
	const hossz = parseInt(hosszInput.value) || 10;
	const min = parseInt(minInput.value) || 1;
	const max = parseInt(maxInput.value) || 100;

	aktualisTomb = generalAlaptomb(hossz, min, max);
	tombDiv.textContent = `[${aktualisTomb.join(', ')}]`;
});

szamitGomb.addEventListener('click', () => {
	if (aktualisTomb.length === 0) {
		eredmenyDiv.textContent = 'Először generálj egy tömböt!';
		return;
	}

	const min = kiszamitMin(aktualisTomb);
	const max = kiszamitMax(aktualisTomb);

	eredmenyDiv.innerHTML = `<p><strong>Minimum:</strong> ${min}</p><p><strong>Maximum:</strong> ${max}</p>`;
});