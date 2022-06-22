import "../node_modules/bootstrap/dist/css/bootstrap.css";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Front from "./component/pages/Front";
import Navbar from "./component/layout/Navbar";
import PageNotFound from "./component/pages/PageNotFound";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Patient from "./component/Patient/Patient";
import Doctor from "./component/Doctor/Doctor";
import Receptionist from "./component/Receptionist/Receptionist";
import PatientLogin from "./component/Patient/PatientLogin";
import PatientSignUp from "./component/Patient/PatientSignUp";
import PatientDashboard from "./component/Patient/PatientDashboard";
import BookDoctor from "./component/Patient/BookDoctor";
import DoctorDetails from "./component/Patient/DoctorDetails";
import Payment from "./component/Patient/Payment";
import DLogin from "./component/Doctor/DoctorLogin";
import DSignUp from "./component/Doctor/DoctorSignUp";
import DoctorDashboard from "./component/Doctor/DoctorDashboard";
import RLogin from "./component/Receptionist/RLogin";
import RSignUp from "./component/Receptionist/RSignUp";
import ReceptionistDashboard from "./component/Receptionist/ReceptionistDashboard";


function App() {
  return (
    <Router>

      <div className="App">
        
        <Switch>
          <Route exact path = "/" component={Front} />
          <Route path = "/about" component={About} />
          <Route path = "/contact" component={Contact} />
          <Route path = "/patient/:id" component={Patient} />
          <Route path = "/plogin" component={PatientLogin} />
          <Route path = "/psignup" component={PatientSignUp} />
          <Route path = "/doctor/:id" component={DoctorDetails} />
          <Route path = "/receptionist" component={Receptionist} />
          <Route path = "/pdashboard" component={PatientDashboard} />
          <Route path = "/bookdoctor" component={BookDoctor} />
          <Route path = "/ppayment" component={Payment} />
          <Route path = "/dlogin" component={DLogin} />
          <Route path = "/dsignup" component={DSignUp} />
          <Route path = "/ddashboard" component={DoctorDashboard} />
          <Route path = "/rlogin" component={RLogin} />
          <Route path = "/rsignup" component={RSignUp} />
          <Route path = "/rdashboard" component={ReceptionistDashboard} />
          


          <Route path = "*" component={PageNotFound} />
        </Switch>
        </div>
    </Router>
      
    
  );
}

export default App;
