import React from "react";
import Operation from "../operation";


const AndLogicOperation = (props) => {
    const {left, right, mode, childrenIds} = props;

    let content = "";
    if (mode === 'standard' || !mode) {
        content = (
            <div style={{ display: 'flex' }}>
                (<Operation type={left.type} parameter={left.parameter} />)
                &nbsp;AND&nbsp;
                (<Operation type={right.type} parameter={right.parameter} />)
            </div>
        );
    } else if (mode === 'parameter') {
        content = (
            <div>
                (&#123; {childrenIds[0]} &#125;)
                &nbsp;AND&nbsp;
                (&#123; {childrenIds[1]} &#125;)
            </div>
        );
    }
    return (
        <div style={{
            display: 'flex',
        }}>
            {content}    
        </div>
    );
};

export default AndLogicOperation;
