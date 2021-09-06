


let totalMonth, totalDay, totalYear;

let accumulation = 0;
let totalPrecents = 0;

//auto result
const inputs = document.querySelectorAll('.input');
for (input of inputs) {
    input.addEventListener('input', () => {
        countingAvailableMoney();
        calculationPrecents();
    })
}

const strToNum = str => str.value ? parseInt(str.value) : 0;


const countingAvailableMoney = () => {
    const totalPerMonth = strToNum(incomeSalary) + strToNum(incomeFreelance) + strToNum(incomeExtra1) + strToNum(incomeExtra2);
    const totalCostsMonth = strToNum(costsFlat) + strToNum(costsHouseServices) + strToNum(costsTransport) + strToNum(costsCredit);

    totalMonth = totalPerMonth - totalCostsMonth;
    totalMonthInput.value = totalMonth;
}

moneyBoxRange.addEventListener('input', e => {
    const totalPrecentEl = document.getElementById('total-precents');
    totalPrecents = e.target.value;
    totalPrecentEl.innerHTML = totalPrecents;
    calculationPrecents();


});

const calculationPrecents = () => {
    accumulation = ((totalMonth * totalPrecents) / 100).toFixed(1);
    accumulationInput.value = accumulation;

    spend.value = totalMonth - accumulation;
    totalDay = (spend.value / 30).toFixed();
    totalDayInput.value = totalDay;
    totalYear=accumulation * 12;
    totalYearInput.value = totalYear;

}