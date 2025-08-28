// function Emoji() {
//   return (
//     <>
//       <p>😊</p>
//     </>
//   );
// }

// export default Emoji;

// Emoji.tsx
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Tooltip from "@mui/material/Tooltip";

function Emoji() {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) {
      try {
        const history: { date: string }[] = JSON.parse(data);
        if (history.length > 0) {
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

  let icon = "❓";
  let label = "履歴が見つかりません";

  if (days === null) {
    icon = "❓";
    label = "履歴が見つかりません";
  } else if (days < 3) {
    icon = "🍜";
    label = `最近食べたね（余裕）`;
  } else if (days < 7) {
    icon = "🙂";
    label = `まだ大丈夫`;
  } else if (days < 14) {
    icon = "😢";
    label = `そろそろ行っておいたほうが良いかも`;
  } else {
    icon = "😭";
    label = `禁断症状（至急ラーメン）`;
  }

  return (
    <Tooltip title={label} arrow enterDelay={200}>
      <span
        aria-label={label}
        role="img"
        className="inline-block align-middle cursor-help"
      >
        {icon}
      </span>
    </Tooltip>
  );
}

export default Emoji;
