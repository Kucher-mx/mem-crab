import React, {MouseEvent} from "react";

interface ICell {
    classes: string;
    onClickHandler: (id: string) => void;
    amount: number;
    id: string;
    mouseEnter: (e: MouseEvent) => void;
    mouseLeave: (e: MouseEvent) => void;
    highlite: boolean;
}

// eslint-disable-next-line react/prefer-stateless-function
class Cell extends React.Component<ICell> {
    //can cause bag with increase
    shouldComponentUpdate(nextProps: ICell) {
        if (nextProps.highlite !== this.props.highlite || nextProps.amount !== this.props.amount) {
            return true;
        }

        return false;
    }
    render() {
        // console.log("render");
        return (
            <td
                className={this.props.classes}
                onClick={e => this.props.onClickHandler(e.currentTarget.id)}
                id={this.props.id}
                onMouseEnter={e => this.props.mouseEnter(e)}
                onMouseLeave={e => this.props.mouseLeave(e)}
            >
                {this.props.amount}
            </td>
        );
    }
}

// function Cell({classes, onClickHandler, amount, id, mouseEnter, mouseLeave}: ICell) {
//     console.log("rerender");

//     return (
//         <td
//             className={classes}
//             onClick={e => onClickHandler(e.currentTarget.id)}
//             id={id}
//             onMouseEnter={e => mouseEnter(e)}
//             onMouseLeave={e => mouseLeave(e)}
//         >
//             {amount}
//         </td>
//     );
// }

export default React.memo(Cell);
