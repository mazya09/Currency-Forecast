import { useEffect } from 'react';
import './App.css';
import FormEmail from './FormEmail';

function App() {
  function waitTwoSeconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Прошло 2 секунды");
      }, 2000);
    });
  }

  async function run() {
    console.log("Ждём...");
    const result = await waitTwoSeconds();
    console.log(result); 
  }

  useEffect(() => {
    run();
  }, []);

  return (
    <div>
      Открой консоль — через 2 секунды появится "Прошло 2 секунды"
      <FormEmail/>
    </div>
  );
}

export default App;
