import summaryData from './data.json' assert {type: 'json'};

window.addEventListener('load', () => {
	const contentRows = document.querySelectorAll('.content__row');
	const finalScore = document.querySelector('.score__result');
	let sum = 0;

	for (let i = 0; i < contentRows.length; i++) {
		// load category
		contentRows[i].firstElementChild.innerHTML = summaryData[i].category;
		// load score
		contentRows[i].lastElementChild.firstElementChild.innerHTML = summaryData[i].score;
		// load icon
		contentRows[i].style.setProperty('--icon-url', 'url("'+ summaryData[i].icon +'")');

		sum += summaryData[i].score;
	}

	// load final score
	finalScore.innerHTML = parseInt(sum/contentRows.length);
});


