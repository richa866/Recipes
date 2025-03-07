import "./RecpCard.css";
export default function RecpCard({dish,link,description,author}){
    return(

        <div class="repcard">
            <div class="card-image">
                <img src={link} alt={dish} />
            </div>
            <div class="category"> {dish} </div>
            <div class="description">{description}
                <div class="author"> By <span class="name">{author}</span> 4 days ago</div>
            </div>
        </div>
        
    );

}