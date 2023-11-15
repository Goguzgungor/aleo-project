import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const CrashChart = () => {
  const chartRef = useRef(null);
  const [crashData, setCrashData] = useState([]);
  const [isCrashed, setIsCrashed] = useState(false);
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(1000); // Başlangıç bakiyesi

  useEffect(() => {
    const fetchData = () => {
      // Oyun çöktü mü kontrolü
      if (Math.random() > 0.98 && !isCrashed) {
        setIsCrashed(true);
      }

      // Oyun devam ederken yeni veri ekleyin (parabolik artış)
      if (!isCrashed) {
        const time = crashData.length + 1;
        const newDataPoint = (0.1 * time * time) / 100; // Parabolik artış
        setCrashData((prevData) => [...prevData, newDataPoint]);
      }
    };

    // Her 100 milisaniyede bir yeni veri ekleyerek bir simülasyon çalıştırın
    const intervalId = setInterval(fetchData, 100);

    // Temizleme
    return () => clearInterval(intervalId);
  }, [crashData, isCrashed]);

  useEffect(() => {
    // Chart.js grafiği oluşturun
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array.from({ length: crashData.length }, (_, i) => i + 1),
        datasets: [{
          label: 'Crash Data',
          data: crashData,
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: false,
        }],
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
          },
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 100, // Y eksenindeki her adım
              precision: 0, // Sayıların ondalık basamak hassasiyeti
            },
          },
        },
        animation: {
          onComplete: () => {
            // Animasyon tamamlandığında oyunu kontrol et
            if (!isCrashed && crashData.length > 1 && crashData[crashData.length - 1] > 1000) {
              setIsCrashed(true);
            }
          },
        },
      },
    });

    // Component unmount olduğunda grafiği temizle
    return () => {
      myChart.destroy();
    };
  }, [crashData, isCrashed]);

  const handleDeposit = () => {
    setIsCrashed(false);
    setCrashData([]);
  };

  const handleWithdraw = () => {
    // Çek butonuna tıklandığında yapılacak işlemler
    setBalance(balance - amount);
    setAmount(0);
  };

  return (
    <div>
      <canvas ref={chartRef} width="1200" height="600"></canvas>
      <p>{isCrashed ? 'Game Crashed!' : 'Game in progress...'}</p>
      <h1>{crashData[crashData.length - 1]+1}</h1>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value) || 0)} />
      </div>
      <div>
        <button onClick={handleDeposit}>Yatır</button>
        <button onClick={handleWithdraw}>Çek</button>
      </div>
      <p>Bakiye: {balance}</p>
    </div>
  );
};

export default CrashChart;
