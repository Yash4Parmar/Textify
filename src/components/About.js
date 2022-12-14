import React from 'react'

export default function About(props) {
    return (
        <>
            <div className="container my-3" style={{
                backgroundColor: props.mode === "dark" ? "black" : "white",
                color: props.mode === "dark" ? "white" : "black"
            }}>
                <h1>About</h1>
                <div className="accordion" id="accordionExample" >
                    <div className="accordion-item " style={{
                        backgroundColor: props.mode === "dark" ? "black" : "white",
                        color: props.mode === "dark" ? "white" : "black"
                    }}>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" style={{
                                backgroundColor: props.mode === "dark" ? "black" : "white",
                                color: props.mode === "dark" ? "white" : "black"
                            }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Whiat is Textify ?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Textify - It  is a free tool that provides instant character count & word count statistics for a given text. This tool reports the number of character with spaces and without spaces, also the number of words and sentences... Character Count Tool - Character Counter monitors and reports the character counts & word counts of the text that you type in real time. Thus it is suitable for writing text with word/ character limit.</strong>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={{
                        backgroundColor: props.mode === "dark" ? "black" : "white",
                        color: props.mode === "dark" ? "white" : "black"
                    }}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" style={{
                                backgroundColor: props.mode === "dark" ? "black" : "white",
                                color: props.mode === "dark" ? "white" : "black"
                            }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How to use this ?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body. This character counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera... It suits to count characters in twitter, blog, books, word document, excel document, pdf document, essays, novel...</strong>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={{
                        backgroundColor: props.mode === "dark" ? "black" : "white",
                        color: props.mode === "dark" ? "white" : "black"
                    }}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style={{
                                backgroundColor: props.mode === "dark" ? "black" : "white",
                                color: props.mode === "dark" ? "white" : "black"
                            }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                about Me
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <a rel="noreferrer" target={"_blank"} href="https://www.linkedin.com/in/-yash-parmar/">Linkedin</a>
                                <br />
                                <a rel="noreferrer" target={"_blank"} href="https://github.com/Yash4Parmar"> GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
