const dateapp = document.querySelector("#datetest");

function createCalendar(htmlElement, year, month) {

	let mon = month - 1;
	let d = new Date(year, mon);

	let table = '<table><tr><th>Mondey</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th></tr><tr>';

	for (let i = 0; i < getDay(d); i++) {
		table += '<td></td>';
	}

	while (d.getMonth() == mon) {
		table += '<td>' + d.getDate() + '</td>';

		if (getDay(d) % 7 == 6) {
			table += '</tr><tr>';
		}

		d.setDate(d.getDate() + 1);
	}

	if (getDay(d) != 0) {
		for (let i = getDay(d); i < 7; i++) {
			table += '<td></td>';
		}
	}

	table += '</tr></table>';

	htmlElement.innerHTML = table;
}

function getDay(date) {
	let day = date.getDay();
	if (day == 0) day = 7;
	return day - 1;
}

createCalendar(dateapp, 2021, 8);