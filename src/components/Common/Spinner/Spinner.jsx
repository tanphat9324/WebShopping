import React, { PureComponent, Fragment } from 'react'
import './Spinner.scss';

export default class Spinner extends PureComponent {
    render() {
        return (
            <Fragment>
            <div className="loadingSpinner">
                <img src="./images/loading.svg" alt=""/>
            </div>
            </Fragment>
        )
    }
}
