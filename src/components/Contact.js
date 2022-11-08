import React from 'react'

export default function Contact(props) {
    return (
        <div className='container my-3' style={{ color: props.mode === "dark" ? "white" : "black" }}>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full name</label>
                <input type="email" style={{
                    backgroundColor: props.mode === "dark" ? "black" : "white",
                    color: props.mode === "dark" ? "white" : "black"
                }} class="form-control" id="exampleFormControlInput1" placeholder="Enter your name..." />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input type="email" style={{
                    backgroundColor: props.mode === "dark" ? "black" : "white",
                    color: props.mode === "dark" ? "white" : "black"
                }} class="form-control" id="exampleFormControlInput1" placeholder="xyz@gmail.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">How can we help you?</label>
                <textarea class="form-control" style={{
                    backgroundColor: props.mode === "dark" ? "black" : "white",
                    color: props.mode === "dark" ? "white" : "black"
                }} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="button" class="btn btn-primary">Submit</button>
        </div >
    )
}
