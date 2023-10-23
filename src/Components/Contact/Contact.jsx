import { Component, Fragment } from "react";

class Contact extends Component {

    render() {
        return <Fragment>
            <div className="overlap-4">
                <div className="rectangle-10" />
                <div className="text-wrapper-3">SEND</div>
                <div className="contact-us-2">CONTACT US</div>
                <div className="group-6">
                    <div className="div-2">
                        <div className="div-2">
                            <div className="rectangle-11" />
                            <div className="rectangle-12" />
                            <div className="rectangle-13" />
                            <div className="rectangle-14" />
                        </div>
                        <div className="text-wrapper-4">Full Name</div>
                        <div className="text-wrapper-5">Email</div>
                        <div className="text-wrapper-6">Phone Number</div>
                    </div>
                    <div className="group-7">
                        <div className="group-8">
                            <p className="div-3">
                                <span className="span">upskilling.eg1</span>
                                <a href="mailto:test@gmail.com" rel="noopener noreferrer" target="_blank">
                                    <span className="text-wrapper-7">@gmail.com</span>
                                </a>
                            </p>
                            <img className="img-2" alt="Ic round mail" src="../img/ic-round-mail.svg" />
                        </div>
                        <div className="group-9">
                            <div className="div-3">+20 115 493 2137</div>
                            <img className="img-2" alt="Ic round call" src="../img/ic-round-call.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    }


}

export default Contact