import './App.css';
import Navbar from './component/Navbar/Navbar';
import Appointment from './pages/AppointmentPage/Appointment';
import Homepage from './pages/HomePage/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Homepage/>}/>
            <Route exact path='/book-appointment' element={<Appointment/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
