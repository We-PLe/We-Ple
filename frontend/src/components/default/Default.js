import logo from "../../logo.svg";
import {useNavigate} from 'react-router-dom';

function Default() {
    const navigate = useNavigate();

    const goToPage = (domain) => () => {
        navigate(domain);
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <div>
                    <button onClick={goToPage('/main')}>Main</button>
                    <button onClick={goToPage('/map')}>Map</button>
                </div>
            </header>
        </div>
    );
}

export default Default;