import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Default from './components/default/Default';
import Main from './components/main/Main';
import MapMain from './components/map/MapMain';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Default/>}/>
                <Route path="/main" element={<Main/>}/>
                <Route path="/map" element={<MapMain/>}/>
            </Routes>
        </Router>
    );
}

export default App;
