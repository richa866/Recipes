import "./blog.css"
import BlogCard from "./BlogCard";
export default function Blog(){
    return(
      <div className="blog-wrapper">
    <div class="blog-header">
      <h2> Secrets, stories, and recipes</h2>
      <button class="create">
Create a blog
  <div class="iconButton">
  <i class="fa-solid fa-plus"></i>
  </div>
</button>
    </div>
        <div className="blog-section">
 <BlogCard title="Why is sugarcane sweet?" linkP="/profile1.png" name="Billa Sahani" linkF="/biryani.png"/>
 <BlogCard title="Why is pav bhaji teekha?" linkP="/profile2.png" name="Billi Sahani" linkF="/indian.png"/>
 <BlogCard title="Why is food tasty ?" linkP="/profile3.png" name="Billomal Sahani" linkF="/cake.png"/>
</div>
</div>
        
    );

}