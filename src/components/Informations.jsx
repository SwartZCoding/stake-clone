import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import content from '../content';
import { GiCardRandom } from "react-icons/gi"

export default function Informations() {

    return (
        <div className="navbar-color">
            <div className="flex flex-row h-screen items-centerh-screen text-gray-400 text-center ml-3 font-bold text-xl pt-7">
                <GiCardRandom />
                <span className="text-white font-bold text-lg mr-32 ml-2">Casino</span>
            </div>
        </div>
    );
}