import { Component, Fragment } from "react";
import first from '../../img/Bread omelette 1.png'
import second from '../../img/Breakfast Potatoes.png'
import third from '../../img/Home-made Mandazi.png'
class Recipes extends Component {

    render() {
        return <Fragment>
            <div className="recipes">RECIPES</div>
            <div className="group-12">
                <div className="overlap-group">
                    <div className="contact-us">CONTACT US</div>
                </div>
            </div>
            <div className="overlap-7">
                <div className="group-13">
                    <div className="group-14">
                        <div className="overlap-group-3">
                            <p className="lorem-ipsum-is-3">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled
                            </p>
                            <div className="text-wrapper-12">Bread omelette</div>
                        </div>
                    </div>
                    <div className="group-15">
                        <div className="overlap-group-3">
                            <p className="lorem-ipsum-is-3">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled
                            </p>
                            <div className="text-wrapper-12">Breakfast Potatoes</div>
                        </div>
                    </div>
                    <div className="group-16">
                        <div className="overlap-group-3">
                            <p className="lorem-ipsum-is-3">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled
                            </p>
                            <div className="text-wrapper-12">Home-made Mandazi</div>
                        </div>
                    </div>
                </div>
                <img className="bread-omelette" alt="Bread omelette" src={first} />
                <img className="breakfast-potatoes" alt="Breakfast potatoes" src={second} />
                <img className="home-made-mandazi" alt="Home made mandazi" src={third} />
            </div>
        </Fragment>
    }
}

export default Recipes