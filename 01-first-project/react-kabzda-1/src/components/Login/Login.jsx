import React from 'react'

function Login(props) {
   return (
      <div>
         <h1>Log In</h1>
         <form>
            <div>
               <input placeholder={"Login"} />
            </div>
            <div>
            <input placeholder={"Password"} />
            </div>
            <div>
            <input type={"checkbox"} /> remember me
            </div>
            <div>
               <button>Log In</button>
            </div>
         </form>
      </div>
   )
}
export default Login