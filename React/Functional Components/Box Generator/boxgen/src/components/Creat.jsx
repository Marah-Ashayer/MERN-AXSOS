import React  from  'react';

const Creat = (props) => {

    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {
                props.data.map((item, i) => {
                    return (
                        <div key={i}  style={{ backgroundColor: item ,margin: '7px', height: '100px', width: '100px' }}></div>
                    )
                })
            }
        </div>

    ); 
}




export default Creat;










