import { useContext, useEffect, useState } from "react";

import MyHeader from "./../components/MyHeader";
import MyButton from "./../components/MyButton";
import DiaryList from "./../components/DiaryList";
import { DiaryStateContext } from "../App";

const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  // 날짜
  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime(); // 이번 년도, 이번 월의 1일의 시간 값을 구함

      // const lastDay = new Date(
      //   curDate.getFullYear(),
      //   curDate.getMonth() + 1,
      //   0
      // ).getTime(); // 이번 년도, 이번 월의 마지막 날의 시간 값을 구함
      // 하지만 위와 같은 방법으로 구하면 마지막 일의 00시 00분 00초까지 밖에 못 함
      // >>> 마지막 일자에 쓴 글은 나타나지 않음
      // 따라서 아래와 같이 다음 달의 1일의 00시 00분 00초를 구한 후,
      // 아래 filter 비교문에서 걸러준다.

      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        1
      ).getTime(); // 이번 년도, 다음 월의 첫 날의 시간 값을 구함

      setData(
        diaryList.filter((it) => firstDay <= it.date && it.date < lastDay)
      );
    }
  }, [diaryList, curDate]);

  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
        rightChild={<MyButton text={">"} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;
