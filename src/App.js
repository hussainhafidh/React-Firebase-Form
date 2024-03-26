import logo from './logo.svg';
import './App.css';
import ContactForm from './components/contactForm';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
    {/* <div className="App"> */}
      <ContactForm/>
    {/* </div> */}
    </Router>
  );
}

export default App;
