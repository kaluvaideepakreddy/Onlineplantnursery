import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlantViewAll from './Component/PlantViewAll';
import Plant from './Component/Plant';
import Add from "./Component/Add";
import Delete from "./Component/Delete";
import Update from "./Component/Update";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route exact path="/" element={<Plant/>}/>
            <Route exact path="/PlantViewAll" element={<PlantViewAll/>}/>
            <Route exact path={"/Add"} element={<Add/>}/>
            <Route exact path={"/Delete"} element={<Delete/>}/>
            <Route exact path={"/Update"} element={<Update/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
