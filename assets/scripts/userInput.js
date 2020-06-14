// Line Chart
let ctx = document.getElementById('capitalGrowthChart').getContext('2d');
let chart = new Chart(ctx, {
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
      },
      {
        label: 'CoC ROI',
        borderColor: '#4c4c4c',
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
          labelString: 'Amount'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Year'
        }
      }]
    }
  }
});

// Loan Line Chart
let ctx2 = document.getElementById('loanChart').getContext('2d');
let loanChart = new Chart(ctx2, {
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
          labelString: 'Amount'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Year'
        }
      }]
    }
  }
});


// User input Sliders
let rentalIncomeSlider = document.getElementById("rentalIncomeSlider");
let annualIncomeGrowthSlider = document.getElementById("annualIncomeGrowthSlider");

let otherExpensesSlider = document.getElementById("otherExpensesSlider");
let customExpensesSlider = document.getElementById("customExpensesSlider");
let vacancySlider = document.getElementById("vacancySlider");
let managementFeesSlider = document.getElementById("managementFeesSlider");

let savingsSlider = document.getElementById("savingsSlider");
let purchasePriceSlider = document.getElementById("purchasePriceSlider");
let loanAmountSlider = document.getElementById("LoanAmountSlider");
let loanTermSlider = document.getElementById("LoanTermSlider");
let interestRateSlider = document.getElementById("interestRateSlider");
let expenseGrowthSlider = document.getElementById("expenseGrowthSlider");


// User input Values
let rentalIncomeDemo = document.getElementById("rentalIncomeDemo");
let annualIncomeGrowthDemo = document.getElementById("annualIncomeGrowthDemo");

let otherExpensesDemo = document.getElementById("otherExpensesDemo");
let customExpensesDemo = document.getElementById("customExpensesDemo");
let vacancyDemo = document.getElementById("vacancyDemo");
let managementFeesDemo = document.getElementById("managementFeesDemo");

let savingsDemo = document.getElementById("savingsDemo");
let purchasePriceDemo = document.getElementById("purchasePriceDemo");
let loanAmountDemo = document.getElementById("LoanAmountDemo");
let loanTermDemo = document.getElementById("LoanTermDemo");
let interestRateDemo = document.getElementById("interestRateDemo");
let expenseGrowthDemo = document.getElementById("expenseGrowthDemo");


// Setting Demo Value based on slider value
rentalIncomeDemo.innerHTML = rentalIncomeSlider.value;
annualIncomeGrowthDemo.innerHTML = annualIncomeGrowthSlider.value;

otherExpensesDemo.innerHTML = otherExpensesSlider.value;
customExpensesDemo.innerHTML = customExpensesSlider.value;
vacancyDemo.innerHTML = vacancySlider.value;
managementFeesDemo.innerHTML = managementFeesSlider.value;

savingsDemo.innerHTML = savingsSlider.value;
purchasePriceDemo.innerHTML = purchasePriceSlider.value;
loanAmountDemo.innerHTML = loanAmountSlider.value;
loanTermDemo.innerHTML = loanTermSlider.value;
interestRateDemo.innerHTML = interestRateSlider.value;
expenseGrowthDemo.innerHTML = expenseGrowthSlider.value;


// Setting values to Calculation Fields
let rentalIncome = parseInt(rentalIncomeSlider.value);
let annualIncomeGrowth = parseInt(annualIncomeGrowthSlider.value);

let otherExpenses = parseInt(otherExpensesSlider.value);
let customExpenses = parseInt(customExpensesSlider.value);
let vacancy = parseInt(vacancySlider.value);
let managementFees = parseInt(managementFeesSlider.value);


let savings = parseInt(savingsSlider.value);
let purchasePrice = parseInt(purchasePriceSlider.value);
let loanAmount = parseInt(loanAmountSlider.value);
let loanTerm = parseInt(loanTermSlider.value);
let interestRate = parseFloat(interestRateSlider.value);
let expenseGrowth = parseInt(expenseGrowthSlider.value);
let totalExpense;


// Setting card values at the top of the page
let rentalIncomeCard = document.getElementById("rentalIncome");
rentalIncomeCard.innerHTML = rentalIncomeSlider.value;
let totalCashNeeded = document.getElementById("totalCashNeeded");
totalCashNeeded.innerHTML = loanAmountSlider.value;
let totalSavingsAmount = document.getElementById("totalSavingsAmount");
totalSavingsAmount.innerHTML = savingsSlider.value;
let expensesCard = document.getElementById("expenses");
expensesCard.innerHTML = calculateExpenses().toString();

function calculateExpenses() {
  totalExpense = otherExpenses + customExpenses + (rentalIncome * (vacancy / 100)) + (rentalIncome * (managementFees / 100));
  return totalExpense;
}

function updateLabel() {
  let currentYear = new Date().getFullYear();
  chart.data.labels = [];
  loanChart.data.labels = [];
  for (let i = 0; i <= loanTerm; i++) {
    chart.data.labels.push(currentYear + i);
    loanChart.data.labels.push(currentYear + i);
  }
  chart.update();
  loanChart.update();
}

function calculateAnnualIncomeGrowthOverTime() {
  updateLabel();
  chart.data.datasets[0].data = [];
  for (let i = 0; i <= loanTerm; i++) {
    chart.data.datasets[0].data.push(rentalIncome * (1 + (annualIncomeGrowth / 100) * i));
  }
  calculateCoC();
  chart.update();
}

function calculateExpenseGrowthOverTime() {
  updateLabel();
  chart.data.datasets[1].data = [];
  for (let i = 0; i <= loanTerm; i++) {
    chart.data.datasets[1].data.push(totalExpense * (1 + (expenseGrowth / 100) * i));
  }
  calculateCoC();
  chart.update();
}

function calculateCoC() {
  chart.data.datasets[2].data = [];
  for (let i = 0; i <= loanTerm; i++) {
    chart.data.datasets[2].data.push(chart.data.datasets[0].data[i] - chart.data.datasets[1].data[i]);
  }
}

function calculatePropertyValueOverTime() {
  loanChart.data.datasets[0].data = [];
  for (let i = 0; i <= loanTerm; i++) {
    loanChart.data.datasets[0].data.push(loanAmount * (1 + (2 / 100) * i));
  }
  loanChart.update();
}

function calculateEquityOverTime() {
  loanChart.data.datasets[1].data = [];
  for (let i = 0; i <= loanTerm; i++) {
    loanChart.data.datasets[1].data.push(loanAmount - (10000 * i));
  }
  loanChart.update();
}

function calculateLoanBalanceOverTime() {
  loanChart.data.datasets[2].data = [];
  for (let i = 0; i <= loanTerm; i++) {
    loanChart.data.datasets[2].data.push(loanAmount);
  }
  loanChart.update();
}

// Reset Charts
calculateAnnualIncomeGrowthOverTime();
calculateExpenseGrowthOverTime();
calculateCoC();
calculatePropertyValueOverTime();
calculateEquityOverTime();
calculateLoanBalanceOverTime();



// Slider Responses
rentalIncomeSlider.oninput = function () {
  rentalIncomeDemo.innerHTML = this.value;
  rentalIncome = parseInt(this.value);
  rentalIncomeCard.innerHTML = rentalIncomeSlider.value;
  calculateAnnualIncomeGrowthOverTime();
};
annualIncomeGrowthSlider.oninput = function () {
  annualIncomeGrowthDemo.innerHTML = this.value;
  annualIncomeGrowth = parseInt(this.value);
  calculateAnnualIncomeGrowthOverTime();
};

otherExpensesSlider.oninput = function () {
  otherExpensesDemo.innerHTML = this.value;
  otherExpenses = parseInt(this.value);
  expensesCard.innerHTML = calculateExpenses().toString();
  calculateExpenseGrowthOverTime();
};
customExpensesSlider.oninput = function () {
  customExpensesDemo.innerHTML = this.value;
  customExpenses = parseInt(this.value);
  expensesCard.innerHTML = calculateExpenses().toString();
  calculateExpenseGrowthOverTime();
};
vacancySlider.oninput = function () {
  vacancyDemo.innerHTML = this.value;
  vacancy = parseInt(this.value);
  expensesCard.innerHTML = calculateExpenses().toString();
  calculateExpenseGrowthOverTime();
};
managementFeesSlider.oninput = function () {
  managementFeesDemo.innerHTML = this.value;
  managementFees = parseInt(this.value);
  expensesCard.innerHTML = calculateExpenses().toString();
  calculateExpenseGrowthOverTime();
};
expenseGrowthSlider.oninput = function () {
  expenseGrowthDemo.innerHTML = this.value;
  expenseGrowth = parseInt(this.value);
  calculateExpenseGrowthOverTime();
};


purchasePriceSlider.oninput = function () {
  purchasePriceDemo.innerHTML = this.value;
  purchasePrice = parseInt(this.value);
};
loanAmountSlider.oninput = function () {
  loanAmountDemo.innerHTML = this.value;
  loanAmount = parseInt(this.value);
  totalCashNeeded.innerHTML = loanAmountSlider.value;
};
loanTermSlider.oninput = function () {
  loanTermDemo.innerHTML = this.value;
  loanTerm = parseInt(this.value);
  calculateAnnualIncomeGrowthOverTime();
  calculateExpenseGrowthOverTime();
  updateLabel();
};
interestRateSlider.oninput = function () {
  interestRateDemo.innerHTML = this.value;
  interestRate = parseFloat(this.value);
};
savingsSlider.oninput = function () {
  savingsDemo.innerHTML = this.value;
  savings = parseInt(savingsSlider.value);
  totalSavingsAmount.innerHTML = savingsSlider.value;
};
