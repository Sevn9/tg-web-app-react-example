import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";

function App() {
  const { onToggleButton, tg } = useTelegram();
  useEffect(() => {
    //собщает о том что произошла полная инициализации приложения
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
