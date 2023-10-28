import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import EmpList1 from "./EmpList1";
import EmpForm1 from "./EmpForm1";
import EmpEdit1 from "./EmpEdit1";
import EmpDetails1 from "./EmpDetails1";
import "./index.css";

function App(){
  return(
    <div>
      <Router>
        <Routes>
        
         <Route path="/" element={<EmpList1/>}/>
          <Route path="/empform1" element={<EmpForm1/>}/>
          <Route path="/empedit1/:empid" element={<EmpEdit1/>}/>
          <Route path="/empdetails1/:empid" element={<EmpDetails1/>}/>
         </Routes>
      </Router>

    </div>
  )
}
export default App;



