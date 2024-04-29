import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Router,Routes } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import IncidentForm from './components/IncidentForm.js';
import { Route } from 'react-router-dom/dist/index.js';
import LoginForm from './components/LoginForm.js';
import SendNotification from './components/SendNotification.js';
import Notifications from './components/Notifications.jsx'
import Whatsapp from './components/Whatsapp.jsx';
function App() {
  return (
    
     <div className="App">
      {/* <IncidentForm/>
      <UpdateIncident></UpdateIncident> */}
      
      {/* <LoginForm/> */}
      
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" exact component={SearchIncident} />
        <Route path="/UpdateIncident" component={UpdateIncident} />
        <Route path="/TabContent" component={TabContent} /> */}
       <Route path="/"  element={<LoginForm/>} />
        <Route path="/IncidentForm" element={<IncidentForm/>} />
        <Route path="/SendNotification" element={<SendNotification/>} />
        <Route path="/Notifications" element={<Notifications/>}/>
        <Route path='/LoginForm' element={<LoginForm/>} />
        <Route path='/Whatsapp' element={<Whatsapp/>}/>
        </Routes>
    </BrowserRouter>
   

    </div>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
