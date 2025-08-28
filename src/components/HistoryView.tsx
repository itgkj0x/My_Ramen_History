import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

function HistoryView({
  history,
  onDelete,
}: {
  history: { shop: string; date: string; rating: string }[];
  onDelete: (index: number) => void;
}) {
  if (history.length === 0) {
    return (
      <div id="cont">
        <p style={{ color: '#fff', fontSize: '1.3rem', margin: '2em' }}>
          記録がありません
          <br />
          「追加」ボタンから記録を追加しよう！
        </p>
      </div>
    );
  }

  return (
    <>
      <div id="cont">
        <table id="history">
          <thead>
            <tr>
              <th scope="col">お店</th>
              <th scope="col">日付</th>
              <th scope="col">評価</th>
              <th scope="col">編集</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, idx) => (
              <tr key={idx} id="lists">
                <td>{item.shop}</td>
                <td>{item.date}</td>
                <td>
                  <Rating
                    name={`rating-${idx}`}
                    value={Number(item.rating)}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                </td>
                <td>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => onDelete(idx)}
                  >
                    削除
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default HistoryView;
