import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {store} from "./redux/store";

// 실제 개발 시 비지니스 대두분 reducer에 기술,
/*const reducer = (state, action) => {
    if (action.type === 'changeState'){
        return action.payload;
    }
    return 'State';
}*/

// es6 default parameter
// const productReducer = (state = [], action) => {
//     return state;
// }

// const userReducer = (state = '', action) => {
//     switch (action.type) {
//         case 'updateUser':
//             return action.payload;
//     }
//     return state;
// }

// const allReducers = combineReducers({
//     productReducer,
//     userReducer
// })

// const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // reducer: 데이터 변경/관리하는 함수...
// console.log(store);
// console.log(store.getState());

// 1) subscribe, 3) 변경 된 데이터 수신
// store.subscribe(() => console.log(store.getState()));

// Pure function

// Mandatory
/*const action = {
    type: 'changeState',
    payload: 'New State'
};*/

// const action = {
//     type: 'updateUser',
//     payload: 'John'
// };
//
// // 2) dispatch
// store.dispatch(action);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
