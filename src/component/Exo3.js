import React from 'react'

const Exo3=(props)=>{
    var handleChange=(event)=>{
        props.setType({ 
            valueInput: event.target.value}

        )
    }
    return(
        <div>
            <div style={{backgroundColor:'#f4f4',}}>
                <h1>Welcome {props.type} </h1>
                <p>White on the input to change the value of the unknown here above in the title to the name you wrote in the input </p>
                <input value={props.type} onChange={handleChange}  type="text"/>
            </div>
        </div>
    )
}


export default Exo3