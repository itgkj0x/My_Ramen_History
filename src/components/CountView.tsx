import { useEffect, useState } from "react";
import Emoji from "./Emoji";
import dayjs from "dayjs";

function CountView() {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) {
      try {
        const history: { date: string }[] = JSON.parse(data);
        if (history.length > 0) {
          // 最新の日付を取得
          const latest = history
            .map((item) => item.date)
            .sort((a, b) => dayjs(b).unix() - dayjs(a).unix())[0];
          const diff = dayjs().diff(dayjs(latest), "day");
          setDays(diff);
        } else {
          setDays(null);
        }
      } catch {
        setDays(null);
      }
    } else {
      setDays(null);
    }
  }, []);

  return (
    <p className="text-5xl my-12 flex">
      {days === 0 ? (
        <>
          今日ラーメンを食べました <Emoji />
        </>
      ) : (
        <>
          ラーメンに行ってから
          <strong>{days !== null ? `${days}日` : "--日"}</strong>
          が経過しました <Emoji />
        </>
      )}
    </p>
  );
}

export default CountView;
