import "bootstrap/dist/css/bootstrap.css";
import './App.css';


function App(props) {
   
  return (
      <div className="alert alert-warning" role="alert">
        {console.log(props.text)}
        <h5>{props.text}</h5>
      </div>
  )
}
export default App;