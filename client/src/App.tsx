import { GlobalStyle } from './styles/global';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import UserProvider from './context/User';

function App() {
  return (
    <div className="App">
      <UserProvider>
      <BrowserRouter>        
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
