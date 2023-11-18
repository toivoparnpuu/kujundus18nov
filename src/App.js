import './App.css';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
function App() {
  //console.log(Bar)
  const pikkused = [178, 166, 189];
  const nimed = ['Juku', 'Kati', 'Mati'];

  return (
    <div>
      <Bar data={{ 
        labels: nimed, datasets: [{ label: 'Pikkus', data: pikkused }] }} />


    </div>
  );
}

export default App;
