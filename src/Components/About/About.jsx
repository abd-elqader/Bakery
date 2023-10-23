import { Component, Fragment } from "react";

class About extends Component {

    render() {
        return <Fragment>
            <div className="overlap-2">
                <div className="rectangle-6" />
                <div className="rectangle-7" />

                <div className="about-us">
                    ABOUT
                    <br />
                    US
                </div>
                <p className="text-wrapper">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                    Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="overlap-wrapper">
                    <div className="overlap-group">
                        <div className="contact-us">CONTACT US</div>
                    </div>
                </div>
                <img className="rectangle-8" alt="Rectangle" src="../img/rectangle-275.png" />
            </div>
        </Fragment>
    }


}

export default About