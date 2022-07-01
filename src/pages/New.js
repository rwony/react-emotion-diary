import { useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";

const New = () => {
  // 타이틀 변경
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - 새로운 일기 작성`;
  }, []);

  return (
    <div>
      <DiaryEditor />
    </div>
  );
};

export default New;
