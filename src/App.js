
import './app.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

import Home from './pages/home/Home';


function App() {
  return (
    <div className='app'>
        <Navbar/>
        <div className="container">
          <Home />

          <Sidebar/>
        </div>
        
    </div>
        
  
       
    
  );
}

export default App;
