import React from 'react'

const Exo4 =(props)=>{

return(
    <div>
        <div>
            <h1>swicth elements from places</h1>
            <p>the red cube switches from one blue box to the other when clicking on the button the other 
                button keeps in check the amount of clicks
            </p>
        </div>
        <div style={{display: 'flex'}}>
            <div style={{backgroundColor:'#f4f', padding:'150px',margin: '10px' }}>
                <div style={{ backgroundColor: '#888' ,padding:`${props.class1}`}} ></div>
            </div>
            <div style={{backgroundColor: '#f4f', padding:'150px',margin: '10px'}}>
            <div style={{padding:`${props.class2}`,backgroundColor: '#888'}}></div>
                

            </div>

            

        </div>
<button>{props.clicks}</button>
        <button onClick={props.display}>Switch</button>
    </div>
)



}


export default Exo4