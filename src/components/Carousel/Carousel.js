
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

 export default function DemoCarousel () {

        return (
            <>
            <Carousel width={"30%"} >
                <div>
                    <img src={"https://www.deccanchronicle.com/h-upload/2024/02/24/1076897-ezgif-4-00c5c2b0b6.webp"}  />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={"https://www.deccanchronicle.com/h-upload/2024/02/24/1076897-ezgif-4-00c5c2b0b6.webp"}  />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={"https://www.deccanchronicle.com/h-upload/2024/02/24/1076897-ezgif-4-00c5c2b0b6.webp"}/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </>
        );
    }


// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));