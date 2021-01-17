import React from 'react';
import content from '../content';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Navigation() {
    return (
        <div className="navbar-color">
            <div className="flex items-center justify-between w-10/12 mx-auto py-5 text-white font-dosis">
                    <LazyLoadImage src={content.header.logo}/>

            <div onClick={event => window.open("https://discord.gg/7FhT8J85Z3")} className="w-4 mr-0">
                <LazyLoadImage src={content.header.profile}/>
            </div>
            </div>
        </div>
    );
}