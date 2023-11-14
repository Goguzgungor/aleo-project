import React, { useState } from "react";
import { Input, Button } from "antd";
import "../App.css";
const BetInput = ({ onBetSubmit, isReady }) => {
  const [betAmount, setBetAmount] = useState("");

  const handleButtonClick = () => {
    onBetSubmit(betAmount, isReady);
    setBetAmount("");
  };

  return (
      <div className="input-cont">
      <Input className="bet-input"
      placeholder="Bet Amount"
      value={betAmount}
      onChange={(e) => setBetAmount(e.target.value)}
      style={{ marginBottom: "8px" }}
      />
      <Button type="primary" onClick={handleButtonClick}>
        {isReady ? "Ready" : "Stop"}
      </Button>
      </div>

  );
};

export default BetInput;
