'use strict'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
//import style from "./main.module.scss"
//import Test from './test/test.jsx'

class Main extends React.Component <{}> {
    
    /*constructor(props) {
        super(props)
        this.state = {}
    }*/

    render() {
        return (
            <div>
                <div>Hello,</div>
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));