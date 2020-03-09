import React,{useState} from 'react'

const Exo5=()=>{
    const [Image, setImage] = useState(
        ''
    )
    const [Contain, setContain] = useState([])
    const ImageAdd=()=>{
        var pic = Image
        var all = Contain
        pic = <img src="" alt=":C"/>
        all.push(pic)
        console.log(Contain);
        
        setImage(pic)
        setContain(all)
    }
    const ImageRemove=()=>{
        var im = [...Contain]
        im.shift()
        setContain(im)
        
    }
    const clear =()=>{
        var clearing=Contain
        clearing=[]
        setContain(clearing)
    }
    return(
        <div style={{backgroundColor: '#f4f' }}>
        <div>
            <h1>popping images</h1>
            <p>Click on the button below to pop images in the div </p>
        </div>
        <button onClick={()=>ImageAdd()}>pop image</button>
        <button onClick={()=>ImageRemove()}>Remove image</button>
        <button onClick={()=>clear()}>Clear all</button>
        {Contain.map((el,i)=>{
            return(
                <div key={i}>
                    <img src="" alt=":C"/>
                </div>
            )
        })}
        


        </div>
    )
}


export default Exo5