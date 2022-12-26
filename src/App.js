import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
// import SchemeProvider from './components/god-component/SchemeProvider'
// import GodComponent from './components/god-component/Base'
import Provider from './pokeapi/Provider'
import Index from './pokeapi/index'

function App() {
  return (
    <Provider>
      <Index />
    </Provider>
  );
}

export default App;
