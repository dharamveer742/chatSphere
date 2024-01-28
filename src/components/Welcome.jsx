import logo from "../assets/chatArea.png";
function Welcome(){
    return <div className="welcome-container">
        <img src={logo} alt="Logo" className="welcome-logo" />
        <p>View and text directly to people present int chat rooms</p>
    </div>
}

export default Welcome;