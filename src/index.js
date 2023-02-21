import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main';
import Experiment1 from './Components/Experiments/Experiment1';
import Experiment2 from './Components/Experiments/Experiment2';
import Experiment3 from './Components/Experiments/Experiment3';
import Experiment4 from './Components/Experiments/Experiment4';
import Experiment5 from './Components/Experiments/Experiment5';
import Experiment6 from './Components/Experiments/Experiment6';
import Experiment7 from './Components/Experiments/Experiment7';
import Experiment8 from './Components/Experiments/Experiment8';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Main/>
      },
      {
        path: "/exp1",
        element:<Experiment1/>
      },
      {
        path: "/exp2",
        element: <Experiment2/>
      },
      {
        path: "/exp3",
        element: <Experiment3/>
      },
      {
        path: "/exp4",
        element: <Experiment4/>
      },
      {
        path: "/exp5",
        element: <Experiment5/>
      },
      {
        path:"/exp6",
        element: <Experiment6/>
      },
      {
        path: "/exp7",
        element: <Experiment7/>
      },
      {
        path: "/exp8",
        element: <Experiment8/>
      }
    ]
  },
]);


ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  document.getElementById('root')
);
