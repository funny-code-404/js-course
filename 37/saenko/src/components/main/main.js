import { Component } from 'react';
import Section from "./sections/section";
import './main.css';

class Main extends Component {
    render () {
        return (
            <main>
                <Section className="visiting" title="virtual tour" id="visiting" />
            </main>
        );
    }
}

export default Main;