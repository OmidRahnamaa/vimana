import './App.css';
import Wrapper from './HOC/Wrapper';
import Home from './Components/Pages/Home/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Wrapper className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
