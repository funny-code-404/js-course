import { Component } from 'react';
import './section.css';

class Section extends Component {
   
    render () {
        return (
            <section className="section--padding">
                <div className="wrapper">
                <h2 className="section__title title--beige title--margin">{this.props.title}</h2>
                 <hr className="section__line" />
                 <div className="content">{this.props.content}</div>
                </div>
            </section>
        );
    }
}

export default Section;