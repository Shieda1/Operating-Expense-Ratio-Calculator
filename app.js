// https://calculator.swiftutors.com/operating-expense-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const operatingExpenseRatioRadio = document.getElementById('operatingExpenseRatioRadio');
const operatingExpensesRadio = document.getElementById('operatingExpensesRadio');
const effectiveGrossIncomeRadio = document.getElementById('effectiveGrossIncomeRadio');

let operatingExpenseRatio;
let operatingExpenses = v1;
let effectiveGrossIncome = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

operatingExpenseRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Operating Expenses';
  variable2.textContent = 'Effective Gross Income';
  operatingExpenses = v1;
  effectiveGrossIncome = v2;
  result.textContent = '';
});

operatingExpensesRadio.addEventListener('click', function() {
  variable1.textContent = 'Operating Expense Ratio';
  variable2.textContent = 'Effective Gross Income';
  operatingExpenseRatio = v1;
  effectiveGrossIncome = v2;
  result.textContent = '';
});

effectiveGrossIncomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Operating Expense Ratio';
  variable2.textContent = 'Operating Expenses';
  operatingExpenseRatio = v1;
  operatingExpenses = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(operatingExpenseRatioRadio.checked)
    result.textContent = `Operating Expense Ratio = ${computeOperatingExpenseRatio().toFixed(2)} %`;

  else if(operatingExpensesRadio.checked)
    result.textContent = `Operating Expenses = ${computeOperatingExpenses().toFixed(2)}`;

  else if(effectiveGrossIncomeRadio.checked)
    result.textContent = `Effective Gross Income = ${computeEffectiveGrossIncome().toFixed(2)}`;
})

// calculation

function computeOperatingExpenseRatio() {
  return (Number(operatingExpenses.value) / Number(effectiveGrossIncome.value)) * 100;
}

function computeOperatingExpenses() {
  return (Number(operatingExpenseRatio.value) / 100) * Number(effectiveGrossIncome.value);
}

function computeEffectiveGrossIncome() {
  return Number(operatingExpenses.value) / (Number(operatingExpenseRatio.value) / 100);
}