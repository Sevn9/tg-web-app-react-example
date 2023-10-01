import { useEffect } from "react";
import "./App.css";

function App() {
  const tg = window.Telegram.WebApp;
  useEffect(() => {
    //собщает о том что произошла полная инициализации приложения
    tg.ready();
  }, []);

  return <div className="App">work</div>;
}

export default App;
