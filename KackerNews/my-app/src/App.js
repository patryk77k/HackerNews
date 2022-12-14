import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {

 

  return (
    <div className="App">
      <div className="Wrapper">
      <div className="Header">
        <Header />
      </div>
      <div className="Main">
        <Main />
      </div>
      <div className="Footer">
        <Footer />
      </div>
      </div>



    </div>
  );
}

export default App;