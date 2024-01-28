import { Button, TextField } from "@mui/material";
import logo from "../assets/ChatArea.png";
function LogIn(){
    return <div className="login-container">
        <div className="image-container">
            <img src={logo} alt= "Logo" className="welcome-logo" />
        </div>
        <div className="login-box">
            <p className="login-text">LogIn to your account</p>
            <TextField id="standard-basic" label="Enter UserName" variant="outlined"></TextField>
            <TextField id="outlined-password-input" label="Password"  type="password" autoComplete="current-password"></TextField>
            <Button variant="outlined">LogIn</Button>
        </div>
    </div>
}
export default LogIn;