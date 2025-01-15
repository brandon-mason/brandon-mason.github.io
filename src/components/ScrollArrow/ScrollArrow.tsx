import React, { useEffect, useState } from 'react';
import { useWindowScroll } from '@mantine/hooks';
import { FaArrowCircleDown } from 'react-icons/fa';
import { Container } from '@mantine/core';
import classes from './ScrollArrow.module.css';

interface ScrollArrowProps {
    scroll: boolean;
}

const ScrollArrow: React.FC<ScrollArrowProps> = (props) => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        if(props.scroll) {
            setHasScrolled(true);
        }
    }, [props.scroll]);

    return (
        <Container className={`${classes.arrowContainer} ${(hasScrolled) ? classes.disappear : ''}`} visibleFrom='lg' m={'1em'}>
            <FaArrowCircleDown className={`${classes.downArrow} `}/>
        </Container>
    );
};

export default ScrollArrow;