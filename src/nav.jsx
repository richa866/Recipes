import "./Nav.css";

export default  function Nav(){
    return(
        <>
        <div className="nav">
            <div className="nameCont">
                <h1 className="site">SAVORLY</h1>
            </div>
            <div className="navOpt">
                <p>Home</p>
                <p>Cuisines</p>
                <p>Receipies</p>
                <p>Blog</p>
                <button className="Log">Log in</button>
        </div>
        </div>
        </>
    );
}