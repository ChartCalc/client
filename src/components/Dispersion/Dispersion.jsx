import React from 'react';
import "./Dispersion.css"

function Dispersion(props) {
    return (
        <div className="dispersion">
            <div className={"symbDiv"}>
                <p>enter symbol</p>
                <input type="text" className="symbol" placeholder={"enter symbol"}/>
            </div>
            <div className={"dates"}>
                <p>select starting date </p>
                <input type="date" className={"from"}/>
                <p>select ending date</p>
                <input type="date" className={"to"} />
            </div>
            <div className={"range"}>
                <p>select interval:30</p>
                <input type="range"  className={"interval"} min={1} max={100} step={1}/>
            </div>
            <div className={"button"}>submit</div>
        </div>
    );
}

export default Dispersion;