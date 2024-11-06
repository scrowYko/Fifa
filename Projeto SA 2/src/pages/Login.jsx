import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../css/login.css'

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");

  useEffect(() => {
    setEmailUser(localStorage.getItem("email"));
    setPasswordUser(localStorage.getItem("senha"));
  }, []);

  const submitLogin = () => {
    if (email == emailUser && senha == passwordUser) {
      sessionStorage.setItem("isLoggedOn", "true");
      navigate("/");
      console.log("funcionou");
    } else window.alert("Senha ou Email incorretos");
  };
  return (
    <>
      <div className="signBox">
        <div className="signLogoBox">
          <img className="signLogo" src="fifa.svg" alt="Logo" id="logo" />
        </div>
        <div className="caixa">
          <h1>Log-in</h1>
          <form>
            <input
              type="text"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Digite sua senha"
              onChange={(e) => setSenha(e.target.value)}
              value={senha}
            />
          </form>
          <p
            className="signinEsquecer"
            onClick={() => navigate("/RecuperarSenha")}
          >
            Esqueci a Senha
          </p>
          <button
            className="signinEntrar"
            type="submit"
            onClick={() => submitLogin()}
          >
            Entrar
          </button>
          <p className="signinCadastro" onClick={() => navigate("/Cadastro")}>
            Não tem conta? Cadastre-se
          </p>
        </div>
      </div>
    </>
  );
}
