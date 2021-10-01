import { InferProps } from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'
import style from "./main.module.scss"
import Test from './test/test'

interface IProps {}
interface IState {
    test: string
}

class Main extends React.Component <IProps, IState> {
    
    constructor(props: IProps) {
        super(props)
        this.state = {
            test: 'Hello, '
        }
    }

    render() {
        return (
            <div>
                <div className={style.x}>{this.state.test}</div>
                <Test some="World!" />
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));