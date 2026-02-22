import CustomInput from "../../components/input/custom.Input";
//icons

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <form>
          <h2>Login Form</h2>
          <div className="email-input">
            <CustomInput label="Email" type="email" />
          </div>
          <div className="password-input">
            <CustomInput label="Password" type="password" />
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
