import './index.css'
import './App.css'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import DarkMode from "./DarkMode";


function App() {

  const isLogin = false
  
  if(!isLogin){
    return(
     <div className="App">
      <header className="App-header">
          <Login/>
     
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <br></br>
        <DarkMode />
      </header>
    </div>
    )
  }
  else{
    return(<Dashboard/>)
  }
  

}



export default App