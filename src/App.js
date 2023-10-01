import { useEffect } from "react";
import "./App.css";
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    //собщает о том что произошла полная инициализации приложения
    tg.ready();
  }, []);

  return <div className="App">work</div>;
}

export default App;
