import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import './index.css';
import MyRouter from "./router/MyRouter";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {fakeApi} from "./redux/navagationsSlice";

store.dispatch(fakeApi());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router>
            <MyRouter/>
        </Router>
    </Provider>

);
