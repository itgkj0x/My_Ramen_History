import './App.css'
import { useState, useEffect } from 'react';
import CountView from './components/CountView';
import HistoryView from './components/HistoryView';
import Editer from './components/Editer';

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

  // 保存・インポート時
  const handleSave = (
    newData: { shop: string; date: string; rating: string } | { shop: string; date: string; rating: string }[]
  ) => {
    if (Array.isArray(newData)) {
      setHistory(newData);
      localStorage.setItem('data', JSON.stringify(newData));
    } else {
      const newHistory = [...history, newData];
      setHistory(newHistory);
      localStorage.setItem('data', JSON.stringify(newHistory));
    }
  };

  // 削除時
  const handleDelete = (index: number) => {
    const newHistory = history.filter((_, i) => i !== index);
    setHistory(newHistory);
    localStorage.setItem('data', JSON.stringify(newHistory));
    // window.location.reload(); ←不要
  };

  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet" />
      <CountView history={history} />
      <Editer onSave={handleSave} />
      <HistoryView history={history} onDelete={handleDelete} />
    </>
  )
}

export default App
