import React, {useEffect, useState} from 'react';
import "./Dispersion.css"
import {useDispatch, useSelector} from "react-redux";
import {fetchDispersion} from "../../features/actions/dispersionAction";
import {dayInMs, purple, symbols_url} from "../../utils/constants";
import Select, {components} from "react-select";
import {selectStyles} from "./selectStyles";


function Dispersion(props) {
    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    const [symbol, setSymbol] = useState();
    const [interval, setInterval] = useState(1);
    const [symbols, setSymbols] = useState(['loading...'])

    const dispatch = useDispatch();

    const averageReturn = useSelector(state => state.dispersion)

    const handleClick = () => {
        dispatch(fetchDispersion({symbol:symbol.value, from, to, interval}))
    }

    async function fetchSymbols() {
        const response = await fetch(symbols_url)
        const json = await response.json();
        setSymbols(json);
        localStorage.setItem('symbols', JSON.stringify(json));
        localStorage.setItem('time',Date.now().toString());
    }


    useEffect(() => {
        const symbs = JSON.parse(localStorage.getItem('symbols'));
        const time = parseInt(localStorage.getItem('time'));
        if (symbs && ((Date.now() - time) < dayInMs)) {
            console.log("fromLocalStorage symbs:" ,symbs)
            setSymbols(symbs);
        } else {
            console.log("fetching")
            fetchSymbols();
        }
        console.log(symbs, symbols)
    }, [])

    const style = {
        width: '100%'
    }

    function createOptionList() {
        return symbols.map(symbol => {
            return {value: symbol.toLowerCase(), label: symbol.toLowerCase()}
        });
    }

    function SingleValue(props) {
        const {children, ...rest} = props;
        const {selectProps} = props;
        if (selectProps.menuIsOpen) return <span></span>;
        return <components.SingleValue {...rest}>{children}</components.SingleValue>;
    }

    return (
        <div className={"container"}>
            <div className={"test"}></div>
            <div className="dispersion">
                <div className={"symbDiv"}>
                    <p>Select symbol</p>
                    {/*<input type="text" className="symbol" placeholder={"enter symbol"} value={symbol}*/}
                    {/*       onChange={e => setSymbol(e.target.value)}/>*/}
                    <Select options={createOptionList()} placeholder={"select or type symbol"} value={symbol}
                            onChange={(data) => {
                                setSymbol(data)
                                console.log("data",data)
                            }}
                            components={{SingleValue}}
                            styles={selectStyles}/>
                </div>
                <div className={"dates"}>
                    <p>Select starting date </p>
                    <input type="date" className={"from"} onChange={e => setFrom(e.target.value)}/>
                    <p>Select ending date</p>
                    <input type="date" className={"to"} onChange={e => setTo(e.target.value)}/>
                </div>
                <div className={"range"}>
                    <p>Select interval: {interval} days</p>
                    <input type="range" value={interval} onChange={e => setInterval(e.target.value)}
                           className={"interval"} min={1} max={100} step={1}/>
                </div>
                <div className={"button"} onClick={handleClick}>SUBMIT</div>
            </div>
            <div className={"result"}>
                <p className={"text1"}>RESULT </p>
                <p className={"text2"}>{Math.floor(averageReturn * 100) / 100}%</p>
            </div>
        </div>
    );
}

export default Dispersion;
//TODO:handle errors