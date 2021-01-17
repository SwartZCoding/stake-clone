import React from 'react';
import { BiStar } from "react-icons/bi"

export default function Header() {
    return (
        <div className="home-color">
            <div className="h-screen">

                <h1 className="text-white text-center font-bold text-xl pt-7">Content de vous revoir, SwartZ</h1>
                <h2 className="vip-text text-center text-lg pt-2">Votre Progression VIP</h2>

                <div className="h-4 overflow-hidden mt-5">
                    <div className="w-10/12 h-full rounded-3xl bg-gray-600 z-0 mx-auto relative"></div>
                    <div className="w-10/12 h-full rounded-3xl progress-bar z-10 mx-auto relative"></div>
                </div>
                <div className="flex flex-row items-center justify-between mx-16">
                <h3 className="mt-3 text-white text-sm font-bold">Aucun</h3>
                    <div className="flex flex-row items-center stars-color">
                           <div className="w-full h-full mt-auto font-bold"><BiStar/></div>
                        <h4 className="mt-3 text-white text-sm font-bold">Bronze</h4>
                    </div>
                </div>
                <div className="vip-text text-center ml-auto mr-auto text-xs pt-5 justify-center overflow-hidden w-9/12">
                <span>Suivez votre progression jusqu'au sommet de notre programme VIP pour gagner des avantages exclusifs.</span>
                </div>
            </div>
        </div>
    );
}