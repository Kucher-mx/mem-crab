import * as React from "react";
import {useNavigate} from "react-router";
import withStyles from "isomorphic-style-loader/withStyles";

import s from "./start.modules.css";
import {cellTypes, stateTypes, tableTypes, valueTypes} from "../../typeScript/types";
import {connect} from "react-redux";
import {Dispatch} from "react";
import {SET_CONSTS} from "../../actions/action";
import {genInitialState} from "../../utils/server.utils";

interface IProps {
    setConsts: (value: stateTypes) => void;
}

function StartPage({setConsts}: IProps): React.ReactElement<IProps> {
    const navigate = useNavigate();
    const [state, setState] = React.useState({M: "", N: "", X: ""});

    const onChangeInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;
        setState({...state, [name]: +value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const {M, N, X} = state;
        if (+M <= 0 || +N <= 0 || +X <= 0 || +M * +N - 1 < +X) {
            setState({M: "", N: "", X: ""});
        } else {
            const {M, N, X} = state;
            const initialState = genInitialState({M, N, X});
            setConsts(initialState);
            navigate(`/app/${M}/${N}/${X}`);
        }
    };

    return (
        <>
            <div className={s.startPage}>
                <form className={s.spForm} onSubmit={handleSubmit} id="startForm">
                    <div className={s.spLabelWrapper}>
                        <label className={s.spFormLabel}>
                            M:
                            <input
                                className={s.spInput}
                                type="number"
                                name="M"
                                required
                                value={state.M}
                                onChange={onChangeInputHandler}
                                id="M"
                                defaultValue={1}
                            />
                        </label>

                        <label className={s.spFormLabel}>
                            N:
                            <input
                                className={s.spInput}
                                type="number"
                                name="N"
                                required
                                value={state.N}
                                onChange={onChangeInputHandler}
                                id="N"
                                defaultValue={3}
                            />
                        </label>

                        <label className={s.spFormLabel}>
                            X:
                            <input
                                className={s.spInput}
                                type="number"
                                name="X"
                                required
                                value={state.X}
                                onChange={onChangeInputHandler}
                                id="X"
                                defaultValue={1}
                            />
                        </label>
                    </div>
                    <button className={s.spFormButton} type="submit">
                        submit
                    </button>
                </form>
            </div>
        </>
    );
}

interface MapDispatchToPropsTypes {
    setConsts: (value: stateTypes) => void;
}

const mapDispatchToProps = (dispatch: Dispatch<{type: string; table?: cellTypes[][]; consts?: valueTypes}>) => ({
    setConsts: (value: stateTypes) => dispatch(SET_CONSTS(value)),
});

export default withStyles(s)(
    connect<IProps, MapDispatchToPropsTypes, {}, stateTypes>(null, mapDispatchToProps)(StartPage)
);
