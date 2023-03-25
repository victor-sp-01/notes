import App from "../App.js"
import srcApi from "../helpers/srcApi.js"
import { setData } from "../api/apiData.js"
import { validateEmail } from "../helpers/inputsLogin.js"

const Register =()=>{
    document.getElementById( 'root' ).innerHTML = `
        <main class="main" id="main" >
            <div class="div__kwxAo scrollbarY" >
                <form class="form__602XV" autocomplete="off" >
                    <div class="div__CfpYT" >
                        <span class="span__BThGf" >Email is already exist</span>
                        <button type="button" class="button__QgKFK" id="btnCloseMessage" ><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <h3 class="title__bZa1V" >Sing up</h3>
                    <label class="label__UHfty" for="ipt__cj8faa5" >
                        <span class="span__gpD3m" >email</span>
                        <input type="text" class="input__4ZO1I" value="" id="ipt__cj8faa5" name="email" title="">
                        <span class="span__0uBLC" ></span>
                    </label>
                    <label class="label__UHfty" for="ipt__6ZIXnqg" >
                        <span class="span__gpD3m" >password</span>
                        <input type="password" class="input__4ZO1I" value="" id="ipt__6ZIXnqg" name="password" title="" autocomplete="off">
                        <span class="span__0uBLC" ></span>
                    </label> 
                    <label class="label__UHfty" for="ipt__7ZIXnqg" >
                        <span class="span__gpD3m" >repeat password</span>
                        <input type="password" class="input__4ZO1I" value="" id="ipt__7ZIXnqg" name="password2" title="" autocomplete="off">
                        <span class="span__0uBLC" ></span>
                    </label> 
                    <button type="submit" class="button__yv4SV" > register </button>

                    <div class="div__fst1a" >
                        <a href="#recover-password" class="a__HKzGO" >forgot password¿?</a>
                        <a href="#login" class="a__g1IdQ">signin</a> 
                    </div>
                </form>
            </div>
        </main>`

        const message = document.querySelector( '.div__CfpYT' ) 
        const element = document.querySelector( '.form__602XV' ) 

        const inputError =( input, text )=>{
            const message = input.nextElementSibling
            message.classList.add( 'error' )
            message.textContent = text
            input.classList.remove( 'error' )
            setTimeout(()=> input.classList.add( 'error' ))
        }

        element.btnCloseMessage.addEventListener( 'click', ()=> message.classList = 'div__CfpYT' )

        element.addEventListener( 'input', (e)=>{ 

            if( e.target.value.length === 0 ) { if( e.target.classList.contains( 'focus' ) ) e.target.classList.remove( 'focus' ) }
            else { if( !e.target.classList.contains( 'focus' ) ) e.target.classList.add( 'focus' ) }

            if( e.target.classList.contains( 'error' ) ) (e.target.classList.remove( 'error' ), e.target.nextElementSibling.classList.remove( 'error' ) )
        })

        element.addEventListener( 'submit', (e)=>{
            e.preventDefault()
    
            const email     = validateEmail( element.email )
    
            if( email[0] === false ) return inputError( element.email, email[ 1 ] ) 
            if( element.password.value.length < 6 ) return inputError( element.password, 'constraseña al menos de 6 caracteres' )
            if( element.email.value === element.password.value ) return inputError( element.password, 'the email and password cannot be the same' ) 
            if( element.password.value !== element.password2.value ) return inputError( element.password2, 'las contraseñas no son las mismas' )
    
    
            setData( new FormData( element ), srcApi( 'auth/register' ) )
            .then( resp => {
                if( resp ) return ( localStorage.setItem( 'auth', JSON.stringify( [ resp ] ) ), App() )  
                message.classList.contains( 'message' ) ? ( message.classList.remove( 'error' ), setTimeout( ()=> message.classList.add( 'error' ) ) ) : message.classList.add( 'message' )
            })  
        })

        element.ipt__cj8faa5.select()
}

export default Register