import React from 'react'

const Word = (props) => {
    return (
    <div>
        {isNaN(props.word)? <p>The Word is : {props.word}</p> : <p>The Number is : {props.word}</p>} 
    </div>
  )
}

export default Word
