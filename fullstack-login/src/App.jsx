import LoginComponent from "./LoginComponent";

function App() {

  return (
    <>
    <div className="container">
      <div className="leftBlock">
        <div className="textWrapper">
          <h1 className = "leftText" id="title"> Login Application </h1>
          <h2  className = "leftText" id ="info"> Create an account to securely save your information and enjoy easy, fast access whenever you need it. </h2>
        </div>

      </div>
      <div className="rightBlock">
          <LoginComponent></LoginComponent>
      </div>
    </div>
    </>
  )
}

export default App
