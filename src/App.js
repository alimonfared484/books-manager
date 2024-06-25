import { Link, Outlet } from 'react-router-dom';

import './App.css';
import { CURRENTTLINE, ORANGE, PURPLE } from './helpers/colors';

function App() {
  return (
    <div className="App">
      <h1 className='mt-5'>کتابخانه من</h1>
    <nav className='my-4 pb-4' style={{borderBottom: `1px solid ${CURRENTTLINE}`}}>
      <Link className='mx-5' to="/books" style={{color: PURPLE}}>کتاب ها</Link>
      <Link className='mx-5' to="/about" style={{color: ORANGE}}>درباره ما</Link>
    </nav>
    <Outlet/>
    </div> 
  );
}

export default App;
