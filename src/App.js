import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Parent from "./components/Parent";
import ThemeProvider from 'react-bootstrap/ThemeProvider'





function App() {
  return (
    <div >
      {/* <header className="App-header"></header> */}
    <ThemeProvider 
    
    >
      <Parent ></Parent>
    </ThemeProvider>
    </div>
  );
}

export default App;
