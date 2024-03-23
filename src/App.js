import './App.css';
import { Header } from './Components/Header/Header';
import { Outlet } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <SpeedInsights/>
    </div>
  );
}

export default App;
