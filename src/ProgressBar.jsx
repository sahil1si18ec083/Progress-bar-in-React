const ProgressBar = ({ progress = 0 }) => {
  return (
    <>
      <div className={"progress-bar"}>
        <div
          className={"progress-fill"}
          style={{ width: `${progress}%` }}
        ></div>
        <p>{`Progress is ${progress}%`} </p>
      </div>
    </>
  );
};

export default ProgressBar;
