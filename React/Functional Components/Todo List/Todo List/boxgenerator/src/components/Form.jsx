import React, { useState } from  'react';

const Form = (props) => {
    
        const [todo, setTodo] = useState("");

        const fun1=(e)=>{
            setTodo({
                // id : props.todos.length,
                text:e.target.value,
                completed : false,
            })
        }

        const handlesubmit = (e) => {
            e.preventDefault();
            props.myfun(todo);
        };
        return(
            <>
            <form onSubmit={handlesubmit } style ={{marginLeft : '40%',marginTop:'60px'}}>
                <div><label>Todo: </label> 
                    <input type="text" onChange={fun1} /></div>
                <div><input type="submit" value="Add" /></div>
            </form>
            <hr></hr>
            </>
        );
}
export default Form;