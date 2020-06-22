// Line Chart 1
let chart1 = new Chart(document.getElementById('capitalGrowthChart1').getContext('2d'), {
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
        borderColor: '#fa9656',
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
// Loan Line Chart 1
let loanChart1 = new Chart(document.getElementById('loanChart1').getContext('2d'), {
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
let homeSection1Enabled = true;

// User input Sliders for section 1
let rentalIncomeSlider1 = document.getElementById("rentalIncomeSlider1");
let annualIncomeGrowthSlider1 = document.getElementById("annualIncomeGrowthSlider1");
let otherExpensesSlider1 = document.getElementById("otherExpensesSlider1");
// let customExpensesSlider1 = document.getElementById("customExpensesSlider1");
let vacancySlider1 = document.getElementById("vacancySlider1");
let managementFeesSlider1 = document.getElementById("managementFeesSlider1");
let savingsSlider1 = document.getElementById("savingsSlider1");
let purchasePriceSlider1 = document.getElementById("purchasePriceSlider1");
let loanAmountSlider1 = document.getElementById("LoanAmountSlider1");
let loanTermSlider1 = document.getElementById("LoanTermSlider1");
let interestRateSlider1 = document.getElementById("interestRateSlider1");
let capitalGrowthRateSlider1 = document.getElementById("capitalGrowthRateSlider1");
let expenseGrowthSlider1 = document.getElementById("expenseGrowthSlider1");


// User input Values for section 1
let rentalIncomeDemo1 = document.getElementById("rentalIncomeDemo1");
let annualIncomeGrowthDemo1 = document.getElementById("annualIncomeGrowthDemo1");
let otherExpensesDemo1 = document.getElementById("otherExpensesDemo1");
// let customExpensesDemo1 = document.getElementById("customExpensesDemo1");
let vacancyDemo1 = document.getElementById("vacancyDemo1");
let managementFeesDemo1 = document.getElementById("managementFeesDemo1");
let savingsDemo1 = document.getElementById("savingsDemo1");
let purchasePriceDemo1 = document.getElementById("purchasePriceDemo1");
let loanAmountDemo1 = document.getElementById("LoanAmountDemo1");
let loanTermDemo1 = document.getElementById("LoanTermDemo1");
let interestRateDemo1 = document.getElementById("interestRateDemo1");
let capitalGrowthRateDemo1 = document.getElementById("capitalGrowthRateDemo1");
let expenseGrowthDemo1 = document.getElementById("expenseGrowthDemo1");


// Setting Demo Value based on slider value for section 1
rentalIncomeDemo1.innerHTML = rentalIncomeSlider1.value;
annualIncomeGrowthDemo1.innerHTML = annualIncomeGrowthSlider1.value;

otherExpensesDemo1.innerHTML = otherExpensesSlider1.value;
// customExpensesDemo.innerHTML = customExpensesSlider.value;
vacancyDemo1.innerHTML = vacancySlider1.value;
managementFeesDemo1.innerHTML = managementFeesSlider1.value;

savingsDemo1.innerHTML = savingsSlider1.value;
purchasePriceDemo1.innerHTML = purchasePriceSlider1.value;
loanAmountDemo1.innerHTML = loanAmountSlider1.value;
loanTermDemo1.innerHTML = loanTermSlider1.value;
interestRateDemo1.innerHTML = interestRateSlider1.value;
capitalGrowthRateDemo1.innerHTML = capitalGrowthRateSlider1.value;
expenseGrowthDemo1.innerHTML = expenseGrowthSlider1.value;


// Setting values to Calculation Fields of section 1
let rentalIncome1 = parseInt(rentalIncomeSlider1.value);
let annualIncomeGrowth1 = parseInt(annualIncomeGrowthSlider1.value);
let otherExpenses1 = parseInt(otherExpensesSlider1.value);
// let customExpenses1 = parseInt(customExpensesSlider1.value);
let vacancy1 = parseInt(vacancySlider1.value);
let managementFees1 = parseInt(managementFeesSlider1.value);
let savings1 = parseInt(savingsSlider1.value);
let purchasePrice1 = parseInt(purchasePriceSlider1.value);
let loanAmount1 = parseInt(loanAmountSlider1.value);
let loanTerm1 = parseInt(loanTermSlider1.value);
let interestRate1 = parseFloat(interestRateSlider1.value);
let capitalGrowthRate1 = parseFloat(capitalGrowthRateSlider1.value);
let expenseGrowth1 = parseInt(expenseGrowthSlider1.value);


// Setting card values at the top of the page of section 1
let rentalIncomeCard1 = document.getElementById("rentalIncome1");
rentalIncomeCard1.innerHTML = rentalIncomeSlider1.value;
let CoCCard1 = document.getElementById("cocCard1");
let coc1 = (rentalIncome1 / purchasePrice1) + 1;
CoCCard1.innerHTML = coc1.toFixed(4).toString();
let expensesCard1 = document.getElementById("expenses1");
expensesCard1.innerHTML = otherExpenses1.toString();

function updateLabel1() {
  let currentYear = new Date().getFullYear();
  chart1.data.labels = [];
  loanChart1.data.labels = [];
  for (let i = 0; i <= loanTerm1; i++) {
    chart1.data.labels.push(currentYear + i);
    loanChart1.data.labels.push(currentYear + i);
  }
  chart1.update();
  loanChart1.update();
}

function calculateAnnualIncomeGrowthOverTime1() {
  updateLabel1();
  chart1.data.datasets[0].data = [];
  let income = rentalIncome1;
  chart1.data.datasets[0].data.push(income);
  for (let i = 1; i <= loanTerm1; i++) {
    income += (income * (annualIncomeGrowth1 / 100));
    chart1.data.datasets[0].data.push(income);
  }
  chart1.update();
}

function calculateExpenseGrowthOverTime1() {
  updateLabel1();
  chart1.data.datasets[1].data = calculateExpenses1();
  chart1.update();
}

function calculateExpenses1() {
  let expenses = [];
  let exp = otherExpenses1 + (otherExpenses1 * (vacancy1 / 100)) + (otherExpenses1 * (managementFees1 / 100));
  expenses.push(exp);
  for (let i = 1; i <= loanTerm1; i++) {
    exp += (exp * (expenseGrowth1 / 100));
    expenses.push(exp);
  }
  return expenses;
}

function calculateCoC1() {
  coc1 = (rentalIncome1 / purchasePrice1) + 1;
  CoCCard1.innerHTML = coc1.toFixed(4).toString();
}

function calculatePropertyValueOverTime1() {
  loanChart1.data.datasets[0].data = [];
  for (let i = 0; i <= loanTerm1; i++) {
    loanChart1.data.datasets[0].data.push(purchasePrice1 * (1 + (capitalGrowthRate1 / 100) * i));
  }
  loanChart1.update();
}

function calculateLoanBalanceOverTime1() {
  loanChart1.data.datasets[2].data = [];
  let leftToPay = loanAmount1;
  loanChart1.data.datasets[2].data.push(leftToPay);
  for (let i = 0; i <= loanTerm1; i++) {
    leftToPay += (leftToPay * (interestRate1 / 100));
    leftToPay -= (leftToPay / (loanTerm1 - i));
    loanChart1.data.datasets[2].data.push(leftToPay);
  }
  loanChart1.update();
}

function calculateEquityOverTime1() {
  loanChart1.data.datasets[1].data = [];
  for (let i = 0; i <= loanTerm1; i++) {
    let propValue = purchasePrice1 * (1 + (capitalGrowthRate1 / 100) * i);
    loanChart1.data.datasets[1].data.push(propValue - purchasePrice1);
  }
  loanChart1.update();
}

// Reset Charts
calculateAnnualIncomeGrowthOverTime1();
calculateExpenseGrowthOverTime1();
calculateCoC1();
calculatePropertyValueOverTime1();
calculateLoanBalanceOverTime1();
calculateEquityOverTime1();
createTable1Home1();
createTable2Home1();


// Slider Responses
rentalIncomeSlider1.oninput = function () {
  rentalIncomeDemo1.innerHTML = this.value;
  rentalIncome1 = parseInt(this.value);
  rentalIncomeCard1.innerHTML = rentalIncomeSlider1.value;
  calculateAnnualIncomeGrowthOverTime1();
  calculateCoC1();
  createTable1Home1();
};
annualIncomeGrowthSlider1.oninput = function () {
  annualIncomeGrowthDemo1.innerHTML = this.value;
  annualIncomeGrowth1 = parseInt(this.value);
  calculateAnnualIncomeGrowthOverTime1();
  createTable1Home1();
};

otherExpensesSlider1.oninput = function () {
  otherExpensesDemo1.innerHTML = this.value;
  otherExpenses1 = parseInt(this.value);
  expensesCard1.innerHTML = otherExpenses1.toString();
  calculateExpenseGrowthOverTime1();
  createTable1Home1();
};
// customExpensesSlider1.oninput = function () {
//   customExpensesDemo1.innerHTML = this.value;
//   customExpenses1 = parseInt(this.value);
//   expensesCard1.innerHTML = otherExpenses1.toString();
//   calculateExpenseGrowthOverTime1();
// };
vacancySlider1.oninput = function () {
  vacancyDemo1.innerHTML = this.value;
  vacancy1 = parseInt(this.value);
  expensesCard1.innerHTML = otherExpenses1.toString();
  calculateExpenseGrowthOverTime1();
  createTable1Home1();
};
managementFeesSlider1.oninput = function () {
  managementFeesDemo1.innerHTML = this.value;
  managementFees1 = parseInt(this.value);
  expensesCard1.innerHTML = otherExpenses1.toString();
  calculateExpenseGrowthOverTime1();
  createTable1Home1();
};
expenseGrowthSlider1.oninput = function () {
  expenseGrowthDemo1.innerHTML = this.value;
  expenseGrowth1 = parseInt(this.value);
  calculateExpenseGrowthOverTime1();
  createTable1Home1();
};


purchasePriceSlider1.oninput = function () {
  purchasePriceDemo1.innerHTML = this.value;
  purchasePrice1 = parseInt(this.value);
  calculateCoC1();
  calculatePropertyValueOverTime1();
  calculateLoanBalanceOverTime1();
  calculateEquityOverTime1();
  createTable2Home1();
};
loanAmountSlider1.oninput = function () {
  loanAmountDemo1.innerHTML = this.value;
  loanAmount1 = parseInt(this.value);
  calculatePropertyValueOverTime1();
  calculateLoanBalanceOverTime1();
  calculateEquityOverTime1();
  createTable2Home1();
};
loanTermSlider1.oninput = function () {
  loanTermDemo1.innerHTML = this.value;
  loanTerm1 = parseInt(this.value);
  calculateAnnualIncomeGrowthOverTime1();
  calculateExpenseGrowthOverTime1();
  updateLabel1();
  calculatePropertyValueOverTime1();
  calculateLoanBalanceOverTime1();
  calculateEquityOverTime1();
  createTable2Home1();
};
interestRateSlider1.oninput = function () {
  interestRateDemo1.innerHTML = this.value;
  interestRate1 = parseFloat(this.value);
  calculatePropertyValueOverTime1();
  calculateLoanBalanceOverTime1();
  calculateEquityOverTime1();
  createTable2Home1();
};
capitalGrowthRateSlider1.oninput = function () {
  capitalGrowthRateDemo1.innerHTML = this.value;
  capitalGrowthRate1 = parseFloat(this.value);
  calculatePropertyValueOverTime1();
  calculateLoanBalanceOverTime1();
  calculateEquityOverTime1();
  createTable2Home1();
};
savingsSlider1.oninput = function () {
  savingsDemo1.innerHTML = this.value;
  savings1 = parseInt(savingsSlider1.value);
  calculatePropertyValueOverTime1();
  calculateLoanBalanceOverTime1();
  calculateEquityOverTime1();
  createTable2Home1();
};

function toggleFirstHomeSection() {
  homeSection1Enabled = !homeSection1Enabled;
  if (homeSection1Enabled) {
    document.getElementById("graphContainer1").style.display = "inline-block";
  } else {
    document.getElementById("graphContainer1").style.display = "none";
  }
  resizeHomeSections()
}

function resizeHomeSections() {
  if (homeSection1Enabled && homeSection2Enabled) {
    document.getElementsByClassName("graph-container")[0].style.width = "calc(98%/2)";
    document.getElementsByClassName("graph-container")[1].style.width = "calc(98%/2)";
  } else {
    document.getElementsByClassName("graph-container")[0].style.width = "100%";
    document.getElementsByClassName("graph-container")[1].style.width = "100%";
  }
}

function createTable1Home1() {
  // Remove children
  let table = document.getElementById("capitalGrowthChart1Table");
  let child = table.lastElementChild;
  while (child) {
    table.removeChild(child);
    child = table.lastElementChild;
  }

  let years = [0,1,2,3,4,9,14,19,24,29];
  for (let i = 0; i <= loanTerm1; i++) {
    if (years.includes(i)) {
      let tableRowString = '<tr>\n' +
        '                 <th scope="row">' + ++i + '</th>\n' +
        '                 <td>$' + chart1.data.datasets[0].data[i] + '</td>\n' +
        '                 <td>$' + chart1.data.datasets[1].data[i] + '</td>\n' +
        '                </tr>';
      table.insertAdjacentHTML( 'beforeend', tableRowString );
    }
  }
}

function createTable2Home1() {
  // Remove children
  let table = document.getElementById("loanChart1Table");
  let child = table.lastElementChild;
  while (child) {
    table.removeChild(child);
    child = table.lastElementChild;
  }

  let years = [0,1,2,3,4,9,14,19,24,29];
  for (let i = 0; i <= loanTerm1; i++) {
    if (years.includes(i)) {
      let tableRowString = '<tr>\n' +
        '                 <th scope="row">' + ++i + '</th>\n' +
        '                 <td>$' + loanChart1.data.datasets[0].data[i] + '</td>\n' +
        '                 <td>$' + loanChart1.data.datasets[1].data[i] + '</td>\n' +
        '                 <td>$' + loanChart1.data.datasets[2].data[i] + '</td>\n' +
        '                </tr>';
      table.insertAdjacentHTML( 'beforeend', tableRowString );
    }
  }
}
