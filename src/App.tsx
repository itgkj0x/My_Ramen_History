import './App.css'
import CountView from './components/CountView'
import HistoryView from './components/HistoryView'
import Editer from './components/Editer'
import { useState, useEffect } from 'react'

function App() {
  const [history, setHistory] = useState<{ shop: string; date: string; rating: string }[]>([]);

  // 初回マウント時にlocalStorageから取得
  useEffect(() => {
    const data = localStorage.getItem('data');
    if (data) {
      try {
        setHistory(JSON.parse(data));
      } catch {
        setHistory([]);
      }
    }
  }, []);

  // 保存時に呼び出す関数
  const handleSave = (newItem: { shop: string; date: string; rating: string }) => {
    const newHistory = [...history, newItem];
    setHistory(newHistory);
    localStorage.setItem('data', JSON.stringify(newHistory));
  };

  return (
    <>
      <CountView />
      <Editer onSave={handleSave} />
      <HistoryView history={history} />
    </>
  )
}

export default App
