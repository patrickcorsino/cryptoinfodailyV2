'use client';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function SparklineChart({ data }) {
  return (
    <Line
      options={{
        responsive: true,
        elements: { point: { radius: 0 } },
        scales: { x: { display: false }, y: { display: false } },
        plugins: { legend: { display: false } },
      }}
      data={{
        labels: data.map((_, i) => i),
        datasets: [{
          data: data,
          borderColor: '#00ff99',
          borderWidth: 2,
        }],
      }}
    />
  );
}
