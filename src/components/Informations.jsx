import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import content from '../content';
import {GiCardRandom} from "react-icons/gi"
import {IoBasketball} from "react-icons/io5"

export default function Informations() {

    return (
        <div className="navbar-color h-screen h-full">
            <div
                className="flex flex-row items-center text-gray-400 text-center ml-3 font-bold text-xl pt-4">
                <GiCardRandom/>
                <span className="text-white font-bold text-lg mr-32 ml-2">Casino</span>
            </div>
            <div className="ml-auto mr-auto pt-3 w-11/12">
                <LazyLoadImage className={"rounded"} src={content.header.casino}/>

                <span className="text-white font-bold text-sm mr-32">Le casino crypto complet</span>
                <h1 className="vip-text text-left ml-auto mr-auto text-sm pt-5">Découvrez ce que signifie vraiment faire
                    un pari, avec plus de 1 000 jeux de casino de premier plan accompagnés de vos Originaux Stake
                    préférés.</h1>

                <button onClick={event => window.open("https://discord.gg/7FhT8J85Z3")}
                        className="button-nav text-white font-bold py-2 mt-3 text-sm ml-5 mr-3 rounded w-10/12">
                    <h2>Aller au Casino</h2>
                </button>
            </div>

            <div
                className="flex flex-row items-center text-gray-400 text-center ml-3 font-bold text-xl pt-4">
                <IoBasketball/>
                <span className="text-white font-bold text-lg mr-32 ml-2">Sports</span>
            </div>
            <div className="ml-auto mr-auto pt-3 w-11/12">
                <LazyLoadImage className={"rounded"} src={content.header.casino}/>
                <span className="text-white font-bold text-sm mr-32">Des Paris Sportifs sans Précédent</span>
                <h1 className="vip-text text-left ml-auto mr-auto text-sm pt-5">Avec un design inégalé et les cotes et
                    marchés les plus compétitifs, jouez comme jamais auparavant avec la toute nouvelle façon de parier
                    de Stake.</h1>

                <button onClick={event => window.open("https://discord.gg/7FhT8J85Z3")}
                        className="button-nav text-white font-bold py-2 mt-3 text-sm ml-5 mr-3 rounded w-10/12">
                    <h2>Aller au Paris Sportifs</h2>
                </button>
            </div>
        </div>
    );
}