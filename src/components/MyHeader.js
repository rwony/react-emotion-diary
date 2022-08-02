const MyHeader = ({ headText, leftChild, rightChild }) => {
  return (
    <header>
      <div className="head_btn_left">{leftChild}</div>
      <div className="head_text">
        <strong>{headText}</strong>
      </div>
      <div className="head_btn_right">{rightChild}</div>
    </header>
  );
};

export default MyHeader;
