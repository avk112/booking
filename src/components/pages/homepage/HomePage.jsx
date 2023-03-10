import React, {useEffect} from 'react';
import BannerArea from "./BannerArea";
import RentalArea from "./RentalArea";
import PreviewArea from "./PreviewArea";
import AvailableArea from "./AvailableArea";
import ClientSaysArea from "./ClientSaysArea";
import DownloadArea from "./DownloadArea";
import GettingStartedArea from "./GettingStartedArea";

const HomePage = () => {

    useEffect(()=>{
        window.scroll(0, 0)
    }, []);


    return (
        <>
            <BannerArea/>
            <RentalArea/>
            <PreviewArea/>
            <AvailableArea/>
            <ClientSaysArea/>
            <DownloadArea/>
            <GettingStartedArea/>
        </>
    );
};

export default HomePage;