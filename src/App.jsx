import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import UserInput from "./components/UserInput";
import { useState } from "react";
import ResultTable from "./components/ResultTable";

const INVESTMENT_DATA = {
  initialInvestment: "",
  annualInvestment: "",
  expectedReturn: "",
  duration: "",
};

function App() {
  const [investment, setInvestment] = useState(INVESTMENT_DATA);

  function handleInvestmentDataChange(property, value) {
    return setInvestment((prevInvestment) => {
      const newInvestment = {
        ...prevInvestment,
        [property]: +value,
      };
      return newInvestment;
    });
  }

  const showTable = investment.duration >= 1;
  let resultTable = <p className="center">Please enter a valid duration!</p>;

  if (showTable) {
    resultTable = <ResultTable investment={investment} />;
  }

  return (
    <>
      <Header />
      <main>
        <UserInput
          investment={investment}
          onInvestmentDataChange={handleInvestmentDataChange}
        />
        <section className="section-table">{resultTable}</section>
      </main>
      <Footer />
    </>
  );
}

export default App;
