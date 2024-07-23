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









