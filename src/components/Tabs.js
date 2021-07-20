import React, { useRef, useState } from 'react'

export const Tabs = () => {

    const [activeList, setActiveList] = useState(3);


    const cotainer = useRef();
    const leftShadow = useRef();
    const rightShadow = useRef();

    const tabs = [
        { name: "Job Focus" },
        { name: "Soft Skills" },
        { name: "Technical Skills" },
        { name: "Functional Expertise" },
        { name: "Domain Expertise" },
        { name: "Patent Expertice", disable: 1 },
        { name: "Personal Expertise" },
        { name: "Domain Expertise" },
        { name: "Domain Expertise" },
        { name: "Hard Expertise" },
        { name: "Job Focus" },
        { name: "Soft Skills" },
        { name: "Technical Skills" },
        { name: "Functional Expertise" },
    ]

    const wheelScroll = (e) => {
        cotainer.current.scrollLeft += (e.deltaY / 4);

        if (cotainer.current.scrollLeft > 0) {
            leftShadow.current.style.display = "block"
        }
        else {
            leftShadow.current.style.display = "none"
        }
        if (cotainer.current.scrollLeft > 970) {
            rightShadow.current.style.display = "none"
        } else {
            rightShadow.current.style.display = "block"
        }
    }

    const addActive = (e, key) => {
        if (!e.target.dataset.disable) {
            activeList === key ? setActiveList(-1) : setActiveList(key);
            e.target.scrollIntoView({ block: "center", behavior: "smooth" });
        }
    }






    return (
        <div className="container">
            <div ref={cotainer} onWheel={wheelScroll} className="tab__container">
                {tabs.map((tab, key) => {
                    return <div key={key} data-disable={tab.disable}
                        onClick={(e) => addActive(e, key)}
                        className={`tab ${activeList === key ? "active" : ""} ${tab.disable ? "disable" : ""}`}>{tab.name}</div>
                })}
                <div ref={rightShadow} className="right__shadow"></div>
                <div ref={leftShadow} className="left__shadow"></div>
            </div>
        </div>
    )
}
