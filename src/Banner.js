import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Request"; 

function Banner () {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get();
            setMovie(
                request.data.results [
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
                );
                return request;
        }     
        }, [])

    function truncate(string, n) {
        return string?.length > n ? string.substring(0, n - 1) + '...' : string;
    }
            return (
            <header className="Banner" style={{
                backgroundSize: "cover",
                backgroundImage: `url('https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/c1e6796a7081d3b3f85cc76a6e69d87f4d0c51ba')`,
                backgroundPosition: "center center",
            }}
            >
                <div className="Banner__contents"> </div>
                    <h1 content="Banner__title">Movie Name</h1>
                    <div className="Banner__buttons">
                        <button className="Banner__button"> Play</button>
                        <button className="Banner__button"> My List</button>
                        <h1 className="Banner__description"> {truncate(`A fictitious village in an undisclosed era sees mysterious sightings as the children go missing. Is the culprit man or devil? Can Vikrant Rona (Kiccha Sudeep), the cigar smoking, badass new cop in the ghostly town crack the puzzle and hunt down those responsible when everyone’s a suspect?`, 150)}

                        </h1>

                </div>
                <div className="Banner--fadeBottom"/>
                





            </header>
        );
    }

export default Banner;

/* <img
        className="Banner"
          src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/2557313878d5fbdd1c6797f72f776eebeacc9b1b"
          alt=""
        /> */