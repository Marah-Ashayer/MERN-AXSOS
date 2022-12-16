import React, { useState } from  'react';


    const BoxForm = (props) => {
        const [color, setColor] = useState("");
        const [allcolors , setAllColors]=useState([]);

    const handlesubmit = (e) => {
        e.preventDefault();
        setColor(color);
        props.fun([...allcolors,color]);
        setAllColors([...allcolors,color]);

    };
    
    return(
        <>
        <form onSubmit={ handlesubmit }>
            <div>
                <label>Color: </label> 
                <input type="text" onChange={(e) => setColor(e.target.value)} />
            </div>
            <input type="submit" value="Add" />
        </form>
        <hr></hr>
        </>
);
}
export default BoxForm;