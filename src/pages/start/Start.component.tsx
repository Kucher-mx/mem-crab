import React, {FC,FormEvent, useRef} from "react";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";

import {SET_CONSTS} from "../../actions/action";
import type {cellTypes, valueTypes} from "../../typeScript/types";
import {generateTable} from "./start.utils";

import "./start.styles.css";

interface IStart {
    history: RouteComponentProps["history"];
    setConsts: (value: {table: cellTypes[][]; consts: valueTypes}) => {};
}

const StartPage: FC<IStart> = ({history, setConsts}) => {
    const refM = useRef<HTMLInputElement>(null);
    const refN = useRef<HTMLInputElement>(null);
    const refX = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const value: valueTypes = {M: 0, N: 0, X: 0};
        if (refM && refM.current && refN && refN.current && refX && refX.current) {
            value.M = Number(refM.current.value);
            value.N = Number(refN.current.value);
            value.X = Number(refX.current.value);
        }

        if (value.X > value.M * value.N - 1 || value.M < 0 || value.N < 0) {
            window.location.reload();
        } else {
            setConsts(generateTable(value));
            history.push("/app");
        }
    };

    return (
        <div className="start-page">
            <form onSubmit={handleSubmit}>
                <div className="label-wrapper">
                    <label>
                        M:
                        <input type="number" required ref={refM} />
                    </label>

                    <label>
                        N:
                        <input type="number" required ref={refN} />
                    </label>

                    <label>
                        X:
                        <input type="number" required ref={refX} />
                    </label>
                </div>
                <button type="submit">sumbit</button>
            </form>
        </div>
    );
};

const mapDispatchToProps = (
    dispatch: (arg0: {type: string; value: {table: cellTypes[][]; consts: valueTypes}}) => {}
) => ({
    setConsts: (value: {table: cellTypes[][]; consts: valueTypes}) => dispatch(SET_CONSTS(value)),
});

export default withRouter(connect(null, mapDispatchToProps)(StartPage));
