import React, { useEffect, useState } from "react";

function HistoryView() {
  const [history, setHistory] = useState<
    { shop: string; date: string; rating: string }[]
  >([]);

  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) {
      try {
        setHistory(JSON.parse(data));
      } catch {
        setHistory([]);
      }
    }
  }, []);

  return (
    <>
      <div id="cont">
      <table id="history">
        <thead>
          <tr>
            <th scope="col">お店</th>
            <th scope="col">日付</th>
            <th scope="col">評価</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, idx) => (
            <tr key={idx}>
              <td>{item.shop}</td>
              <td>{item.date}</td>
              <td>{item.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default HistoryView;
