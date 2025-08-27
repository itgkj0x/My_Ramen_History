import Emoji from "./Emoji"

function CountView() {
  return (
    <>
    <p className="text-5xl my-12 flex">
        ラーメンに行ってから
        <strong>
            10日
        </strong>
        が経過しました
        <Emoji />
    </p>
    </>
  )
}

export default CountView
