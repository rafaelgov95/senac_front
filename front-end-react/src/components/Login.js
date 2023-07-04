import "../css/login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-form">
        <h2>Página de Login</h2>
        <form>
          <input type="text" placeholder="Usuário" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
