import "./Footer.css";
export default function Footer(){
    return(
        <footer>
        <div class="footer-container">
            <div class="footer-links">
                <a href="#">Help</a>
                <a href="#">Contact Us</a>
                <a href="#">Terms and Privacy</a>
            </div>
            <div class="footer-social">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
            </div>
            <div class="footer-copy">
                <p>&copy; 2025 Recipie. All rights reserved.</p>
            </div>
        </div>
      </footer>
    );
   
}