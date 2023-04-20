import React, {useEffect, useState} from 'react';
import "./Dispersion.css"
import {useDispatch, useSelector} from "react-redux";
import {fetchDispersion} from "../../features/actions/dispersionAction";
import {symbols_url} from "../../utils/constants";
import Select from "react-select";


function Dispersion(props) {
    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    const [symbol, setSymbol] = useState();
    const [interval, setInterval] = useState(1);
    const [symbols,setSymbols] = useState(['loading...'])

    const dispatch = useDispatch();

    const averageReturn = useSelector(state => state.dispersion)

    const handleClick = () => {
        dispatch(fetchDispersion({symbol, from, to, interval}))
    }

    async function fetchSymbols(){
        const response = await fetch(symbols_url)
        const json = await response.json();
        setSymbols(json);
        localStorage.setItem('symbols',JSON.stringify(json));
    }



    useEffect(() =>{
        const symbs = JSON.parse(localStorage.getItem('symbols'));
        if(symbs){
            setSymbols(symbs);
        }else{
            fetchSymbols();
        }
        console.log(symbs,symbols)
    },[])

    const style ={
        width:'100%'
    }
    function createOptionList(){
        return symbols.map(symbol => {return {value:symbol, label:symbol}});
    }
    return (
        <div>
            <div className="dispersion">
                <div className={"symbDiv"}>
                    <p>enter symbol</p>
                    {/*<input type="text" className="symbol" placeholder={"enter symbol"} value={symbol}*/}
                    {/*       onChange={e => setSymbol(e.target.value)}/>*/}
                    <Select options={createOptionList()} placeholder={"select symbol"} value={symbol} onChange={(data) => setSymbol(data)}/>
                </div>
                <div className={"dates"}>
                    <p>select starting date </p>
                    <input type="date" className={"from"} onChange={e => setFrom(e.target.value)}/>
                    <p>select ending date</p>
                    <input type="date" className={"to"} onChange={e => setTo(e.target.value)}/>
                </div>
                <div className={"range"}>
                    <p>select interval:{interval}</p>
                    <input type="range" value={interval} onChange={e => setInterval(e.target.value)}
                           className={"interval"} min={1} max={100} step={1}/>
                </div>
                <div className={"button"} onClick={handleClick}>submit</div>
            </div>
            <div className={"result"} style={{'color': averageReturn < 0 ? 'red' : 'green'}}>result: {Math.ceil(averageReturn)}%
            </div>
        </div>
    );
}

export default Dispersion;
//TODO:handle errors