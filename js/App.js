import style from "./styles/style.js"
import Setting from "./settings/Setting.js"

import Auth from "./auth/Auth.js"
import Header from "./components/Header.js"
import Main from "./components/Main.js"
 import FlyBall from "./components/FlyBall.js"


const App =()=>{

    document.getElementById( 'root' ).textContent = ''
    
    Setting()
    style()
    Auth()
    Header()
    Main()
    FlyBall()
}

export default App
 