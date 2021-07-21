import React, { MouseEvent } from "react";

interface ICell {
    classes: string,
    onClickHandler: (id: string) => void;
    amount: number,
    id: string;
    mouseEnter: (e: MouseEvent) => void;
    mouseLeave: () => void,
    highlite: boolean
}

class Cell extends React.Component<ICell>{
    shouldComponentUpdate(nextProps: ICell){
        if(this.props.highlite === nextProps.highlite){
            return false
        }
        return true
    }

    render(){
        const {classes, onClickHandler, amount, id, mouseEnter, mouseLeave} = this.props;
        return (
            <td
                className={classes}
                onClick={e => onClickHandler(e.currentTarget.id)}
                id={id}
                onMouseEnter={e => mouseEnter(e)}
                onMouseLeave={() => mouseLeave()}
            >
                {amount}
            </td>
        );
    }
}

export default Cell;
