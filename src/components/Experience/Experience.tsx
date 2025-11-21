import { Container, MantineComponent, Space, Title } from '@mantine/core';
import { forwardRef, useEffect, useState } from 'react';
import SingleExp from '../SingleExp/SingleExp';
import experience from './experience.json';
import classes from './Experience.module.css';

interface ExperienceProps {
    headerHeight: number;
    isMdWidth?: boolean | undefined;
    vpHeight: number;
}

interface Experience {
    id: number;
    name: string;
    date: string;
    description: string[];
    technologies: string[];
}

const Experience = forwardRef<MantineComponent<any>, ExperienceProps>((props, experienceRef: React.ForwardedRef<any>) => {
    const [combinedHeight, setCombinedHeight] = useState(0);

    useEffect(() => {
        const currentRef = (experienceRef as React.MutableRefObject<any>).current;
        if (currentRef) {
            const children = currentRef.children;
            let totalHeight = 0;
            for (let i = 0; i < children.length; i++) {
                totalHeight += children[i].clientHeight;
            }
            setCombinedHeight(totalHeight);
        }
    }, []);

    const experienceList = experience.map((experience: Experience) => {
        return <SingleExp key={experience.id} isMdWidth={props.isMdWidth} {...experience} />
    });

    return (
        <Container ref={experienceRef} pt={`calc(${props.headerHeight}px + 1vh`} px={0} ml={0} classNames={{root: classes.experienceRoot}}
            mih={
                (() => {
                    const currentRef = (experienceRef as React.MutableRefObject<any>).current;
                    if (currentRef) {
                        return (props.vpHeight > combinedHeight) ? `${combinedHeight * ( 1 - props.vpHeight)}px` : '100vh' ;
                    }
                    return 'auto';
                })()
            } 
        >
            <Title order={2} className="section-header">Experience</Title>
            {/* <Space h='md' /> */}
            <Container p={0} className={classes.experienceRoot} >
                {experienceList}
            </Container>
        </Container>
    );
});

export default Experience;