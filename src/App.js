import Card from "./card/Card";
import {Routes,Route,Navigate, useNavigate} from 'react-router-dom';
import History from "./History/History";


function App() {
  let navigate= useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/Todo" />} />
        <Route path="/Todo" element={ <Card/>} />
        <Route path="/Viewall" element={ <History/>} />
  

        </Routes>

        
        <button onClick={()=>{ navigate(-1)}} className="btn btn-success">back</button>
        <button onClick={()=>{ navigate("/Viewall")}} className="btn btn-success">View history</button>
    
    </div>
  );
}

export default App;
