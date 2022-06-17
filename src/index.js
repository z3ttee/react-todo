import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Routing } from './routing/routes';
import { AppFooter } from './shared/footer';
import { AppHeader } from './shared/header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='flex flex-col flex-1 w-full h-full relative overflow-hidden bg-gray-700 text-white'>
        <AppHeader />
        
        <div className="flex-grow overflow-y-auto h-full">
          <Routing />
        </div>
  
        <AppFooter>
          <p>&copy; {new Date().getFullYear()} by Cedric Zitzmann</p>
        </AppFooter> 
      </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
