import React, {useState} from 'react';
import './App.css';
import Lotto from "./Lotto/Lotto";

const App = () => {

    const [circle, setCircle] = useState([0, 0, 0, 0, 0]);

    const changeNumber = () => {
        let array: number[] = [];
        do {
            let result = Math.floor(Math.random() * 32 + 5);
            if (!array.includes(result)) {
                array.push(result);
                array.sort((a, b) => a - b);
            }
        } while (array.length < 5);

        setCircle(array);
    };


    return (
        <div className="App">
            <div>
                <button className="btn" onClick={changeNumber}>New numbers</button>
            </div>

            <Lotto number={circle[0]}/>
            <Lotto number={circle[1]}/>
            <Lotto number={circle[2]}/>
            <Lotto number={circle[3]}/>
            <Lotto number={circle[4]}/>
        </div>
    );
};
    export default App;
