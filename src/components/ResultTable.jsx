import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultTable({ investment }) {
  const calculatedInvestmentResults = calculateInvestmentResults(investment);
  const initialInvestment =
    calculatedInvestmentResults[0].valueEndOfYear -
    calculatedInvestmentResults[0].interest -
    calculatedInvestmentResults[0].annualInvestment;

  return (
    <table id="result">
      <thead className="center">
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculatedInvestmentResults.map((result, resultIndex) => {
          const totalInterest =
            result.valueEndOfYear -
            result.annualInvestment * result.year -
            initialInvestment;
          const totalAmountInvested = result.valueEndOfYear - totalInterest;
          return (
            <tr key={resultIndex}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
