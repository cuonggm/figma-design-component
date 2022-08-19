import logo from './logo.svg';
import './App.css';
import {CButton, COutlinedButton} from "./common-components/CButton";

function App() {
    return (
        <div>
            <CButton label={"Click me"} onClick={() => {
                alert("Clicked")
            }}/>
            <COutlinedButton label={"Click me"} onClick={() => {
                alert("Clicked")
            }}/>
        </div>
    );
}

export default App;
