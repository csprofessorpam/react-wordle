import React, {useState} from 'react'
import "./Game.css"

function Game() {

    //pick a word
    const [randword, setRandword] = useState("HELLO")
    const [message, setMessage] = useState('')
    const [gameover, setGameover] = useState(false)

    //set up keyboard
    const keydata = ["Q", "W", "E", "R", "T", "Y",
        "U", "I", "O", "P", "A", "S", "D", "F", "G", 
        "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
    const [keys, setKeys] = useState(keydata);

    const [userguess, setUserguess] = useState("_____")

    const [pos, setPos] = useState(0)

    //for styling letters
    const [row1, setRow1] = useState([])
    // const [row1, setRow1] = useState(['green', 'gray', '', 'yellow', 'green'])

    const handleKey = (e) =>{
        setMessage('');

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

    //for backspace
    const handleDelete = () =>{
        console.log('del', pos)
        //blank out previous spot
        let temp = userguess.split('');
        //change the letter
        temp[pos-1] = "_";
        console.log(temp.join(''));
        //update state!
        setUserguess(temp.join(''))
        //move back one spot
        setPos(pos - 1);
    }

    const handleEnter = () =>{
        console.log('enter')
        //need to check if it is a proper word
        //make a separate function for this later

        //need to compare randword to userguess
        console.log('word to guess is ', randword);
        console.log('user guess is ', userguess)

        //did you enter 5 letters?
        if (pos != 5){
            console.log('not enough letters')
            setMessage('not enough letters')
            return;
        }
        //check for a match, game over
        if (randword == userguess){
            console.log('you won!')
            setMessage('You won!')
        }

        let temp = [];  //to create new state
        //loop through each letter of userguess
        for (let i = 0; i < userguess.length; i++){
            console.log(userguess[i])
            //check for position and letter match
            if (userguess[i]==randword[i]){
                temp[i] = "green"
            }
            else if (randword.includes(userguess[i])){
                temp[i] = "yellow"
            }
            else{
                temp[i] = "gray"
            }
            //update state
            setRow1(temp)
            
        }
    }

  return (
    <div className="game-board">
        <div className="word-board">
            <div className="word-row">
                <h3 className={row1[0]}>{userguess[0]}</h3>
                <h3 className={row1[1]}>{userguess[1]}</h3>
                <h3 className={row1[2]}>{userguess[2]}</h3>
                <h3 className={row1[3]}>{userguess[3]}</h3>
                <h3 className={row1[4]}>{userguess[4]}</h3>
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
                <button onClick={handleEnter}>Enter</button>
            {
                keys.slice(19).map((item, index)=><button onClick={handleKey} key={index}>{item}</button>)
            }
            <button onClick={handleDelete}>DEL</button>
            </div>
            <p>{message}</p>

        </div>
    </div>
  )
}

export default Game