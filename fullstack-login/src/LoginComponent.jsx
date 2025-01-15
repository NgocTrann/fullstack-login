import TextComponent from "./TextComponent";

function LoginComponent() {
    return(
        <>
            <div className="login">
                <TextComponent componentName = "Email" presetText = "Enter Your Email Here: " ></TextComponent>
                <TextComponent componentName = "Password" presetText = "Enter Your Password Here: " ></TextComponent>
                <button className="loginButton"> Log In</button>
                <button className="newAccount"> Create New Account </button>

            </div>
        </>
    )
}

export default LoginComponent;