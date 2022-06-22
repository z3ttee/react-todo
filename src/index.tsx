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
      <AppHeader />
            
      <div>
        <Routing />
      </div>
      
      <AppFooter>
        <p>&copy; {new Date().getFullYear()} by Cedric Zitzmann</p>
      </AppFooter>
    </Provider>
  </DarkTheme>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
