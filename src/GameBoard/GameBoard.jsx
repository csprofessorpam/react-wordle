import React, {useState} from 'react'
import './GameBoard.css'
import WordRow from '../WordRow/WordRow'


function GameBoard() {

    //data for state needs to be an array for 6 rows
    //each row has userguess-string and lettercss-array
    const[gamedata, setGamedata] = useState([
        {
            userguess: "_____",
            lettercss:["", "", "", "", ""]
        },
        {
            userguess: "_____",
            lettercss:["", "", "", "", ""]
        },
        { 
            userguess: "_____",
            lettercss:["", "", "", "", ""]
        },
        {
            userguess: "_____",
            lettercss:["", "", "", "", ""]
        },
        {
            userguess: "_____",
            lettercss:["", "", "", "", ""]
        },
        {
            userguess: "_____",
            lettercss:["", "", "", "", ""]
        }
    ])

    //pick a word
    const [randword, setRandword] = useState("EXILE")
    const [message, setMessage] = useState('')
    const [gameover, setGameover] = useState(false)
    
    //set up keyboard
    const keydata = ["Q", "W", "E", "R", "T", "Y",
            "U", "I", "O", "P", "A", "S", "D", "F", "G", 
            "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
    const [keys, setKeys] = useState(keydata);

    const [pos, setPos] = useState(0)
    const [row, setRow] = useState(0)

    const handleKey = (e) =>{
        setMessage('');

        console.log('key', e.target.textContent)
        console.log('row is ', row)
        console.log('pos is ', pos)
        console.log(gamedata[row].userguess)
        
        let temp;
        // //need to replace the letter at row[pos] with this letter
        //cannot modify a position in a string so
        //make array of characters
        temp = gamedata[row].userguess.split('')
        console.log('temp', temp)
        

        // //change the letter at pos
        temp[pos] = e.target.textContent;
        console.log(temp.join(''));
        //update state
        //first make a temp copy
        const newGamedata = [...gamedata];
        //update the data on row
        newGamedata[row] = {
            ...newGamedata[row],
            userguess: temp.join('')
        }
        //update state
        setGamedata(newGamedata)


        // setUserguess(temp.join(''))
        //move to next position
        setPos(pos+1)
    }

    const handleEnter = () =>{
        console.log('enter')
        //need to check if userguess is a proper word
        //make a separate function for this later
        
        //need to compare randword to userguess
        console.log('word to guess is ', randword);
        console.log('user guess is ', gamedata[row].userguess)
        let checkword = gamedata[row].userguess;

        //did you enter 5 letters?
        if (pos != 5){
            console.log('not enough letters')
            setMessage('not enough letters')
            return;
        }
        //check for a match, game over
        if (randword == checkword){
            console.log('you won!')
            //need to set everything green
            let temp = ['green', 'green', 'green', 'green', 'green']
            //update state
            //create a copy
            const newGamedata = [...gamedata];
            newGamedata[row] = {...newGamedata[row], lettercss:temp}
            setGamedata(newGamedata)
            setMessage('You won!')
            return;
        }

        let temp = [];  //to create new state
        

        //loop through each letter of checkword
        for (let i = 0; i < checkword.length; i++){
            console.log(checkword[i] + " and " + randword[i])
            //check for position and letter match
            if (checkword[i]==randword[i]){
                // temp[i] = "green"
                temp.push('green')
            }
            else if (randword.includes(checkword[i])){
                // temp[i] = "yellow"
                temp.push('yellow')
            }
            else{
                // temp[i] = "gray"
                temp.push('gray')
            }      
        }
        console.log('temp is now', temp)

        //update state
        //create a copy
        const newGamedata = [...gamedata];
        newGamedata[row] = {...newGamedata[row], lettercss:temp}
        setGamedata(newGamedata)

        //need to start back at first letter
        setPos(0);
        //need to go to next row
        setRow(row+1)

    }

    const handleDelete = () =>{
        console.log('del', pos)
        //blank out previous spot
        let temp = gamedata[row].userguess.split('');
        console.log(temp)
        //change the previous letter
        temp[pos-1] = "_";
        console.log(temp.join(''));
        //update state on [row]
        //first make a temp copy
        const newGamedata = [...gamedata];
        //update the data on row
        newGamedata[row] = {
            ...newGamedata[row],
            userguess: temp.join('')
        }
        //update state
        setGamedata(newGamedata)
        //move back one spot
        setPos(pos - 1);

    }

  return (
    <div className="game-board">
        <div className="row-container">
            {
                gamedata.map(item=><WordRow rowdata={item}/>)
            }
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
            <h2>{message}</h2>

        </div>
    </div>
  )
}

export default GameBoard