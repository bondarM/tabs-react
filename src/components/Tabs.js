import React, { useRef, useState } from 'react'

export const Tabs = () => {

    const [activeList, setActiveList] = useState(3);
    const [leftStyle, setLeftStyle] = useState("hide__shadow");
    const [rightStyle, setRightStyle] = useState("show__shadow");

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
            setLeftStyle("show__shadow")
        }
        else {
            setLeftStyle("hide__shadow")
        }
        if (cotainer.current.scrollLeft == cotainer.current.scrollWidth - cotainer.current.offsetWidth) {
            setRightStyle("hide__shadow")
        } else {
            setRightStyle("show__shadow")
        }
    }

    const addActive = (e, key) => {
            activeList === key ? setActiveList(-1) : setActiveList(key);
            e.target.scrollIntoView({ block: "center", behavior: "smooth" });
    }


    return (
        <div className="container">
            <div ref={cotainer} onWheel={wheelScroll} className="tab__container">
                {tabs.map((tab, key) => {
                    return <div key={key} data-disable={tab.disable}
                        onClick={(e) => !tab.disable ? addActive(e, key) : ""}
                        className={`tab ${activeList === key ? "active" : ""} ${tab.disable ? "disable" : ""}`}>{tab.name}</div>
                })}
                <div ref={rightShadow} className={`right__shadow ${rightStyle}`}></div>
                <div ref={leftShadow} className={`left__shadow ${leftStyle}`}></div>
            </div>
        </div>
    )
}
