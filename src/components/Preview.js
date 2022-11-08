import React from 'react';

function Preview(props) {

    let text = props.text.toString().split("");
    return (
        <div className="border rounded p-3 mb-4" style={{
            backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "dark" ? "white" : "black"
        }}>
            {
                text.map((s, i) => {
                    let color;
                    if (i < props.userInput.length) {
                        color = s === props.userInput[i] ? '#dfffa0' : '#fcbea4';
                    }
                    return <span key={i} style={{ backgroundColor: color }}>{s}</span>
                })
            }
        </div>
    )
}

export default Preview