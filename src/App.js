import './App.css';
import './styles.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
      </div>  
      <footer>
        <p className="footer">Footer content</p>
      </footer>
    </div>
  );
}

export default App;
