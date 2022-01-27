import { Component } from "react";
import { contentText,contentHeader } from "../constants";
import { Headline } from '../headline/headline';
import { Button } from "../button/button";
import { DivContentBlock } from "../divBlock/divBlock";
import { contentDiv } from "../constants";
export class Content extends Component{
    render(){
        return <main className="main">
        <section className="container">
             <Headline LineText='OUR STORY'/>
             <article className="container__cnt">
                <div className="container__cnt-text">
                    <p>{contentText[0]}</p> 
                    <p>{contentText[1]}</p>
                </div>
                <div className="container__cnt-image">
                    <div className="cnt-image__item plan">{contentHeader[0]}</div>
                    <div className="cnt-image__item manage">{contentHeader[1]}</div>
                    <div className="cnt-image__item build">{contentHeader[2]}</div>
                </div>
                </article>
                <article>
                    <Headline LineText='OUR CAPABILITIES'/>
                    <p className="content__text">{contentText[2]}</p>
                    <Button Text='ALL SERVICES'/>
                </article>
                <article>
                    <DivContentBlock data={contentDiv[0]} />
                    <DivContentBlock data={contentDiv[1]} />
                    <DivContentBlock data={contentDiv[2]}/>
                </article>
        </section>
       

        </main>
    }
}