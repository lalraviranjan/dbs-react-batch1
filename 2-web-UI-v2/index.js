console.log("-index.js-");


//----------------------------------------------
// way-1 : plain-JS
//----------------------------------------------

// component class
function Clock(props) {
    let timeZone = props.timeZone;
    return `
    <div class="card">
        <div class="card-header">${timeZone}</div>
        <div class="card-body">
            <span class="badge badge-dark">
                ${new Date().toLocaleTimeString('en-US', { timeZone: timeZone })}
            </span>
        </div>
    </div>
`
}

let inClockEle = document.getElementById('IN')
let uaeClockEle = document.getElementById('UAE')
let usClockEle = document.getElementById('US')

// setInterval(() => {
//     inClockEle.innerHTML = Clock({ timeZone: 'Asia/Kolkata' })
//     uaeClockEle.innerHTML = Clock({ timeZone: 'Asia/Dubai' })
//     usClockEle.innerHTML = Clock({ timeZone: 'America/New_york' })
// }, 1000);



//----------------------------------------------
// way-2 : React-JS
//----------------------------------------------

// component class
function NewClock(props) {
    let timeZone = props.timeZone;
    // let div1Element = React.createElement('div', { key: 1, className: 'card-header' }, timeZone)
    // let spanElement = React.createElement('span', { className: 'badge badge-dark' }, new Date().toLocaleTimeString('en-US', { timeZone: timeZone }))
    // let div2Element = React.createElement('div', { key: 2, className: 'card-body' }, spanElement)
    // let divElement = React.createElement('div', { className: 'card' }, [div1Element, div2Element])
    // return divElement;

    // JSX
    return (
        <div className="card">
            <div className="card-header">{timeZone}</div>
            <div className="card-body">
                <span className="badge badge-dark">
                    {new Date().toLocaleTimeString('en-US', { timeZone: timeZone })}
                </span>
            </div>
        </div>
    )

}


let inClockEle2 = document.getElementById('IN-react')
let uaeClockEle2 = document.getElementById('UAE-react')
let usClockEle2 = document.getElementById('US-react')

setInterval(() => {
    // ReactDOM.render(NewClock({ timeZone: 'Asia/Kolkata' }), inClockEle2);
    // ReactDOM.render(NewClock({ timeZone: 'Asia/Dubai' }), uaeClockEle2);
    // ReactDOM.render(NewClock({ timeZone: 'America/New_york' }), usClockEle2);

    ReactDOM.render(<NewClock timeZone='Asia/Kolkata' />, inClockEle2);
    ReactDOM.render(<NewClock timeZone='Asia/Dubai' />, uaeClockEle2);
    ReactDOM.render(<NewClock timeZone='America/New_york' />, usClockEle2);

}, 1000);