import React from 'react';
import ReactDOM from 'react-dom/client';




import { BrowserRouter } from 'react-router-dom';
import Root from './Root';

import "./styles.css";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 <BrowserRouter>
 <Root/>
 </BrowserRouter>
);



