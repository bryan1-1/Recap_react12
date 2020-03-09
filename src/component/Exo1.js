import React from 'react'

const Exo1 =(props)=>{


    return(
       <div style={{textAlign:'center'}}>
           <div>
    {props.title}
           </div>
           <div>
               <p>by clicking on the button below you are able to change the title properties and style</p>
               <button onClick={props.SwitchTitle}> Switch atributes</button>
           </div>
       </div>
    )



}



export default Exo1