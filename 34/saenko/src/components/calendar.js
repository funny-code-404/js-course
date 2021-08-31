let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
const datesContainer = document.getElementById('dates');
const monthSelect = document.getElementById('month-select');
const yearSelect = document.getElementById('year-select');
   
showCalendar(currentYear, currentMonth);

// add year values to year select
let earliestYear = 1970;  
let optionYear = currentYear;
while (optionYear >= earliestYear) {      
  let dateOption = document.createElement('option');          
  dateOption.text = optionYear;      
  dateOption.value = optionYear;        
  yearSelect.add(dateOption);      
  optionYear -= 1;    
}

monthSelect.addEventListener('change', jump);
yearSelect.addEventListener('change', jump);

// renderCalendar
function showCalendar(year, month) {
    let firstDay = new Date(year, month).getDay();
    let numberOfDays = 32 - new Date(year,month, 32).getDate();

    datesContainer.innerHTML = "";
    for (let i = 0; i <= (numberOfDays + (firstDay - 1)); i++) {

        if (i < firstDay) {
            let emptyCell = document.createElement('div');
            emptyCell.classList.add('date-cell');
            datesContainer.append(emptyCell);
        } else {
            let datesCell = document.createElement('div');
            datesCell.classList.add('date-cell');
            datesCell.innerText = i - (firstDay - 1);
            datesContainer.append(datesCell);
        }
    }
    console.log(currentMonth, currentYear);
    return datesContainer;
}

//choose a month and a year
function jump () {
    let selectedYear = parseInt(yearSelect.value);
    let selectedMonth = parseInt(monthSelect.value);

    return showCalendar(selectedYear, selectedMonth);
}
