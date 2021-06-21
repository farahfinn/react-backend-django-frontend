import React from 'react'
import ReactDOM from 'react-dom'

function App() {
    // fetching form the api
    fetch('api/')
    .then(res => res.json())
    .then(data => console.log(data))
    return (
        <div>
            <h1>Hello, This is a react frontend with django server</h1>
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'))