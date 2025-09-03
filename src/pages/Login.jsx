import { useNavigate } from 'react-router-dom'

import CustomButton from '../components/CustomButton';
import './Login.scss'
import logo from '../assets/images/logo.png';

const Login = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/')
    }

    return (
        <div className="login-container">
            <img src={logo} alt="NX task manager" />
            <div className="button-container">
                <CustomButton onClick={handleLogin}>Entrar</CustomButton>
            </div>
        </div>
    );
};

export default Login;
