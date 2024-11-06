import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/RecuperarSenha.css";

export default function EsqueciSenha() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [emailUser, setEmailUser] = useState("");

  useEffect(() => {
    setEmailUser(localStorage.getItem("email"));
  }, []);

  const alterarSenha = () => {
    password == confirm && email == emailUser
      ? localStorage.setItem("senha", password)
      : alert("As senhas não coincidem");
  };

  return (
    <>
      <div className="signBox">
        <div className="signLogoBox">
          <img className="signLogo" src="fifa.svg" alt="Logo" id="logo" />
        </div>
        <div className="caixa">
          <h1>Esqueci a Senha</h1>
          <form onSubmit={alterarSenha}>
            <input
              type="text"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <input
              type="password"
              placeholder="Digite sua nova senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <input
              type="password"
              placeholder="Confirme sua nova senha"
              onChange={(e) => setConfirm(e.target.value)}
              value={confirm}
              required
            />
            <button type="submit" className="forgotEntrar">
              Enviar
            </button>
          </form>
          <p onClick={() => navigate("/Login")} className="forgotVolta">
            Voltar para o Login
          </p>
        </div>
      </div>
    </>
  );
}
