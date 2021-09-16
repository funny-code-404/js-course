import { Component } from "react";

class Footer extends Component {
  render() {
    //const { loading } = this.props;
    return (
      
        <footer>            
 <section class="portfolio">
<div class="container">
<h2 className="title ">Наши работы</h2>

<div className="img__container">
<div className="img__line">
<img src={"./img/portfolio/portfolio_1.png"} alt="" className="img__portfolio img__small"/>
<img src={"./img/portfolio/portfolio_2.png"} alt="" className="img__portfolio"/>
</div>

<div className="img__line">
<img src={"./img/portfolio/portfolio_3.png"} alt="" className="img__portfolio img__small"/>
<img src={"./img/portfolio/portfolio_4.png"} alt="" className="img__portfolio"/>
</div>

</div>
</div>
  
  
</section>
         </footer>
      
    );
  }
}
export default Footer;