import React from 'react'

function WordRow({rowdata}) {
  return (
    <div className="word-row">
        <h3 className={rowdata.lettercss[0]}>{rowdata.userguess[0]}</h3>
        <h3 className={rowdata.lettercss[1]}>{rowdata.userguess[1]}</h3>
        <h3 className={rowdata.lettercss[2]}>{rowdata.userguess[2]}</h3>
        <h3 className={rowdata.lettercss[3]}>{rowdata.userguess[3]}</h3>
        <h3 className={rowdata.lettercss[4]}>{rowdata.userguess[4]}</h3>
                {/* <h3 className={row1[1]}>{userguess1[1]}</h3>
                <h3 className={row1[2]}>{userguess1[2]}</h3>
                <h3 className={row1[3]}>{userguess1[3]}</h3>
                <h3 className={row1[4]}>{userguess1[4]}</h3> */}
    </div>
  )
}

export default WordRow