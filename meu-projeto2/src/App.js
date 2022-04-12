import logo from './logo.svg';
import './App.css';
import Frase from './components/Frase';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Eventos from './components/Eventos';
import Form from './components/Form';
import Condicional from './components/Condicional';
import ListRend from './components/ListRend';
import SeuNome from './components/SeuNome';
import {useState} from 'react'
import Saudacao from './components/Saudacao';

function App() {
  const nome = 'Maria'

  const meusItens = ['React','Vue','Angular']

  const [name, setName] = useState()

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


    <h1>Renderização Condicional</h1>
    <Condicional/>

    <h1>Renderização de Listas</h1>
    <ListRend itens={meusItens}/>
    <ListRend itens={[]}/>

    <h1>State Lift</h1>
    <SeuNome setName={setName} />
    <Saudacao name={name} />
    </div>
    
  );
}

export default App;
