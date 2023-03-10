import React, {useEffect} from 'react';
import UniversalBanner from "../../UniversalBanner";
import Breadcrumbs from "../../Breadcrumbs";
import classes from "./AboutPage.module.css";
import phoneImg from "../../../image/smartphone.png";
import pinImg from"../../../image/pin.png";
import letterImg from "../../../image/letter.png";
import teamData from "../../../data/team";
import twitterImg from "../../../image/twitter.png";
import fbImg from "../../../image/facebook.png";
import instImg from "../../../image/instagram.png";

const AboutPage = () => {

    const brandBlock= <div className={classes.aboutUs__item}>
                        <div className={classes.aboutUs__item__titleBlock}>
                            <h2 className={classes.aboutUs__item__titleBlock__title}>
                                The Brand<span className={classes.aboutUs__item__titleBlock__title__dot}>.</span>
                            </h2>
                        </div>
                        <div className={classes.aboutUs__item__descriptionBlock}>
                            <h4 className={classes.aboutUs__item__descriptionBlock__title}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </h4>
                            <p>Suspendisse ultricies scelerisque turpis, elementum ornare arcu posuere mollis. Donec vitae tempor ante, ut tempus augue. Maecenas aliquam, ante quis egestas molestie, ipsum sapien faucibus lorem, ac placerat magna purus id quam. Proin id felis sapien Mauris metus eros, finibus et eros eget, vehicula tincidunt ex. Integer dictum turpis felis, at gravida lectus vestibulum et. Mauris vitae massa pellentesque, rutrum lacus sit amet, dictum massa.</p>
                        </div>
                    </div>;

    const contactBlock = <div className={classes.aboutUs__item}>
                            <div className={classes.aboutUs__item__titleBlock}>
                                <h2 className={classes.aboutUs__item__titleBlock__title}>
                                    Contact Info<span className={classes.aboutUs__item__titleBlock__title__dot}>.</span>
                                </h2>
                            </div>
                            <ul className={classes.aboutUs__item__infoBlock}>
                                <li>
                                    <img src={pinImg} alt="location"/>
                                    1234 New Design St. Melbourne, Australia
                                </li>
                                <li>
                                    <img src={letterImg} alt="email"/>
                                    tubro@turbo.com
                                </li>
                                <li>
                                    <img src={phoneImg} alt="contact phone"/>
                                    + 12345567864
                                </li>
                                <li>
                                    <b>HOUR WORK: MONDAY – FRIDAY / 08AM – 05PM</b>
                                </li>
                            </ul>
                        </div>;

    const teamBlock= <div className={classes.aboutUs__item}>
                            <div className={classes.aboutUs__item__titleBlock}>
                                <h2 className={classes.aboutUs__item__titleBlock__title}>
                                    Our team<span className={classes.aboutUs__item__titleBlock__title__dot}>.</span>
                                </h2>
                            </div>
                            <div className={classes.aboutUs__item__teamBlock}>
                                {teamData.map(item=>{
                                    return <div key={item.id} className={classes.aboutUs__item__teamBlock__item}>

                                                <div className={classes.aboutUs__item__teamBlock__item__topBlock}>
                                                    <img src={item.img} alt={item.name}/>
                                                    <div className={classes.aboutUs__item__teamBlock__item__topBlock__textBlock}>
                                                        <h5 className={classes.aboutUs__item__teamBlock__item__topBlock__textBlock__title}>
                                                            {item.name}, {item.age}:
                                                        </h5>
                                                        <em>"...{item.text}"</em>
                                                    </div>
                                                </div>
                                                <h5 className={classes.aboutUs__item__teamBlock__item__title}>
                                                    {item.name}
                                                </h5>
                                                <h6 className={classes.aboutUs__item__teamBlock__item__subtitle}>
                                                    {item.position}
                                                </h6>
                                                <ul className={classes.aboutUs__item__teamBlock__item__social}>
                                                    <li><a href={item.social.twitter}><img src={twitterImg} alt="twitter"/></a></li>
                                                    <li><a href={item.social.fb}><img src={fbImg} alt="facebook"/></a></li>
                                                    <li><a href={item.social.instagram}><img src={instImg} alt="instagram"/></a></li>
                                                </ul>
                                            </div>
                                })}
                            </div>
                        </div>;

    useEffect(()=>{
        window.scroll(0, 0)
    }, []);


    return (
        <>
            <UniversalBanner
                title="About Us"
                innerBlock={ <Breadcrumbs/>}
            />
            <div className={`universal-container ${classes.aboutUs}`}>
                {brandBlock}
                {contactBlock}
                {teamBlock}
            </div>
        </>
    );
};

export default AboutPage;