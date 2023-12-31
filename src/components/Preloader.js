import React from 'react';
import logoImg from '../assets/img/logo.webp';
import '../assets/scss/preloader.scss';

const Preloader = () => {
    return (
        <div class="wrapperLoad">
            <div class="loader">
                <div class="loader">
                    <div class="loadingImg">
                        <img src={logoImg} alt="loading logo" />
                    </div>
                    <div class="loadingBar"><span class="loadingProgress"></span></div>
                </div>
            </div>
        </div>
    )
};

export default Preloader;