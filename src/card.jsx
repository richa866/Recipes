 import "./card.css";
export default function Card({name,link,i}){
   console.log("card printed");
        return(
            <>
            <div className={` card card-${i}`} style={{ backgroundImage: `url(${link})` }}>
    <div class="overlay"></div>
    <p>{name}</p>
    </div>
            </>
        );
    

}