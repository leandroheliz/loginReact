import React, {useState} from "react";
import './login.css';
import Title from "./components/title/title";
import Label from "./components/label/label";
import Input from "./components/input/input";

const Login = () =>{

const [ user, setUser ] = useState('');
const [ password, setPassword] = useState('');
const [ passwordError, setPasswordError ] = useState(false);
const [ isLogin, setIsLogin ] = useState(false);
const [ hasError, setHasError ] = useState(false);
function handleChange(name, value){
  if(name === 'usuario'){
    setUser(value);
    setHasError(false);
  }else{
    if(value.length < 6 ){
      setPasswordError(true);
      setHasError(false);
     
    }else{
      setPasswordError(false);
      setPassword(value);
      setHasError(false);
    }
  }
};

function ifMatch(param){
  if(param.user.length > 0 && param.password.length > 0){
    if(param.user === 'leandro' && param.password === "112233"){
     const { user, password } = param;
      let ac = { user, password }
      let account = JSON.stringify(ac);
      localStorage.setItem('account', account);
      setIsLogin(true);
    }else{
      setIsLogin(false);
      setHasError(true);
    }
  }else{
    setIsLogin(false);
    setHasError(true);
  }
}

function handleSubmit(){
  let account = { user, password }
  if(account){
  ifMatch(account);
  }
}

  return(
    <div className='login-container'>
      { isLogin ? 
     <div className='home-container'>
     <h1>
       ¡Bienvenido {user}!
     </h1>
     </div>
       :
        <div className='login-content'>
      <Title text='¡Bienvenido al Sitio!'/>
    {hasError &&
      <label className='label-alert'>Su Usuario o Contraseña son Incorrectos.</label>
    }
      <Label text='Usuario'/>
      <Input
      attribute={{
        id: 'usuario',
        name: 'usuario',
        type: 'text',
        placeholder: 'Ingrese su usuario'
      }}
      handleChange={handleChange}
      /> <br/>
      <Label text='Contraseña'/>
      <Input
      attribute={{
        id: 'contraseña',
        name: 'contraseña',
        type: 'password',
        placeholder: 'Ingrese su contraseña'
      }}
      handleChange={handleChange}
      param={passwordError}
      />
      {passwordError && 
      <label className='label-error'>
        Contraseña inválida o incompleta
      </label>}
      <br/>
      <button className='boton-btn' onClick={handleSubmit}>
        Ingresar
        </button>
        </div>
         }
    </div>

  )
};

export default Login;