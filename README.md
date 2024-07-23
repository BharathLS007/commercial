# commercial









html{
    scroll-behavior: smooth;
}
:root{
    --primary-color: white;
    --text-dark: black;
    --max-width: 1200px;
    --light:white;
    --button-color:rgba(212,24,143);
}

.header__bar{
    padding: .5rem;
    font-size: .8rem;
    text-align: center;
    background-color: var(--text-dark);
    color: var(--light);

}

.section__container{
    max-width: var(--max-width);
    margin: auto;
}
.section_title{
    padding-bottom: .5rem;
    margin-bottom: 4rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-dark);
    position: relative;
}
.section_title::after{
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    height: 3px;
    width: 75px;
    background-color: var(--text-dark);
}

a{
    text-decoration: none;
}
.nav__container{
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav__logo{
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-dark);
}

.nav__links{
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1rem;

}

.link a{
    padding: 0 .5rem;
    font-size: .9rem;
    font-weight: 600;
    color: var(--text-light);
    transition: 0.5s;
}

.link a:hover{
    color: var(--text-dark);

}

.nav__icons{
    display: flex;
    grid: 1rem;

}

.nav__icons span{
    font-size: 1.25rem;
    cursor: pointer;
    padding-left: 30px;
}










////////////////////////////////////////////////////////


    <!----------Nav bar starts here -->

    <div class="header__bar">Summer Sale For All Suits And Free Express Delivery -OFF 50%!
    </div>
    <nav class="section__container nav__container">
      <a href="#" class="nav__logo">Exclusive</a>
      <ul class="nav__links">
        <div class="link"><a href="#Home">Home</a></div>
        <div class="link"><a href="contact.html">Contact</a></div>
        <div class="link"><a href="about.html">About</a></div>
        <div class="link"><a href="form.html">Sign up</a></div>
      </ul>
      <div class="nav__icons">
        <span><i class='bx bx-heart'></i></span>
        <span><i class='bx bx-cart' ></i></span>
      </div>
    </nav>
    
    <hr width="100%" size="2">
    
    <!----------Nav bar starts ends here -->

    <footer class="footer">
      <div class="container">
          <div class="footer-section">
              <h3>Exclusive</h3>
              <p>Subscribe</p>
              <p>Get 10% off your first order</p>
              <form action="#" class="subscribe-form">
                  <input type="email" placeholder="Enter your email">
                  <button type="submit">&gt;</button>
              </form>
          </div>
          <div class="footer-section">
              <h3>Support</h3>
              <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
              <p><a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a></p>
              <p>+88015-88888-9999</p>
          </div>
          <div class="footer-section">
              <h3>Account</h3>
              <ul>
                  <li><a href="#">My Account</a></li>
                  <li><a href="#">Login / Register</a></li>
                  <li><a href="#">Cart</a></li>
                  <li><a href="#">Wishlist</a></li>
                  <li><a href="#">Shop</a></li>
              </ul>
          </div>
          <div class="footer-section">
              <h3>Quick Link</h3>
              <ul>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms Of Use</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Contact</a></li>
              </ul>
          </div>
          <div class="footer-section">
              <h3>Download App</h3>
              <p>Save $3 with App New User Only</p>
              <div class="app-links">
                  <a href="#"><img src="./img/qr.png" alt="Google Play"></a>
              </div>
              <div class="social-links">
                  <a href="#"><i class='bx bxl-facebook'></i></a>
                  <a href="#"><i class='bx bxl-twitter' ></i></a>
                  <a href="#"><i class='bx bxl-instagram' ></i></a>
                  <a href="#"><i class='bx bxl-linkedin' ></i></a>
              </div>
          </div>
      </div>
      <div class="footer-bottom">
          <p>&copy; Copyright @ 2024. All rights reserved</p>
      </div>
  </footer>


//////////////////////////////////////




/* Footer CSS */
.footer {
    background-color: #000;
    padding: 20px 0;
   
}

.container {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.footer-section {
    flex: 1;
    margin: 0 10px;
}

.footer-section h3 {
    font-size: 18px;
    margin-bottom: 10px;
}

.footer-section p  {
    color: #fff;
    font-size: 14px;
    margin-bottom: 5px;
    text-decoration: none;
    list-style: none;
}
.footer-section a {
    color: #fff;
    font-size: 14px;
    margin-bottom: 5px;
    text-decoration: none;
    list-style: none;
}

.footer-section a:hover {
    text-decoration: underline;
}

.subscribe-form {
    display: flex;
    margin-top: 10px;
}

.subscribe-form input {
    padding: 5px;
    flex: 1;
    border: none;
    outline: none;
    font-size: 14px;
}

.subscribe-form button {
    padding: 5px 10px;
    background-color: var(--light);
    border: none;
    color:var(--text-dark);
    cursor: pointer;
}

.footer-bottom {
    text-align: center;
    padding: 10px 0;
    border-top: 1px solid #333;
    margin-top: 20px;
    color:var(--light);
}

.app-links img, .social-links img {
    width: 50px;
    margin-right: 10px;
}

.social-links {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
}

  .footer__col p:hover {
    color:  var(--light);
  }
  
  .footer__col p i {
    font-size: 1rem;
    margin-right: 0.5rem;
  }
  
  .instagram__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
  
  .footer__bar {
    padding: 2rem 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 2rem;
  }
  
.copyright{
    text-align: center;
}




