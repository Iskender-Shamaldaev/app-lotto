import React, {useState} from 'react';
import './App.css';
import Lotto from "./Lotto/Lotto";

const App = () => {
    const[circle, setCircle] = useState([
        {number: 20}
    ]);

    const changeNumber = () => {
        setCircle([
            {number: 36}
        ])
    };

      return (
          <div className="App">
              <div>
                  <button className="btn" onClick={changeNumber}>New numbers</button>
              </div>

                <Lotto number={circle[0].number} />
                <Lotto number={circle[0].number} />
                <Lotto number={circle[0].number} />
                <Lotto number={circle[0].number} />
                <Lotto number={circle[0].number} />
          </div>
      );
};

export default App;
