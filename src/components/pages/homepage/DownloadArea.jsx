import React, {useState} from 'react';
import classes from "./DownloadArea.module.css";
import bannerImg from "../../../image/download.png";
import appleLogo from "../../../image/ios-app-btn.png";
import googleLogo from "../../../image/google-app-download.png";
import HiddenScreen from "../../HiddenScreen";
import FormAcceptation from "../../FormAcceptation";

const DownloadArea = () => {
    const [input, setInput] = useState("");
    const [isHiddenScreen, setIsHiddenScreen] = useState(false);

    const handleInput = (e)=> {
        const value = e.target.value;
        setInput(value);
    }

    const sendForm = (e)=> {
        e.preventDefault();
        setInput("");
        handleScreenStatus();
    }
    const handleScreenStatus = ()=> {
        setIsHiddenScreen(prev=>!prev);
    }

    return (
        <div className={`universal-container ${classes.downloadArea}`}>
            <HiddenScreen
                justify="center"
                insertBlock={<FormAcceptation message="Link for download was successful send to your e-mail!"/>}
                isVisible={isHiddenScreen}
                handleScreenStatus={handleScreenStatus}
            />
            <div className={classes.downloadArea__bannerBlock}>
                <img src={bannerImg} alt="how to load"/>
            </div>
            <div className={classes.downloadArea__info}>
                <h5 className={classes.downloadArea__info__title}>
                    Turbo App Available in Android & iOS
                </h5>
                <p>
                    The proper business solution for your developing business strategic and corporation
                </p>
                <form className={classes.downloadArea__info__form} onSubmit={sendForm}>
                    <input
                        name="email"
                        type="email"
                        value={input}
                        onChange={handleInput}
                        placeholder="Enter your e-mail"
                    />
                    <button
                        className="universal-button"
                    >
                        Send link
                    </button>
                </form>
                <h3 className={classes.downloadArea__info__subtitle}>
                    OR FIND IN
                </h3>
                <div className={classes.downloadArea__info__linksBlock}>
                    <img src={appleLogo} alt="apple store logo"/>
                    <img src={googleLogo} alt="google play logo"/>
                </div>
            </div>
        </div>
    );
};

export default DownloadArea;