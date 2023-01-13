import React,{useState}  from  'react';

const Display = (props) => {
        return (
        <div style ={{marginLeft : '40%',marginTop:'60px'}}>
            {
                props.todos.map((todo, index) => {
                    return (
                        <div key={index}>
                            {todo.text}
                            <input  type="checkbox"  checked={todo.completed} onChange={e => props.updatTask(index)}/>
                            <button onClick={ e => props.deleteTask(index)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>

    ); 
}

export default Display;










