import React, { Component } from 'react';
import Preview from './Preview';
import CalculateSpeed from './CalculateSpeed';
import GetText from './GetText';


class SpeedTest extends Component {

    constructor(props) {
        super(props);
        // this.initialState = {
        //     text: GetText(),
        //     userInput: '',
        //     symbols: 0,
        //     sec: 0,
        //     started: false,
        //     finished: false
        // }
        this.state = {
            text: GetText(),
            userInput: '',
            symbols: 0,
            sec: 0,
            started: false,
            finished: false
        }
    }


    onRestart = () => {
        console.log("sdsdhsh");
        this.setState({
            text: GetText(),
            userInput: '',
            symbols: 0,
            sec: 0,
            started: false,
            finished: false
        })
    }

    onUserInputChange = (e) => {
        const v = e.target.value;
        this.setTimer();
        this.onFinish(v)
        this.setState({
            userInput: v,
            symbols: this.countCorrectSymbols(v)
        })
    }

    onFinish(userInput) {
        if (userInput === this.state.text) {
            clearInterval(this.interval);
            this.setState({
                finished: true
            })
        }
    }

    countCorrectSymbols(userInput) {
        const text = this.state.text.toString().replace(' ', '');
        return userInput.replace(' ', '').split('').filter((s, i) => s === text[i]).length;
    }

    setTimer() {
        if (!this.state.started) {
            this.setState({ started: true });
            this.interval = setInterval(() => {
                this.setState(prevProps => {
                    return { sec: prevProps.sec + 1 }
                })
            }, 1000)
        }
    }

    render() {
        return (
            <div className="container mt-5 mb-5" style={{
                backgroundColor: this.props.mode === "dark" ? "black" : "white",
                color: this.props.mode === "dark" ? "white" : "black"
            }}>
                {/* <h1 style={{
                    marginLeft: "332px",
                    marginBottom: "26px"
                }}>Take your typing speed test</h1> */}
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <Preview text={this.state.text} userInput={this.state.userInput} mode={this.props.mode} />
                        <textarea
                            value={this.state.userInput}
                            onChange={this.onUserInputChange}
                            className="form-control mb-3"
                            placeholder="Start typing..."
                            readOnly={this.state.finished}
                        ></textarea>
                        <CalculateSpeed sec={this.state.sec} symbols={this.state.symbols} mode={this.props.mode} />
                        <div className="text-right my-3">
                            <button className="btn btn-primary" onClick={this.onRestart}>Restart</button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default SpeedTest;