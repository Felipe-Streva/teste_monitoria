import './App.css';
import Header from './Components/Header/Header'
import Button from './Components/Button/Button'

function App() {

  const texto = 'Inserindo uma variável no JSX'

  const gerarTexto = (texto) => {
    return (<strong>{texto.toUpperCase()}</strong>)
  }

  const enviarClick = () => {
    console.log('oi')
    alert('oi')

  }


  return (
    <div className="App">
      <Header />
      
      <p>{gerarTexto(texto)}</p>

      <div style={{display: 'flex'}}>

        <Button largura='200px' onClick={enviarClick}>Enviar</Button>
        <Button largura='150px' onClick={()=>alert('cancelado')}>Cancelar</Button>

      </div>


    </div>
  );
}

export default App;
