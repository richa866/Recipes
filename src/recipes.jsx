import RecpCard from "./RecpCard"
import "./recipe.css";
export default function Recipie(){
    return(
        <>
    <div className="recipe-wrapper" >
        <div className="recipeCard-header">
            <h3>Find the recipes you crave!</h3>
        </div>
<div className="recipie-cards" style={{ display: "flex", padding: "2rem" ,justifyContent:"space-around"}}>
        <RecpCard dish="Biryani" link="/biryani.png" description="This ia indian dish" author="Richa"/>
        <RecpCard dish="Ice Cream" link="/icecream.png" description="This ia indian dish" author="Richa"/>
        <RecpCard dish="Cake" link="/cake.png" description="This ia indian dish" author="Richa"/>
        </div>
        </div>
        </>
    )
}