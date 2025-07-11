import React, {useState} from 'react'
import "./Game.css"

function Game() {

    //set up keyboard
    const keydata = ["Q", "W", "E", "R", "T", "Y",
        "U", "I", "O", "P", "A", "S", "D", "F", "G", 
        "H", "J", "K", "L", "ENTER", "Z", "X", "C", "V", "B", "N", "M", "DEL"
    ];
    const [keys, setKeys] = useState(keydata);

    const [userguess, setUserguess] = useState("_____")

    const [pos, setPos] = useState(0)

    const handleKey = (e) =>{
        console.log('key', e.target.textContent)
        //need to replace the letter at pos with this
        let temp = userguess.split('');
        //cannot modify a position in a string so
        //make array of characters
        console.log(temp);
        //change the letter
        temp[pos] = e.target.textContent;
        console.log(temp.join(''));
        //update state!
        setUserguess(temp.join(''))
        //move to next position
        setPos(pos+1)
    }

  return (
    <div className="game-board">
        <div className="word-board">
            <div className="word-row">
                <h3 id="p10">{userguess[0]}</h3>
                <h3 id="p11">{userguess[1]}</h3>
                <h3>{userguess[2]}</h3>
                <h3>{userguess[3]}</h3>
                <h3>{userguess[4]}</h3>
            </div>
        </div>

        <div className="key-board">
            <div className="key-row">
            {
                keys.slice(0, 10).map((item, index)=>
                <button onClick={handleKey} key={index}>{item}</button>)
            }
            </div>

            <div className="key-row">
            {
                keys.slice(10, 19).map((item, index)=><button onClick={handleKey} key={index}>{item}</button>)
            }
            </div>

            <div className="key-row">
            {
                keys.slice(19).map((item, index)=><button onClick={handleKey} key={index}>{item}</button>)
            }
            </div>

        </div>
    </div>
  )
}

export default Game