// Line Chart 2
let chart2 = new Chart(document.getElementById('capitalGrowthChart2').getContext('2d'), {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
    datasets: [
      {
        label: 'Rental Income Growth',
        borderColor: '#0ba360',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
      },
      {
        label: 'Expense Growth',
        borderColor: '#f7b924',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
      }
    ]
  },

  // Configuration options go here
  options: {
    responsive: true,
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Year'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Amount'
        }
      }]
    }
  }
});
// Loan Line Chart 2
let loanChart2 = new Chart(document.getElementById('loanChart2').getContext('2d'), {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
    datasets: [
      {
        label: 'Property Value',
        borderColor: '#0ba360',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
      },
      {
        label: 'Equity',
        borderColor: '#8e44ad',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
      },
      {
        label: 'Loan Balance',
        borderColor: '#006fff',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
      }]
  },

  // Configuration options go here
  options: {
    responsive: true,
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Year'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Amount'
        }
      }]
    }
  }
});
let homeSection2Enabled = false;

// User input Sliders for section 2
let weeklyRentalSlider2 = document.getElementById("weeklyRentalSlider2");
let annualIncomeGrowthSlider2 = document.getElementById("annualIncomeGrowthSlider2");
let otherExpensesSlider2 = document.getElementById("otherExpensesSlider2");
// let customExpensesSlider = document.getElementById("customExpensesSlider");
let vacancySlider2 = document.getElementById("vacancySlider2");
let managementFeesSlider2 = document.getElementById("managementFeesSlider2");
let savingsSlider2 = document.getElementById("savingsSlider2");
let purchasePriceSlider2 = document.getElementById("purchasePriceSlider2");
let loanAmountSlider2 = document.getElementById("LoanAmountSlider2");
let loanTermSlider2 = document.getElementById("LoanTermSlider2");
let interestRateSlider2 = document.getElementById("interestRateSlider2");
let capitalGrowthRateSlider2 = document.getElementById("capitalGrowthRateSlider2");
let expenseGrowthSlider2 = document.getElementById("expenseGrowthSlider2");


// User input Values for section 2
let weeklyRentalDemo2 = document.getElementById("weeklyRentalDemo2");
let rentalIncomeDemo2 = document.getElementById("rentalIncomeDemo2");
let annualIncomeGrowthDemo2 = document.getElementById("annualIncomeGrowthDemo2");
let otherExpensesDemo2 = document.getElementById("otherExpensesDemo2");
// let customExpensesDemo2 = document.getElementById("customExpensesDemo2");
let vacancyDemo2 = document.getElementById("vacancyDemo2");
let managementFeesDemo2 = document.getElementById("managementFeesDemo2");
let savingsDemo2 = document.getElementById("savingsDemo2");
let purchasePriceDemo2 = document.getElementById("purchasePriceDemo2");
let loanAmountDemo2 = document.getElementById("LoanAmountDemo2");
let loanTermDemo2 = document.getElementById("LoanTermDemo2");
let interestRateDemo2 = document.getElementById("interestRateDemo2");
let capitalGrowthRateDemo2 = document.getElementById("capitalGrowthRateDemo2");
let expenseGrowthDemo2 = document.getElementById("expenseGrowthDemo2");


// Setting Demo Value based on slider value for section 2
weeklyRentalDemo2.innerHTML = weeklyRentalSlider2.value;
annualIncomeGrowthDemo2.innerHTML = annualIncomeGrowthSlider2.value;

otherExpensesDemo2.innerHTML = otherExpensesSlider2.value;
// customExpensesDemo.innerHTML = customExpensesSlider.value;
vacancyDemo2.innerHTML = vacancySlider2.value;
managementFeesDemo2.innerHTML = managementFeesSlider2.value;

savingsDemo2.innerHTML = savingsSlider2.value;
purchasePriceDemo2.innerHTML = purchasePriceSlider2.value;
loanAmountDemo2.innerHTML = loanAmountSlider2.value;
loanTermDemo2.innerHTML = loanTermSlider2.value;
interestRateDemo2.innerHTML = interestRateSlider2.value;
capitalGrowthRateDemo2.innerHTML = capitalGrowthRateSlider2.value;
expenseGrowthDemo2.innerHTML = expenseGrowthSlider2.value;


// Setting values to Calculation Fields of section 2
let vacancy2 = parseInt(vacancySlider2.value);
let weeklyRental2 = parseInt(weeklyRentalSlider2.value);
let rentalIncome2 = Math.round(parseInt(weeklyRentalSlider2.value) * (52 * (1 - (vacancy2 / 100))));
let annualIncomeGrowth2 = parseInt(annualIncomeGrowthSlider2.value);
let otherExpenses2 = parseInt(otherExpensesSlider2.value);
// let customExpenses2 = parseInt(customExpensesSlider2.value);
let managementFees2 = parseInt(managementFeesSlider2.value);
let savings2 = parseInt(savingsSlider2.value);
let purchasePrice2 = parseInt(purchasePriceSlider2.value);
let loanAmount2 = parseInt(loanAmountSlider2.value);
let loanTerm2 = parseInt(loanTermSlider2.value);
let interestRate2 = parseFloat(interestRateSlider2.value);
let capitalGrowthRate2 = parseFloat(capitalGrowthRateSlider2.value);
let expenseGrowth2 = parseInt(expenseGrowthSlider2.value);
let netYield2 = 1.54;


// Setting card values at the top of the page of section 2
let rentalIncomeCard2 = document.getElementById("rentalIncome2");
rentalIncomeCard2.innerHTML = rentalIncome2;
let CoCCard2 = document.getElementById("cocCard2");
let coc2 = (rentalIncome2 / purchasePrice2) + 1;
CoCCard2.innerHTML = coc2.toFixed(4).toString();
let expensesCard2 = document.getElementById("expenses2");
expensesCard2.innerHTML = otherExpenses2.toString();
let netYieldCard2 = document.getElementById("netYield2");
netYieldCard2.innerHTML = netYield2.toString();

function updateLabel2() {
  let currentYear = new Date().getFullYear();
  chart2.data.labels = [];
  loanChart2.data.labels = [];
  for (let i = 0; i <= loanTerm2; i++) {
    chart2.data.labels.push(currentYear + i);
    loanChart2.data.labels.push(currentYear + i);
  }
  chart2.update();
  loanChart2.update();
}

function calculateAnnualIncomeGrowthOverTime2() {
  updateLabel2();
  chart2.data.datasets[0].data = [];
  let income = rentalIncome2;
  chart2.data.datasets[0].data.push(income);
  for (let i = 1; i <= loanTerm2; i++) {
    income += (income * (annualIncomeGrowth2 / 100));
    chart2.data.datasets[0].data.push(income);
  }
  chart2.update();
}

function calculateExpenseGrowthOverTime2() {
  updateLabel2();
  chart2.data.datasets[1].data = calculateExpenses2();
  chart2.update();
}

function calculateExpenses2() {
  let expenses = [];
  let exp = otherExpenses2 + (otherExpenses2 * (vacancy2 / 100)) + (otherExpenses2 * (managementFees2 / 100));
  expenses.push(exp);
  for (let i = 1; i <= loanTerm2; i++) {
    exp += (exp * (expenseGrowth2 / 100));
    expenses.push(exp);
  }
  return expenses;
}

function calculateCoC2() {
  coc2 = (rentalIncome2 / purchasePrice2) + 1;
  CoCCard2.innerHTML = coc2.toFixed(4).toString();
}

function calculateNetYield2() {
  netYield2 = ((weeklyRental2 * 52) - otherExpenses2) / purchasePrice2 * 100;
  netYieldCard2.innerHTML = netYield2.toFixed(4).toString();
}

function calculatePropertyValueOverTime2() {
  loanChart2.data.datasets[0].data = [];
  for (let i = 0; i <= loanTerm2; i++) {
    loanChart2.data.datasets[0].data.push(purchasePrice2 * (1 + (capitalGrowthRate2 / 100) * i));
  }
  loanChart2.update();
}

function calculateLoanBalanceOverTime2() {
  loanChart2.data.datasets[2].data = [];
  let leftToPay = loanAmount2;
  loanChart2.data.datasets[2].data.push(leftToPay);
  for (let i = 0; i <= loanTerm2; i++) {
    leftToPay += (leftToPay * (interestRate2 / 100));
    leftToPay -= (leftToPay / (loanTerm2 - i));
    loanChart2.data.datasets[2].data.push(leftToPay);
  }
  loanChart2.update();
}

function calculateEquityOverTime2() {
  loanChart2.data.datasets[1].data = [];
  for (let i = 0; i <= loanTerm2; i++) {
    let propValue = purchasePrice2 * (1 + (capitalGrowthRate2 / 100) * i);
    loanChart2.data.datasets[1].data.push(propValue - purchasePrice2);
  }
  loanChart2.update();
}

// Reset Charts & Badges
function resetValues2() {
  calculateAnnualIncomeGrowthOverTime2();
  calculateExpenseGrowthOverTime2();
  calculateCoC2();
  calculatePropertyValueOverTime2();
  calculateLoanBalanceOverTime2();
  calculateEquityOverTime2();
  createTable1Home2();
  createTable2Home2();
  calculateNetYield2();
}

resetValues2();

// Slider Responses
weeklyRentalSlider2.oninput = function () {
  weeklyRentalDemo2.innerHTML = this.value;
  weeklyRental2 = parseInt(this.value);
  rentalIncome2 = Math.round(parseInt(this.value) * (52 * (1 - (vacancy2 / 100))));
  rentalIncomeCard2.innerHTML = rentalIncome2;
  resetValues2();
};
annualIncomeGrowthSlider2.oninput = function () {
  annualIncomeGrowthDemo2.innerHTML = this.value;
  annualIncomeGrowth2 = parseInt(this.value);
  resetValues2();
};

otherExpensesSlider2.oninput = function () {
  otherExpensesDemo2.innerHTML = this.value;
  otherExpenses2 = parseInt(this.value);
  expensesCard2.innerHTML = otherExpenses2.toString();
  resetValues2();
};
// customExpensesSlider2.oninput = function () {
//   customExpensesDemo2.innerHTML = this.value;
//   customExpenses2 = parseInt(this.value);
//   expensesCard2.innerHTML = otherExpenses2.toString();
//   resetValues2();
// };
vacancySlider2.oninput = function () {
  vacancyDemo2.innerHTML = this.value;
  vacancy2 = parseInt(this.value);
  expensesCard2.innerHTML = otherExpenses2.toString();
  resetValues2();
};
managementFeesSlider2.oninput = function () {
  managementFeesDemo2.innerHTML = this.value;
  managementFees2 = parseInt(this.value);
  expensesCard2.innerHTML = otherExpenses2.toString();
  resetValues2();
};
expenseGrowthSlider2.oninput = function () {
  expenseGrowthDemo2.innerHTML = this.value;
  expenseGrowth2 = parseInt(this.value);
  resetValues2();
};


purchasePriceSlider2.oninput = function () {
  purchasePriceDemo2.innerHTML = this.value;
  purchasePrice2 = parseInt(this.value);
  resetValues2();
};
loanAmountSlider2.oninput = function () {
  loanAmountDemo2.innerHTML = this.value;
  loanAmount2 = parseInt(this.value);
  resetValues2();
};
loanTermSlider2.oninput = function () {
  loanTermDemo2.innerHTML = this.value;
  loanTerm2 = parseInt(this.value);
  resetValues2();
};
interestRateSlider2.oninput = function () {
  interestRateDemo2.innerHTML = this.value;
  interestRate2 = parseFloat(this.value);
  resetValues2();
};
capitalGrowthRateSlider2.oninput = function () {
  capitalGrowthRateDemo2.innerHTML = this.value;
  capitalGrowthRate2 = parseFloat(this.value);
  resetValues2();
};
savingsSlider2.oninput = function () {
  savingsDemo2.innerHTML = this.value;
  savings2 = parseInt(savingsSlider2.value);
  resetValues2();
};

function toggleSecondHomeSection() {
  document.getElementById("graphContainer2").style.display = "inline-block";
  document.getElementById("graphContainer1").style.display = "none";
  document.getElementsByClassName("graph-container")[1].style.width = "100%";
}

function createTable1Home2() {
  // Remove children
  let table = document.getElementById("capitalGrowthChart2Table");
  let child = table.lastElementChild;
  while (child) {
    table.removeChild(child);
    child = table.lastElementChild;
  }

  let years = [0, 1, 2, 3, 4, 9, 14, 19, 24, 29];
  for (let i = 0; i <= loanTerm2; i++) {
    if (years.includes(i)) {
      let tableRowString = '<tr>\n' +
        '                 <th scope="row">' + ++i + '</th>\n' +
        '                 <td>$' + chart2.data.datasets[0].data[i] + '</td>\n' +
        '                 <td>$' + chart2.data.datasets[1].data[i] + '</td>\n' +
        '                </tr>';
      table.insertAdjacentHTML('beforeend', tableRowString);
    }
  }
}

function createTable2Home2() {
  // Remove children
  let table = document.getElementById("loanChart2Table");
  let child = table.lastElementChild;
  while (child) {
    table.removeChild(child);
    child = table.lastElementChild;
  }

  let years = [0, 1, 2, 3, 4, 9, 14, 19, 24, 29];
  for (let i = 0; i <= loanTerm2; i++) {
    if (years.includes(i)) {
      let tableRowString = '<tr>\n' +
        '                 <th scope="row">' + ++i + '</th>\n' +
        '                 <td>$' + loanChart2.data.datasets[0].data[i] + '</td>\n' +
        '                 <td>$' + loanChart2.data.datasets[1].data[i] + '</td>\n' +
        '                 <td>$' + loanChart2.data.datasets[2].data[i] + '</td>\n' +
        '                </tr>';
      table.insertAdjacentHTML('beforeend', tableRowString);
    }
  }
}
