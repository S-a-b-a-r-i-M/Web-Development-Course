const buildSalaryValue = (minSalary, maxsalary, salaryPeriod, salaryCurreny) => {
  // Todo: based on the salary currency get the currency symbol
  const currencySymbols= {
    INR: "₹",
    USD: "$",
    EUR: "€",
    GBP: "£",
  }
  const currencySymbol = currencySymbols[salaryCurreny] || ""
  const shortSalaryPeriod = salaryPeriod.startsWith("Y") ? "PA" : `P${salaryPeriod.charAt(0)}`

  const formatSalary = (salary) => {
    if (salary >= 1e7) return (salary / 1e7).toFixed(2) + " Cr"
    else if (salary >= 1e5) return (salary / 1e5).toFixed(2) + "L"
    else if (salary >= 1e3) return (salary / 1e3).toFixed(2) + "K"
    else salary+"H"
  }

  return `${currencySymbol}${minSalary}${shortSalaryPeriod} - ${currencySymbol}${maxsalary}${shortSalaryPeriod}`
}

const minSalary = 800;  // 800 USD
const maxSalary = 1500; // 1500 USD
const salaryPeriod = "Monthly";
const salaryCurrency = "USD";

console.log(buildSalaryValue(minSalary, maxSalary, salaryPeriod.toUpperCase(), salaryCurrency))
