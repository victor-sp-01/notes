import style from "./styles/style.js"
import Setting from "./settings/Setting.js"
import { getLocalStorage } from "./api/apiLocalStorage.js"

import Auth from "./auth/Auth.js"
import Header from "./components/Header.js"
import Main from "./components/Main.js"
import FlyBall from "./components/FlyBall.js"


const App =()=>{
    document.getElementById( 'root' ).textContent = ''
    const [ { auth = false } ] = JSON.parse( getLocalStorage( 'auth', '[{}]' )  ) 

    Setting()
    style()
    Auth()
    auth && Header()
    Main()
    auth && FlyBall()
  
}

export default App
 