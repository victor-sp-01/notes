import Auth from "./auth/Auth.js"

import Header from "./components/Header.js"
import Main from "./components/Main.js"

const App =()=>{
    document.getElementById( 'root' ).textContent = ''   

    Auth()
    Header()
    Main()
}

export default App
 