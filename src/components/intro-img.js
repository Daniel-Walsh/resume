import React from 'react';
import {ReactComponent as Coding} from '../img/coding.svg';
import styles from '../components/intro-img.module.scss';

const IntroImg = () => {
    return(
        <Coding className={styles.introImg} />
    );
};

export default IntroImg;