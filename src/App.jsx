import React, { useState } from 'react';

const App = ()=>{
    const state = useState();
    const newTime = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(newTime)

    const UpdateTime = ()=>{
        const Time = new Date().toLocaleTimeString();
        setCtime(Time);
    };

    setInterval(UpdateTime, 1000);  

    return (
                <>
                    <div className="addToCart">
                        <h1 className="heading_style">{newTime}</h1>
                    </div>
                </>
            );
    
};


// const App = () => {

//     const state = useState();
//     let newTime = new Date().toLocaleTimeString();
//     const [ctime, setTime] = useState(newTime);

//     const UpdateTime =()=>{
//         let newCTime = new Date().toLocaleTimeString();
//         setTime(newCTime);
//     };
    

//     
// };

export default App;