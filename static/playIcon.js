// playIcon.js — DunbunMod static loader (NO THINKING MODE)

const playIcon = "/static/play.png";

export default playIcon;
import playIcon from "./playIcon";

export default function PlayButton() {
  return (
    <img 
      src={playIcon} 
      alt="Play Project" 
      style={{ width: "64px", height: "64px" }}
    />
  );
}
