const LevelBar = ({ level }) => {
  const renderBars = () => {
    const bars = [];
    for (let i = 1; i <= 5; i++) {
      bars.push(
        <div
          key={i}
          className={`h-2 w-11 mr-3 rounded-lg ${
            i <= level ? "bg-retroRed" : "bg-gray-400"
          }`}
        ></div>
      );
    }
    return bars;
  };

  return <div className="flex">{renderBars()}</div>;
};

export default LevelBar;
