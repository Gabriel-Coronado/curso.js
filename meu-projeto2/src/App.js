import logo from './logo.svg';
import './App.css';
import Frase from './components/Frase';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {
  const nome = 'Maria'
  return (
    <div className="App">
      <h1>Testando CSS</h1>
    <Frase/><br></br>
    <SayMyName nome="Gabriel"/> <br></br>
    <SayMyName nome='Pedro' /><br></br>
    <SayMyName nome={nome} /><br></br>
    <Pessoa nome='Gabriel' idade='24anos' profissao='Desenvolvedor'  foto='https://via.placeholder.com/150' />
    <List/>
    </div>
    
  );
}

export default App;
