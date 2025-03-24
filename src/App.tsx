import './App.css';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <div className='app'>
        <main className='content gap-5 flex flex-col'>
          <TopBar />
          <Home />
        </main>
      </div>
    </>
  );
}

export default App;
