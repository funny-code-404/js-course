import { Component } from "react";

class Main extends Component {
  render() {
     const {mainText} = this.props;

    return (
      

<main className="main ">
    <section className="about-us">
      <div className="container__small">


        <div className="about__wrapper">
        <h2 classNameName="title">{mainText.title}</h2>
          <div className="about__group">
            <img src={"./img/about_us.png"} alt="about us" className="img__about"/>

            <div className="about__container-for-text">
          
<p classNameName="paragraph ">
          {mainText.subtitle_first}
        </p>
            
              <p classNameName="paragraph">
          
          {mainText.subtitle_second}
          </p>
            </div>
          </div>




        </div>

      </div>
      <div className="about__statistics">
        <div className="container statistics__container">
          <div className="statistic__container">
            <h3 className="statisic__text statistic__amount">5</h3>
            <h3 className="statisic__text statistic__criteria">лет опыта</h3>

          </div>

          <div className="statistic__container">
            <h3 className="statisic__text statistic__amount">100</h3>
            <h3 className="statisic__text statistic__criteria">проектов</h3>

          </div>

          <div className="statistic__container">
            <h3 className="statisic__text statistic__amount">10</h3>
            <h3 className="statisic__text statistic__criteria">наград</h3>
          </div>


        </div>
      </div>
     
    






</section>
      </main>





    );
  }
}
export default Main;

/* import { Component } from "react";

className Main extends Component {
  render() {
    const { data } = this.props;
    return (
      
        <main>{
        data.map((item) =>{
          return <li key={item.id}>
            <h2>
              {item.title}
            </h2>
            <p>
            {item.text}
            </p>
          </li>
        })}</main>
      
    );
  }
}
export default Main; */
