import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        setText(text.toUpperCase())
        props.showAlert("Converted to upper case", "success")
    }
    const handleLowerClick = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted to lower case", "success")

    }
    const handleClearText = () => {
        setText("")
        props.showAlert("Text cleared", "success")
    }
    const handleCopyText = () => {
        props.showAlert("Copied to clipboard", "success")
        let copiedText = document.getElementById("MyBox");
        copiedText.select();
        navigator.clipboard.writeText(copiedText.value)
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces", "success")
    }
    const onUpChange = (event) => {
        setText(event.target.value)
    }
    return (
        <div className="container" style={{ marginTop: "40px" }}>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1 className='my-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="MyBox" rows="7" placeholder='Enter text here...' value={text} style={{
                        backgroundColor: props.mode === "dark" ? "black" : "white",
                        color: props.mode === "dark" ? "white" : "black"
                    }} onChange={onUpChange}></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handleLowerClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-1' onClick={handleClearText}>Clear Text</button>
                <button className='btn btn-primary mx-1' onClick={handleCopyText}>Copy Text</button>
                <button className='btn btn-primary mx-1' onClick={handleExtraSpace}>Remove Extra Spaces</button>
            </div>
            <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2>Words summary</h2>
                <p>Word count: {text.split(/\s/).filter((ele) => { return ele.length != 0 }).length}</p>
                <p>Character count: {text.length}</p>
                <p>Mintutes to read: {0.08 * text.split(" ").length}</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter text into text box"}</p>
            </div>
        </div >
    )
}
