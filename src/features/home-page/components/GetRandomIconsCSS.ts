function getRandomDegree() {
  return Math.floor(Math.random() * 360);
}

function getRandomPercentLeftBetween() {
  const first = Math.floor(Math.random() * 25);
  const second = Math.floor(Math.random() * 20) + 72;
  return Math.random() > 0.5 ? first : second;
}

function getRandomPercentLeft() {
  return Math.floor(Math.random() * 85) + 5;
}

function getRandomPercentTop() {
  return Math.floor(Math.random() * 75) + 5;
}

export default function logoClass(width = "3%", left="normal", delay: number): React.CSSProperties {
  return {
    width: `${width}`,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    left: `${left === "between" ? getRandomPercentLeftBetween() : getRandomPercentLeft()}%`,
    top: `${getRandomPercentTop()}%`,
    transform: `rotate(${getRandomDegree()}deg)`,
    animationDelay: `${delay}s`
  };
}
