import React,{useState} from 'react';
import MainPage from './component/MainPage'
import Exo1 from './component/Exo1'
import Exo2 from './component/Exo2'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Exo3 from './component/Exo3';
import Exo4 from './component/Exo4'
import Exo5 from './component/Exo5'
import Exo6 from './component/Exo6'


const App=()=>{ 
  const [Title, setTitle] = useState(
    'this title has been modified'
)
var SwitchTitle=()=>{
  setTitle(
    <h1 style={{backgroundColor:'#f4f4', color:'white'}}>I have been modified</h1>
  )
}

const [type, setType] = useState({
  valueInput: "Unknown",
})
var [switchDiv, setSwitchDiv] = useState({   
  class1:'',
  class2:'',
  clicks:0}
)
var display=()=>{
  
  if (switchDiv.class1 === '') {
    setSwitchDiv({
      class1: '20px',
      class2: '',
      clicks: switchDiv.clicks +1,
    });
  } else if (switchDiv.class1 === '20px') {
    setSwitchDiv({
      class1: '',
      class2: '20px',
      clicks: switchDiv.clicks +1,
    });
  }

};

return(
<Router>
  <h1 style={{textAlign:'center', backgroundColor:'#f2f8', padding:'10px', color:'white'}}>Recap react 7 Exo</h1>
  <div style={{textAlign:'center'}}>
        <Link style={{marginRight: '20px',marginLeft:'20px'}} to="/exo1">exo1</Link>
        <Link  style={{marginRight: '20px',marginLeft:'20px'}} to="/exo2">exo2</Link>
        <Link  style={{marginRight: '20px',marginLeft:'20px'}} to="/exo3">exo3</Link>   
        <Link  style={{marginRight: '20px',marginLeft:'20px'}} to="/exo4">exo4</Link>   
        <Link  style={{marginRight: '20px',marginLeft:'20px'}} to="/exo5">exo5</Link>   
        <Link  style={{marginRight: '20px',marginLeft:'20px'}} to="/exo6">exo6</Link>   
        <Link  style={{marginRight: '20px',marginLeft:'20px'}} to="/exo7">exo7</Link> 
      </div>         
        <Switch>
          <Route exact path="/">
            <MainPage/>
            
          </Route>
        <Route path="/exo1">
        <Exo1 title={Title} SwitchTitle={()=>SwitchTitle()}/>

        </Route>
         <Route path="/exo2">
           <Exo2/> 
         </Route>
         <Route path='/exo3'>
           <Exo3 type={type.valueInput} setType={setType}/>
         </Route>
         <Route path='/exo4'>
           <Exo4 class1={switchDiv.class1} class2={switchDiv.class2} clicks={switchDiv.clicks} display={()=>display()}/>
         </Route>
         <Route path='/exo5'>
           <Exo5/>
         </Route>
         <Route path='/exo6'>
           <Exo6/>
         </Route>
         <Route path='/exo7'>
           <Exo7/>
         </Route>
       </Switch>     </Router>)
}
export default App;
