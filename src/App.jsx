import { useState } from "react";
import "./App.css";
import { AleoWorker } from "./workers/AleoWorker.js";
import { MyLayout } from "./core/Layout";
import BetInput from "./core/BetInput";
import CrashChart from "./charts/CrashChart";
import LeaderBoard from "./core/LeaderBoard";
import { Badge, Card, List } from "antd";
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
};
const aleoWorker = AleoWorker();
function App() {
  const [count, setCount] = useState(0);
  const [account, setAccount] = useState(null);


  const generateAccount = async () => {
    const key = await aleoWorker.getPrivateKey();
    setAccount(await key.to_string());
  };
  const chartData = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    values: [10, 20, 30],
  };

  return (
    <div className="card">
      {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      {/* <button onClick={generateAccount}>
            {account
              ? `Account is ${JSON.stringify(account)}`
              : `Click to generate account`}
          </button> */}
      <div>
        <List.Item>
        <Card title="Wallet Infos" size="small">
            publicKey: lorem ipsum
          </Card>
          <Card size="small">
            balance: lorem ipsum
          </Card>
        </List.Item>
        <LeaderBoard />
      </div>
      <CrashChart></CrashChart>
    </div>

  );
}

export default App;
