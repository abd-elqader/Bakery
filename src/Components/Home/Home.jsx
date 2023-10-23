import { Component, Fragment } from "react";
import Style from './style.module.css'

class Home extends Component {

    render() {
        return <Fragment>
            <h1 className={`${Style.newStyle} ${Style.newColor}`}>
                home
            </h1>
        </Fragment>
    }
}

export default Home