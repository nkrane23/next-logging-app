'use client';

import { useRef } from "react";
import { useCountUp } from "react-countup";

const Counter = (props) => {
    const {
        data: { startNum = 0, endNum, duration = 5, delay = 0 }
    } = props;
    const countUpRef = useRef(null);

    const { start, pauseResume, reset, update } = useCountUp({
        ref: countUpRef,
        start: startNum,
        end: endNum,
        smartEasingThreshold: 2000,
        smartEasingAmount: 30,
        delay,
        duration
    });

    return (
        <div className="numbers-wrapper">
            <div className="number" ref={countUpRef}>0</div>
            <button className="update" onClick={start}>Update Count</button>
        </div>
    );
};

export default Counter;