import { Component, Fragment } from "react";
import logo from '../../img/Place Your Logo Here (Double Click to Edit) 1.png';
import bergar from '../../img/Place Your Image Here (Double Click to Edit)_.png';
import star from '../../img/Star 1.svg';
import box from '../../img/Group.png';
import text1 from '../../img/Body Text 2.png'
import '../../style.css';
class Header extends Component {

    render() {
        return <Fragment>
            <div className="overlap-5">
                <div className="rectangle-7" />
                <div className="rectangle-16" />
                <img className="mask-group-3" alt="Mask group" src="../img/mask-group-2.png" />
                <img className="bx-bxl-vk" alt="Bx bxl vk" src="../img/bx-bxl-vk.svg" />
                <img className="ant-design-twitter" alt="Ant design twitter" src="../img/ant-design-twitter-outlined.svg" />
                <img className="bx-bxl-instagram-alt" alt="Bx bxl instagram alt" src="../img/bx-bxl-instagram-alt.svg" />
                <img className="brandico-facebook" alt="Brandico facebook" src="../img/brandico-facebook-rect.svg" />
                <div className="ellipse" />
                <div className="rectangle-17" />
                <img className="mask-group-4" alt="Mask group" src={box} />
                <img
                    className="place-your-image"
                    alt="Place your image"
                    src="../img/place-your-image-here-double-click-to-edit.png"
                />
                <div className="tasty-pastries">TASTY PASTRIES</div>
                <div className="group-10">
                    <img
                        className="place-your-logo-here"
                        alt="Place your logo here"
                        src={logo}
                    />
                    <div className="text-wrapper-8">PEACHY PUP BAKERY</div>
                </div>
                <img className="body-text" alt="Body text" src={text1} />
                <img className="mask-group-5" alt="Mask group" src={bergar} />
                <p className="lorem-ipsum-is-2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the
                </p>
                <div className="text-wrapper-9">Telephone:</div>
                <p className="text-wrapper-10">+7 700 000 00 00</p>
                <div className="group-11">
                    <div className="overlap-6">
                        <div className="text-wrapper-11">SEE MORE</div>
                    </div>
                </div>
                <img className="star" alt="Star" src={star} />
            </div>
        </Fragment>
    }


}

export default Header