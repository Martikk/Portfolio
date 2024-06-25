import React from 'react';
import iconSprite from '../../assets/img/icon-sprite.svg';

type IconPropsType = {
    iconId?: string;
    width?: string;
    height?: string;
    viewBox?: string;
    margin?: string
}

const Icon = ({ iconId, width, height, viewBox, margin }: IconPropsType) => {
    const styles = {
        margin: margin || "0",
    };

    return (
        <svg
            width={width || "50"}
            height={height || "50"}
            viewBox={viewBox || "0 0 32 32"}
            style={styles}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <use xlinkHref={`${iconSprite}#${iconId}`} />
        </svg>
    );
};

export default Icon;
