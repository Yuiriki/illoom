import React from 'react';
import AsideBoxComponent from './AsideBoxComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import MenuModalComponent from './MenuModalComponent';

const WrapComponent = () => {
    return (
        <div id='wrap'>
            <HeaderComponent/>
            <MainComponent/>
            <FooterComponent/>
            <MenuModalComponent/>
            <AsideBoxComponent/>
        </div>
    );
};

export default WrapComponent;