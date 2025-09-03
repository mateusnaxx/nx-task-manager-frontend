import {useNavigate} from 'react-router-dom'

import CustomButton from "./CustomButton";
import "./Sidebar.scss";
import logo from "../assets/images/logo.png";

const Sidebar = () => {
    const navigate = useNavigate()

    const handlesignOut = () => {
        navigate('/login')
    }

    return (
        <div className="sidebar-container">
            <div className="logo">
                <img
                    src={logo}
                    alt="NX Task Manager"
                    sizes="100vw, 181px"
                />
            </div>
            <div className="signout">
                <CustomButton onClick={handlesignOut}>
                    Sair
                </CustomButton>
            </div>
        </div>
    );
};

export default Sidebar;
