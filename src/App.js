import { useEffect } from "react";
import "./App.css";

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    //собщает о том что произошла полная инициализации приложения
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };
  return (
    <div className="App">
      work
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
