import React from 'react'

const Styling = (props) => {
  return (
    <div>
        <p style={{color:props.col1 , background: props.col2}}>The Word is : {props.word}</p>
    </div>
  )
}

export default Styling
