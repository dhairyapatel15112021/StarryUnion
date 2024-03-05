import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Home } from './Components/Home/Home';
import { Photos } from './Components/Photos/Photos';
const OurRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {path:'',element:<Home/>},
      {path:'photos',element:<Photos/>},
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home/>} />
          <Route path="photos" element={<Photos/>} />
        </Route>
      </Routes>
    </BrowserRouter> */}
  <RouterProvider router={OurRouter}/>
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
