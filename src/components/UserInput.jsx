export default function UserInput({ investment, onInvestmentDataChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <label>
          INITIAL INVESTMENT <br></br>
          <input
            value={investment.initial}
            type="number"
            onChange={(event) =>
              onInvestmentDataChange("initialInvestment", event.target.value)
            }
            name="initialInvestment"
            id="initialInvestment"
            required
          />
        </label>
        <label>
          ANNUAL INVESTMENT <br></br>
          <input
            value={investment.annual}
            type="number"
            onChange={(event) =>
              onInvestmentDataChange("annualInvestment", event.target.value)
            }
            name="annualInvestment"
            id="annualInvestment"
            required
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          EXPECTED RETURN <br></br>
          <input
            value={investment.expected}
            type="number"
            onChange={(event) =>
              onInvestmentDataChange("expectedReturn", event.target.value)
            }
            name="expectedReturn"
            id="expectedReturn"
            required
          />
        </label>
        <label>
          DURATION <br></br>
          <input
            value={investment.duration}
            type="number"
            onChange={(event) =>
              onInvestmentDataChange("duration", event.target.value)
            }
            name="duration"
            id="duration"
            required
          />
        </label>
      </div>
    </div>
  );
}
