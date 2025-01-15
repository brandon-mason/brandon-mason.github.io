import React, { useState } from 'react';
import { useEffectIfScrolled } from '@/hooks/useEffectIfScrolled';
import { FaArrowCircleDown } from 'react-icons/fa';
import { Anchor } from '@mantine/core';
import classes from './ScrollArrow.module.css';

interface ScrollArrowProps {
    scrollState: boolean;
}

const ScrollArrow: React.FC<ScrollArrowProps> = (props) => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffectIfScrolled(setHasScrolled, props.scrollState);

    return (
        <Anchor href='#about' className={`${classes.arrowContainer} ${(hasScrolled) ? classes.disappear : ''}`} visibleFrom='lg' m={'1em'}>
            <FaArrowCircleDown className={`${classes.downArrow} `}/>
        </Anchor>
    );
};

export default ScrollArrow;