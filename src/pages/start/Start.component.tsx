import * as React from "react";
import { Dispatch } from "react";
import { connect } from "react-redux";
import {useNavigate} from "react-router";

import { SET_CONSTS } from "../../actions/action";
import { cellTypes, stateTypes, tableTypes, valueTypes } from "../../typeScript/types";
import { genState } from "./start.utils";

import "./start.styles.css";

interface IStart {
    setConsts: (value: stateTypes) => void;
}

function StartPage({setConsts}: IStart) {
    const navigate = useNavigate();
    const [state, setState] = React.useState({M: '', N: '', X: ''})

    const onChangeInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        e.persist();
        const {name, value} = e.currentTarget
        setState({...state, [name]: Number(value)})
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        const {M, N, X} = state;
        if(M && N && X){
            if(Number(M) <= 0 || Number(N) <= 0 || Number(X) <= 0 || Number(M) + Number(N) < Number(X)){
                setState({M: '', N: '', X: ''})
            }else{
                console.log(genState(state));
                
                    setConsts(genState(state))
                    navigate(`/app`)
            }
        }else{
            setState({M: '', N: '', X: ''})
        }
    };

    return (
        <div className="start-page">
            <form onSubmit={handleSubmit}>
                <div className="label-wrapper">
                    <label>
                        M:
                        <input type="number" name='M' required value={state.M} onChange={(e) => onChangeInputHandler(e)} />
                    </label>

                    <label>
                        N:
                        <input type="number" name='N' required value={state.N} onChange={(e) => onChangeInputHandler(e)} />
                    </label>

                    <label>
                        X:
                        <input type="number" name='X' required value={state.X} onChange={(e) => onChangeInputHandler(e)} />
                    </label>
                </div>
                <button type="submit">sumbit</button>
            </form>
        </div>
    );
}

interface MapDispatchToPropsTypes {
    setConsts: (value: stateTypes) => void;
}

const mapDispatchToProps = (
    dispatch: Dispatch<{type: string; table?: cellTypes[][]; consts?: valueTypes}>) => ({
    setConsts: (value: stateTypes) => dispatch(SET_CONSTS(value)),
});

export default connect<IStart, MapDispatchToPropsTypes, {}, stateTypes>(null, mapDispatchToProps)(StartPage);
