import React from 'react';
import {Pie} from 'react-chartjs-2';

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
  ArcElement
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);


//npm install react-chartjs-2 chart.js
//const pikkused=[170, 160, 167];
const eesnimed=["Juku", "Kati", "Madis"];

function App2() {
  //todo lisa nimede järgi pluss ja miinus nupud suurendamiseks ja vähendamiseks
  const [pikkused, muudaPikkused]=React.useState([170, 160, 167]);
  function uuendaPikkus(nr, operaator){

	  let pikkusteKoopia=[...pikkused];
	  //pikkusteKoopia[nr]+=1;
    if(operaator==="miinus"){
      pikkusteKoopia[nr]-=1;
    } else {
      pikkusteKoopia[nr]+=1;
    }
	  muudaPikkused(pikkusteKoopia);
  }
  return (
    <div>
     <div style={{"width":"60%"}}><Pie data={{
		 datasets:[
		 {label: "Inimeste pikkused",
		  data: pikkused
		  }
		 ],
         labels: eesnimed 		 
	 }} /></div>
	 <ul>{eesnimed.map((eesnimi, indeks) => 
	   <li key={indeks} >{eesnimi} <button onClick={() => uuendaPikkus(indeks, "pluss")}>Suurenda</button> <button onClick={() => uuendaPikkus(indeks, "miinus")}>Vähenda</button></li>)}
	 </ul>
    </div>
  );
}

export default App2;