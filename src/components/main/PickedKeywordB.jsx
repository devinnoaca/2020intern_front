import React from 'react';

import "style/Main.css";
import ChipsArray from "components/main/ChipsArray"

const PickedKeywordB = () => {
    let funStyle = 'color:blue';
    console.log('%cpickedkeywordC start', funStyle);

    return (
        <div className="pickedKeywordBW">
            <ChipsArray />
        </div>
    );
};

export default PickedKeywordB;