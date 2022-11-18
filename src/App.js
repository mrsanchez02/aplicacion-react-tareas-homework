import './App.css';
import ListaDeTareas from './components/ListaDeTareas';
import talendigLogo from './images/logo_talendig.png'

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='talendig-logo-contenedor'>
        <img 
          src={talendigLogo}
          alt=''
          className='talendig-logo' />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
