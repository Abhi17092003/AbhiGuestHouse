import React, { useState } from "react";
import "./GallerySlider.css"; // css alag file me rakho

function GallerySlider() {
    const crewMembers = [
        { name: "Flower", img: "../assets/flower.jpg" },
        { name: "Hotel",   img: "../assets/out.jpg" },
        { name: "Large Room", img: "../assets/large.jpg" },
        { name: "Ayodhya Hills",  img: "../assets/ayodhya.webp" },
        { name: "Reception",  img: "../assets/recep.jpg" },
        { name: "Mountain hills",  img: "../assets/baranti.webp" },
        { name: "Mithon Damm",  img: "../assets/mithonDam.webp" },
        { name: "Luxery Room",  img: "../assets/room1.jpg" },
    ];

    const [crewIndex, setCrewIndex] = useState(0);

    const handlePrev = () => {
        setCrewIndex((prev) => (prev - 1 + crewMembers.length) % crewMembers.length);
    };

    const handleNext = () => {
        setCrewIndex((prev) => (prev + 1) % crewMembers.length);
    };

    return (
        <div className="card-slider">
            <div className="crew-carousel">
                <button className="crew-arrow crew-left" onClick={handlePrev}>‹</button>
                <div className="crew-track">
                    {crewMembers.map((member, i) => {
                        const offset = (i - crewIndex + crewMembers.length) % crewMembers.length;
                        let positionClass = "hidden";
                        if (offset === 0) positionClass = "center";
                        else if (offset === 1) positionClass = "right-1";
                        else if (offset === 2) positionClass = "right-2";
                        else if (offset === crewMembers.length - 1) positionClass = "left-1";
                        else if (offset === crewMembers.length - 2) positionClass = "left-2";

                        return (
                            <div key={i} className={`crew-card ${positionClass}`} onClick={() => setCrewIndex(i)}>
                                <img src={member.img} alt={member.name} />
                            </div>
                        );
                    })}
                </div>
                <button className="crew-arrow crew-right" onClick={handleNext}>›</button>
            </div>

            <div className="crew-info">
                <h2 className="crew-name">{crewMembers[crewIndex].name}</h2>
                
            </div>

            <div className="crew-dots">
                {crewMembers.map((_, i) => (
                    <div
                        key={i}
                        className={`crew-dot ${i === crewIndex ? "active" : ""}`}
                        onClick={() => setCrewIndex(i)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default GallerySlider;
