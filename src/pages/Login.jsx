import CustomButton from '../components/CustomButton';
import './Logo.scss'
import logo from '../assets/logo.png';

const Login = () => {
    return (
        <div className="login-container">
            <img src={logo} alt="NX task manager" />
            <h1>Login</h1>
            <div className="button-container">
                <CustomButton>Entrar</CustomButton>
            </div>
        </div>
    );
};

export default Login;
