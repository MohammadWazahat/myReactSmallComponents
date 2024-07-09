import React from "react";
import AllComponents from "./components/AllComponents";
import "./App.css";
import { Provider } from "react-redux";
import {store} from "./redux/app/store"


const App = () => {
  
  return (
    <div>
      
      <Provider store={store}>
        <AllComponents />
      </Provider>
    </div>
  );
};

export default App;
