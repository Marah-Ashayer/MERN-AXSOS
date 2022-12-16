import React,{useState} from  'react';

const Tabs =() => {
    const tabs = [{label : "Tap 1",content: "Tap 1 content is Showing Here"},{label : 'Tap 2',content: 'Tap 2 content is Showing Here'},{label : 'Tap 3', content: 'Tap 3 content is Showing Here'}];
    const [tab , setTab] = useState("");
    const fun1=(e,y)=> {
        setTab(y.content);
    };
    return(
        <div style={{marginTop:'90px'}}>
            {
                tabs.map((item,index)=>{
                    return(<i key={index} onClick={ e => fun1(e,item) } style={{border:'2px solid black',marginLeft : '20px' }}> {item.label} </i>)
            })
        }
        <p style={{border:'2px solid black',width:'900px',height:'60px', marginLeft:'170px'}}>{tab}</p>
        </div>
        
    );
}

export default Tabs;
