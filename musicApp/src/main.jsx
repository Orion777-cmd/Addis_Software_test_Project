import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {Provider} from "react-redux"
import {store} from "./redux/store.js"
import {useSelector} from "react-redux"

const BodyBackground = () => {
  // Retrieve the theme from the Redux store
  const theme = useSelector(state => state.theme.mode);

  // Update the body background based on the theme
  document.body.style.backgroundColor = theme === 'dark' ? '#040D12' : '#fffff0';

  // Return null as this component does not render anything in the DOM
  return null;
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <BodyBackground />
    </Provider>
  </React.StrictMode>,
)
