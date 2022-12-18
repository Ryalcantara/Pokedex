import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import SchemeProvider from './components/god-component/SchemeProvider'
import GodComponent from './components/god-component/Base'

function App() {
  return (
    <SchemeProvider>
      <GodComponent />
    </SchemeProvider>
  );
}

export default App;
