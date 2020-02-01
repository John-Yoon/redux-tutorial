import React from 'react';
import './App.css';
import {connect, useDispatch, useSelector} from "react-redux";
import {updateUser} from "./redux/actions";

function App(props) {
    console.log(props);
    // create redux hooks, react 16.8 ~^, react-redux 7.1 ~^ 사용가능하다.
    const user = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    return (
        <div className="App">
            {/*<p>product length: {props.product.length}</p>*/}
            <p>{user}</p>
            <button onClick={() => dispatch(updateUser('Jane'))}>Action Test</button>
        </div>
    );
}

export default App;

// // subscribe: Store의 state를 props 매핑한다.
// const mapStateToProps = (state) => ({
//   // 왼쪽 props, 오른쪽 store.state
//   product: state.productReducer,
//   user: state.userReducer
// });
//
// //dispatch: (Action을 dispatch하는) function을 props로 매핑.
// const mapActionToProps = (dispatch) => ({
//     // L - props, R - function
//     updateUser: (name) => dispatch(updateUser(name))
// })
//
// // export default App;
// // HoC, 커링 function
// export default connect(mapStateToProps, mapActionToProps)(App);
//
// // react-redux 7.0부터 redux hooks가 제공된다???
