import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Approutes from './routes';
import { useState,useEffect } from 'react';


function AppContent() {
  const location = useLocation();
  const [mobile,setmobile] = useState(window.innerHeight > window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setmobile(window.innerHeight > window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App" style={mobile ? {paddingTop: "4em"} : {paddingTop: "6em"}}>
      <Header titles={["Home","Quem somos", "Contato"]} path={location.pathname} mobile={mobile} redirects={["https://mail.google.com","https://www.instagram.com/makesoftsolutions/","https://www.linkedin.com/in/makesoft-solutions-824693272"]}/>
      <Approutes mobile={mobile}/>
      <Footer mobile={mobile}/>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
