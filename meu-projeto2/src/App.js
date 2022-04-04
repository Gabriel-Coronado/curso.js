import logo from './logo.svg';
import './App.css';
import Frase from './components/Frase';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Eventos from './components/Eventos';
import Form from './components/Form';
function App() {
  const nome = 'Maria'
  return (
    <div className="App">
      <h1>Testando CSS</h1>
    <Frase/><br></br>
    <SayMyName nome="Gabriel"/> <br></br>
    <SayMyName nome='Pedro' /><br></br>
    <SayMyName nome={nome} /><br></br>
    <Pessoa nome='Gabriel' idade='24anos' profissao='Dev.'  foto='https://via.placeholder.com/150' /><br></br>
    <List/>
   

    <h1>Testando Eventos</h1>
    <Eventos />
    <Form/>

    </div>
    
  );
}

export default App;
