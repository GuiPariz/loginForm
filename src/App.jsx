import { login } from "./utils";
import "./index.css";
import { useState } from "react";

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
//  OK - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
//  Ok - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
//  Ok - Desabilite o botão de Login equanto você está executando o login.
//  todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
//  todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [requesting, setRequesting] = useState(false)
  const [error, setError] = useState(null)

  const submitReject = email.length === 0 || password.length < 6 || requesting  

  const handleEmail = (event)=>{
    const value = event.target.value
    setEmail(value)
  }

  const handlePassword = (event)=>{
    const value = event.target.value
    setPassword(value)
  }

  const Submit = ()=>{

    setRequesting(true)

    const user = {email: email, password: password}
    login(user)
    .then(()=>{
      console.log('success')
      setError(null)
    })
    .catch((error)=>{
      console.log(error)
      setError(error)
    })
    .finally(()=>{
      setRequesting(false)
    })
  }

  return (
    <div className="wrapper">
      <div className="login-form">
        <h1>Login Form 🐞</h1>
        {error && <div className="errorMessage">{error.message}</div>}
        <div className="row">
          <label htmlFor={"email"}>Email</label>
          <input id={"email"} type={"email"} autoComplete="off" value={email} onChange={handleEmail} />
        </div>
        <div className="row">
          <label htmlFor={"password"}>Password</label>
          <input id={"password"} type={"password"} value={password} onChange={handlePassword}/>
        </div>
        <div className="button">
          <button onClick={Submit} disabled={submitReject} >Login</button>
        </div>
      </div>
    </div>
  );
}
