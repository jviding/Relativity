'use strict'
import React from 'react'
import style from './test.module.scss'

export default class Test extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className={style.x}>
                World!
            </div>
        )
    }
}