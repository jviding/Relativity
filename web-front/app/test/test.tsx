import React from 'react'
import style from './test.module.scss'

interface TestProps {
    some: string
}

export default class Test extends React.Component <TestProps, {}> {

    constructor(props: TestProps) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className={style.x}>
                {this.props.some}
            </div>
        )
    }
}