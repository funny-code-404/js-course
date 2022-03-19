import React from "react";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import BlockOne from "./components/BlockOne";
import BlockTwo from "./components/BlockTwo";
import BlockThree from "./components/BlockThree";
import Socials from "./components/Socials";
import MiniLogo from "./components/MiniLogo";
import Copyright from "./components/Copyright";
import {
  blockOneH2first,
  blockOneH3first,
  blockOneH2second,
  blockOneH3second,
} from "./components/BlockOne/constants";
import {
  blockTwoH4first,
  blockTwoH5first,
  blockTwoH4second,
  blockTwoH5second,
} from "./components/BlockTwo/constants";
import {
  blockThreeH6first,
  blockThreePfirst,
  blockThreeH6second,
  blockThreePsecond,
  blockThreeH6third,
  blockThreePthird,
} from "./components/BlockThree/constants";
import { copyrightText } from "./components/Copyright/constants";
import "./App.css";

// ШАБЛОН ВЗЯТ ТУТ: https://www.figma.com/file/ZdsrACnscbM2hvB7pNOXd8/Sainte-Marie?node-id=1%3A199

class App extends React.Component {
  render() {
    return (
      <div className="mainWrapper">
        <div className="header">
          <Logo />
          <Menu />
        </div>
        <div className="firstBlocksWrapper">
          <BlockOne
            blockOneH2={blockOneH2first}
            blockOneH3={blockOneH3first}
            className="firstBlockOne"
          />
          <BlockOne
            blockOneH2={blockOneH2second}
            blockOneH3={blockOneH3second}
            className="secondBlockOne"
          />
        </div>
        <div className="secondBlocksWrapper">
          <BlockTwo
            blockTwoH4={blockTwoH4first}
            blockTwoH5={blockTwoH5first}
            className="firstBlockTwo"
          />
          <BlockTwo
            blockTwoH4={blockTwoH4second}
            blockTwoH5={blockTwoH5second}
            className="secondBlockTwo"
          />
        </div>
        <div className="thirdBlocksWrapper">
          <BlockThree
            blockThreeH6={blockThreeH6first}
            blockThreeP={blockThreePfirst}
            className="thirdBlockOne"
          />
          <BlockThree
            blockThreeH6={blockThreeH6second}
            blockThreeP={blockThreePsecond}
            className="thirdBlockTwo"
          />
          <BlockThree
            blockThreeH6={blockThreeH6third}
            blockThreeP={blockThreePthird}
            className="thirdBlockThree"
          />
        </div>
        <Socials />
        <MiniLogo />
        <Copyright>{copyrightText}</Copyright>
      </div>
    );
  }
}

export default App;
