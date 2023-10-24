import { Component, Fragment } from "react";
import call from '../../img/ic_round-call.svg';
import mail from '../../img/ic_round-mail.svg';
class Contact extends Component {
    user = {
        full_name: "",
        email: "",
        phone_number: "",
    }
    getFormData = (e) => {
        this.user[e.target.name] = e.target.value
        console.log(this.user);
    }

    render() {
        return <Fragment>
            <div className="overlap-4">
                <div className="rectangle-10" />
                <div className="text-wrapper-3">SEND</div>
                <div className="contact-us-2">CONTACT US</div>
                <div className="group-6">
                    <form action="post"></form>
                    <div className="div-2">
                        <div className="div-2">
                            <input onKeyUp={this.getFormData} name="full_name"
                                type="text" placeholder="Full Name" className="rectangle-11" />
                            <input onKeyUp={this.getFormData}
                                name="email" type="email" placeholder="Email" className="rectangle-12" />
                            <input onKeyUp={this.getFormData} name="phone_number"
                                type="text" placeholder="Phone Number" className="rectangle-13" />
                            <button className="rectangle-14" />
                        </div>
                        {/* <div className="text-wrapper-4">Full Name</div>
                        <div className="text-wrapper-5">Email</div>
                        <div className="text-wrapper-6">Phone Number</div> */}
                    </div>
                    <div className="group-7">
                        <div className="group-8">
                            <p className="div-3">
                                <span className="span">upskilling.eg1</span>
                                <a href="mailto:test@gmail.com" rel="noopener noreferrer" target="_blank">
                                    <span className="text-wrapper-7">@gmail.com</span>
                                </a>
                            </p>
                            <img className="img-2" alt="Ic round mail" src={mail} />
                        </div>
                        <div className="group-9">
                            <div className="div-3">+20 115 493 2137</div>
                            <img className="img-2" alt="Ic round call" src={call} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    }


}

export default Contact