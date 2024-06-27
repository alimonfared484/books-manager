import { Link, Outlet } from 'react-router-dom';

import './App.css';
import { CURRENTTLINE, FOREGROUND, ORANGE, PURPLE } from './helpers/colors';

function App() {
  return (
    <div className="App pt-4">
      <Link to="/" className='h2' style={{color: FOREGROUND, textDecoration: "none"}}>کتابخانه من</Link>
    <nav className='my-4 pb-4' style={{borderBottom: `1px solid ${CURRENTTLINE}`}}>
      <Link className='mx-5' to="/books" style={{color: PURPLE}}>کتاب ها</Link>
      <Link className='mx-5' to="/about" style={{color: ORANGE}}>درباره ما</Link>
    </nav>
    <Outlet/>
    </div> 
  );
}

export default App;
