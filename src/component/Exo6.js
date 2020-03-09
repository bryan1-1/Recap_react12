import React,{useState} from 'react'

const Exo6 =()=>{
    const [numbers, setNumbers] = useState(
        [0,1,2,3,4,5,6,7,8,9],
    )
    const [Oper, setOper] = useState(
        ['+','-','*','/']

    )
    const [Equation, setEquation] = useState(
        ''
    )
    const [Result, setResult] = useState(
        ''
    )
    const ResultEquation =()=>{
        
        var answer = Result
        var question = Equation
        answer=eval(question)
        setResult(answer)
        setEquation(question)
    }

    var btnCLick =(el)=>{
        var display = Equation
        display=display+el
        console.log(el)
        setEquation(display
        )
    }
    var Operator =(el)=>{
        var display= Equation
        display= display+el
        setEquation(display)
    }
    var Clear =()=>{
        var cleared = Equation
        cleared = ''
        setEquation(cleared)
    }

    return(
        <div>
            <h1>Calculator</h1>
            <p>basic calculator using react type whatever number you want AND CALCULATE</p>
            <p>the result is {Result} </p>
            <p>equation : {Equation} </p>
            <div>
                {numbers.map((el,i)=>{
                    return( 
                    <button onClick={()=>btnCLick(el)} key={i}>{numbers[i]}</button>)
                })}
            </div>
            <div>
                {Oper.map((el,i)=>{
                    return(
                        <button onClick={()=>Operator(el)} key={i}>{Oper[i]}</button>
                    )
                })}

                <button onClick={()=>Clear()}>C</button>
                <button onClick={()=>ResultEquation()}>=</button>
            </div>
        </div>
    )
}


export default Exo6