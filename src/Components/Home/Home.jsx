import { Component, Fragment } from "react";
// import Style from './style.module.css'
import rectangle268 from '../../img/Rectangle 268.png'
import rectangle269 from '../../img/Rectangle 269.png'
import rectangle270 from '../../img/Rectangle 270.png'
import rectangle271 from '../../img/Rectangle 271.png'
class Home extends Component {

    render() {
        return <Fragment>
            <div className="overlap">
                <div className="rectangle" />
                <div className="rectangle-2" />
                <img className="mask-group" alt="Mask group" src="mask-group-4.png" />
                <div className="how-we-work">
                    HOW WE
                    <br />
                    WORK
                </div>
                <p className="lorem-ipsum-is">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the
                </p>
                <div className="group">
                    <div className="overlap-group">
                        <div className="contact-us">CONTACT US</div>
                    </div>
                </div>
                <img className="img" alt="Rectangle" src={rectangle268} />
                <img className="rectangle-3" alt="Rectangle" src={rectangle269} />
                <img className="rectangle-4" alt="Rectangle" src={rectangle270} />
                <img className="rectangle-5" alt="Rectangle" src={rectangle271} />
            </div>
        </Fragment>
    }
}

export default Home