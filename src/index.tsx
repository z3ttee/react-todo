import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { AppFooter } from './shared/footer';
import { AppHeader } from './shared/header';
import { Routing } from "./routing/routes";
import { Provider } from 'react-redux';
import { store } from './store/store';
import { DarkTheme } from './theme/darkTheme';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <DarkTheme>
    <Provider store={store}>
      <div className='flex flex-col flex-1 w-full h-full relative overflow-hidden'>
          <AppHeader title='React TODO Demo' />
            
          <div className="flex-grow overflow-y-auto h-full">
            <Routing />
          </div>
      
          <AppFooter>
            <p>&copy; {new Date().getFullYear()} by Cedric Zitzmann</p>
          </AppFooter> 
      </div>
    </Provider>
  </DarkTheme>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
