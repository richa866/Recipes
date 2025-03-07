import "./Cuisine.css";
import Card from "./card";
export default function Cuisine(){
    return(
<>
<div className="Cuisine-wrapper">
    <div className="cuisine-header">
    <h3>What's your fav?</h3>
    <button class="seemore">
see more
  <div class="iconButton">
    <i class="fa-solid fa-arrow-right"></i>
  </div>
</button>
    </div>
    <div className="cuisine-cards">
    <Card name="Indian" link="/indian.png" i={1} />
    <Card name="Mexican" link="/mexican.png" i={2} />
    <Card name="Chinese" link="/chinese.png" i={3} />
    <Card name="Italian" link="/italian.png" i={3} />
    </div>
</div>
</>
    );
}