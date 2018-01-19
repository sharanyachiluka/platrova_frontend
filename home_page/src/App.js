import React from 'react';


class App extends React.Component {
  render() {
    return (
      <body>
        
        <header>
          <div className="container">
            <div className="row clearfix" id="home">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="logo">
                  <h1> <a href="#"><img src="images/TMPS000136.png" alt="" /></a> </h1>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="contact">
                  <p>Questions? Call us Toll-free!<span className="number"><a href="#">1800-0000-7777</a></span><span className="time">(11AM to 11PM)</span></p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="saction1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="menu">
                  <div className="mobile-nav-container"> </div>
                  <div className="mobile-nav-btn"><img className="nav-open" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/6214/nav-open.png" alt="Nav Button Open" /> <img className="nav-close" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/6214/nav-close.png" alt="Nav Button Close" /> </div>
                  <nav>
                    <ul>
                      <li><a href="#home">Home</a></li>
                      <li><a href="#resturant">Popular Restaurants </a></li>
                      <li><a href="#contact">Contact</a></li>
                    </ul>
                  </nav>
                </div>
                <div className="login">
                  <ul>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="backgraound">
          <div className="container" >
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="back">
                  <div className="line1 os-animation" data-os-animation="rotateInDownLeft" data-os-animation-delay="1s"> </div>
                  <div className="line2 os-animation" data-os-animation="rotateInDownLeft" data-os-animation-delay="1s"> </div>
                  <h1 className="os-animation" data-os-animation="zoomIn" data-os-animation-delay="1s">PLATROVA</h1>
                  <h3 className="os-animation" data-os-animation="zoomIn" data-os-animation-delay="0.50s">PLATROVA</h3>
                  
                  <div className="line3 os-animation" data-os-animation="rotateInDownRight" data-os-animation-delay="1s"> </div>
                  <div className="line4 os-animation" data-os-animation="rotateInDownRight" data-os-animation-delay="1s"> </div>
                  <h2 className="os-animation" data-os-animation="zoomIn" data-os-animation-delay="0.50s">Network of over 5000 Restaurants</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="textbox os-animation" data-os-animation="zoomIn" data-os-animation-delay="0.5s">
                <h3>Location Name</h3>
                <input type="text" placeholder="Secunderabad" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="textbox os-animation" data-os-animation="zoomIn" data-os-animation-delay="0.5s">
                <h3>Restaurant Name</h3>
                <input type="text" placeholder="Swagath Grand" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="textbox1 os-animation" data-os-animation="zoomIn" data-os-animation-delay="0.5s">
                <h3>Cuisine Name</h3>
                <input type="text" placeholder="Chicken Biriyani" />
                <span className="search"><a href="#"><i className="fa fa-search"></i></a></span> </div>
            </div>
          </div>
        </section>
        <section className="saction3">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="ordaring">
                  <h2 className="os-animation" data-os-animation="zoomIn" data-os-animation-delay="0.50s">Ordering food was never so easy</h2>
                  <div className="dotted os-animation" data-os-animation="bounceInLeft" data-os-animation-delay="1s"></div>
                  <p className="os-animation" data-os-animation="zoomIn" data-os-animation-delay="0.50s">Just 4 stap follow</p>
                  <div className="dotted1 os-animation" data-os-animation="bounceInRight" data-os-animation-delay="1s"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6">
                <figure className="step os-animation" data-os-animation="fadeInLeft" data-os-animation-delay="0.50s"> <img src="images/one.png" alt="" /> </figure>
                <div className="arrow" > <img src="images/arrow.png" alt="" /> </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <figure className="step os-animation" data-os-animation="fadeInLeft" data-os-animation-delay="1.5s"> <img src="images/two.png" alt="" /> </figure>
                <div className="arrow1 "> <img src="images/arrow.png" alt="" /> </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <figure className="step os-animation" data-os-animation="fadeInLeft" data-os-animation-delay="2.5s"> <img src="images/thrww.png" alt="" /> </figure>
                <div className="arrow"> <img src="images/arrow.png" alt="" /> </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <figure className="step1 os-animation" data-os-animation="fadeInLeft" data-os-animation-delay="3.5s"> <img src="images/four.png" alt="" /> </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="saction4">
          <div className="container" id="offer">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="dotted3 os-animation" data-os-animation="bounceInLeft" data-os-animation-delay="1s"></div>
                <div className="special">
                  <h2 className="os-animation" data-os-animation="bounceInDown" data-os-animation-delay="0.50s">Special Offer</h2>
                  <div className="dotted4 os-animation" data-os-animation="bounceInRight" data-os-animation-delay="1s"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="slider clearfix os-animation" data-os-animation="fadeInDown" data-os-animation-delay="0.20s">
                <div className="img clearfix"> <img src="images/002.png" alt="" /> </div>
                <div className="title clearfix">
                  <h3>Olister Combo<br />
                    pack lorem</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
                  <a href="#">GRAB IT &#10152;</a> </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="slider clearfix os-animation" data-os-animation="fadeInDown " data-os-animation-delay="0.50s">
                <div className="img"> <img src="images/003.png" alt="" /> </div>
                <div className="title">
                  <h3>Olister Combo<br />
                    pack lorem</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
                  <a href="#">GRAB IT &#10152;</a> </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="slider clearfix os-animation" data-os-animation="fadeInDown" data-os-animation-delay="1s">
                <div className="img"> <img src="images/oo1.png" alt="" /> </div>
                <div className="title">
                  <h3>Olister Combo<br />
                    pack lorem</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
                  <a href="#">GRAB IT &#10152;</a> </div>
              </div>
            </div>
          </div>
        </section>
        <section className="saction5">
          <div className="container" id="resturant">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="restaurants">
                <h3 className="os-animation" data-os-animation="rollIn" data-os-animation-delay="1s">Top Restaurant </h3>
              </div>
              <div className="dotted6 os-animation" data-os-animation="bounceInRight" data-os-animation-delay="0.50s"></div>
              <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-8 col-xs-6">
                  <figure className="rest os-animation" data-os-animation="fadeInDown" data-os-animation-delay="1s"> <a href="#"><img src="images/pizzhut.png" alt="" /> </a> </figure>
                </div>
                <div className="col-lg-6 col-md-8 col-sm-8 col-xs-6">
                  <figure className="rest os-animation" data-os-animation="fadeInDown" data-os-animation-delay="1.2s"> <a href="#"> <img src="images/SUB.png" alt="" /></a></figure>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-8 col-xs-6" >
                  <figure className="rest os-animation" data-os-animation="fadeInDown" data-os-animation-delay="1.4s"> <a href="#"> <img src="images/KFC.png" alt="" /></a> </figure>
                </div>
                <div className="col-lg-6 col-md-8 col-sm-8 col-xs-6">
                  <figure className="rest os-animation" data-os-animation="fadeInDown" data-os-animation-delay="1.6s"> <a href="#"><img src="images/papjohns.png" alt="" /></a> </figure>
                </div>
              </div>


              <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-8 col-xs-6">
                  <figure className="rest os-animation" data-os-animation="fadeInDown" data-os-animation-delay="1.8s"> <a href="#"><img src="images/dominos.png" alt="" /></a> </figure>
                </div>
                <div className="col-lg-6 col-md-8 col-sm-8 col-xs-6">
                  <figure className="rest os-animation" data-os-animation="fadeInDown" data-os-animation-delay="2s"> <a href="#"><img src="images/barista.png" alt="" /></a> </figure>
                </div>
              </div>
            </div>


            <div className="col-lg-8 col-md-8 col-sm-8">
              <div className="food">
                <h3 className="os-animation" data-os-animation="rollIn" data-os-animation-delay="2.5s">Top Cuisines</h3>
              </div>
              <div className="dotted7 os-animation" data-os-animation="bounceInRight" data-os-animation-delay="2.8s"></div>
              <div className="food1">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <figure className="food os-animation" data-os-animation="fadeInDown" data-os-animation-delay="3s"> <img src="images/pizz.png" alt="" />
                      <div className="order"> <a href="#">Cuisine Name</a> </div>
                    </figure>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <figure className="food os-animation" data-os-animation="fadeInDown" data-os-animation-delay="3.2s"> <img src="images/burgar.png" alt="" />
                      <div className="order"> <a href="#">Cuisine Name</a> </div>
                    </figure>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <figure className="food os-animation" data-os-animation="fadeInDown" data-os-animation-delay="3.4s"> <img src="images/donelt.png" alt="" />
                      <div className="order"> <a href="#">Cuisine Name</a> </div>
                    </figure>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <figure className="food os-animation" data-os-animation="fadeInDown" data-os-animation-delay="3.6s"> <img src="images/sup.png" alt="" />
                      <div className="order"> <a href="#">Cuisine Name</a> </div>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="food1">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <figure className="food os-animation" data-os-animation="fadeInDown" data-os-animation-delay="3.8s"> <img src="images/checken.png" alt="" />
                      <div className="order"> <a href="#">Cuisine Name</a> </div>
                    </figure>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <figure className="food os-animation" data-os-animation="fadeInDown " data-os-animation-delay="4s"> <img src="images/passta.png" alt="" />
                      <div className="order"> <a href="#">Cuisine Name</a> </div>
                    </figure>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <figure className="food os-animation" data-os-animation="fadeInDown" data-os-animation-delay="4.2s"> <img src="images/bhel.png" alt="" />
                      <div className="order"> <a href="#">Cuisine Name</a> </div>
                    </figure>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <figure className="food os-animation" data-os-animation="fadeInDown " data-os-animation-delay="4.4s"> <img src="images/past.png" alt="" />
                      <div className="order"> <a href="#">Cuisine Name</a> </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="saction6">
          <div className="container">
            <div className="row bg os-animation" data-os-animation="flash" data-os-animation-delay="1s">
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="images">
                  <h3 className="os-animation">Enjoy Exclusive Food <br />
                    Order any of these</h3>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2">
                <div className="point">
                  <p><span>&#10152;</span><a href="#"> Party Order</a></p>
                  <p><span>&#10152;</span><a href="#">Home Made Food</a></p>
                  <p><span>&#10152;</span><a href="#">Diet Food</a></p>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-5">
                <figure className="imgs"> <img src="images/abc.png" alt="" /> </figure>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2">
                <div className="button"> <a href="#">Order Now</a> </div>
              </div>
            </div>
          </div>
        </section>
        <section className="saction7">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4  col-xs-12">
                <figure className="service os-animation" data-os-animation="fadeInDown" data-os-animation-delay="1s"> <img src="images/plan.png" alt="" /> </figure>
                <div className="det os-animation" data-os-animation="fadeInDown" data-os-animation-delay="1.3s">
                  <h3>100% Service Guarantee </h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4  col-xs-12">
                <figure className="service os-animation" data-os-animation="fadeInDown" data-os-animation-delay="1.5s"> <img src="images/mak.png" alt="" /> </figure>
                <div className="det os-animation" data-os-animation="fadeInDown" data-os-animation-delay="1.8s">
                  <h3>100% Service Guarantee </h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <figure className="service os-animation" data-os-animation="fadeInDown" data-os-animation-delay="2s"> <img src="images/kljj.png" alt="" /> </figure>
                <div className="det os-animation" data-os-animation="fadeInDown" data-os-animation-delay="2.3s">
                  <h3>100% Service Guarantee </h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="saction8">
          <div className="container" id="contact">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="site">
                  <h3>Site Link</h3>
                </div>
                <div className="sitelink">
                  <ul>
                    <li> <span>&#10152;</span><a href="#">About Us</a></li>
                    <li><span>&#10152;</span><a href="#">Contact Us</a></li>
                    <li><span>&#10152;</span><a href="#">Privacy Policy</a></li>
                    <li><span>&#10152;</span><a href="#">Terms of Use</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="site">
                  <h3>Site Link</h3>
                </div>
                <div className="sitelink">
                  <ul>
                    <li> <span>&#10152;</span><a href="#">About Us</a></li>
                    <li><span>&#10152;</span><a href="#">Contact Us</a></li>
                    <li><span>&#10152;</span><a href="#">Privacy Policy</a></li>
                    <li><span>&#10152;</span><a href="#">Terms of Use</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="follow">
                  <h3>Follow Us On...</h3>
                </div>
                <div className="social">
                  <ul>
                    <li> <i className="fa fa-facebook-square"></i><a href="#">Facebook</a></li>
                    <li><i className="fa fa-twitter-square"></i><a href="#">Twitter</a></li>
                    <li><i className="fa fa-linkedin-square"></i><a href="#">Linkedin</a></li>
                    <li><i className="fa fa-google-plus-square"></i><a href="#">Google Plus</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="submit">
                  <h3>Subscribe Newsletter</h3>
                  <p>To get latest updates and food deals
                  every week</p>
                </div>
                <div className="submitbox">
                  <input type="text" />
                  <div className="sub"> <a href="#">Submit</a> </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <footer className="saction9">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="email">&copy; All right reserved 2014  /  FoodFinder </div>
                <p className="freetemplates">Free Template by <a href="http://freetemplates.pro/">FreeTemplates.pro</a></p>
              </div>
            </div>
          </div>
        </footer>
        <script type="text/javascript" src="js/sidemenu.js"></script>
      </body>
    );
  }
}

export default App;
