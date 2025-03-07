import "./BlogCard.css";

export default function BlogCard({title,linkP,name,linkF}) {
  return (
    <article className="blog-post">
        <div className="blog-container">
      <div className="post-content">
        <h3>{title}</h3>
        <img src={linkF} alt="Author" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit laborum debitis tenetur sapiente explicabo?
          Dolorem velit 
        </p>
      </div>
      <div className="post-meta">
        <time dateTime="2020-03-16">Mar 16, 2020</time>
      </div> 
      <div className="author-info">
      <img src={linkP} alt="Author" />
        <div className="author-details">
          <p>
            <a href="#">{name}</a>
          </p>
          <i class="fa-solid fa-heart"></i>
        </div>
      </div>
      </div>
    </article>
  );
}