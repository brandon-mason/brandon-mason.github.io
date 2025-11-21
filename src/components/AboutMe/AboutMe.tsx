import { Container, Flex, Group, Image, List, ListItem, MantineComponent, Stack, Text, Title } from '@mantine/core';
import { forwardRef, useEffect, useState } from 'react';
import classes from './AboutMe.module.css';
import techItems from './technologies.json';

interface AboutMeProps {
    headerHeight: number;
    vpHeight: number;
    isMdWidth: boolean | undefined;
}

const AboutMe = forwardRef<MantineComponent<any>, AboutMeProps>((props, aboutRef: React.ForwardedRef<any>) => {
    const [combinedHeight, setCombinedHeight] = useState(0);

    useEffect(() => {
        const currentRef = (aboutRef as React.MutableRefObject<any>).current;
        if (currentRef) {
            const children = currentRef.children;
            let totalHeight = 0;
            for (let i = 0; i < children.length; i++) {
                totalHeight += children[i].clientHeight;
            }
            setCombinedHeight(totalHeight);
        }
    }, []);

    const createList = (columns: number) => {
        const techItemArrays: JSX.Element[][] = Array.from({ length: columns }, () => []);
        
        techItems.forEach((item, i) => {
            techItemArrays[i % columns].push(<ListItem key={i}>{item}</ListItem>);
        });

        return techItemArrays.map((array, i) => 
            <List key={i} className={classes.techList}>
                {array}
            </List>);
    }

    return (
        <Container className={classes.root} 
            mih={
                (() => {
                    const currentRef = (aboutRef as React.MutableRefObject<any>).current;
                    if (currentRef) {
                        return (props.vpHeight > combinedHeight) ? `${combinedHeight * ( 1 - props.vpHeight)}px` : '100vh' ;
                    }
                    return 'auto';
                })()
            } 
            pt={`calc(${props.headerHeight}px + 1vh`} px={0} ml={0} ref={aboutRef}>
            <Title order={2} className='section-header'>About Me</Title>
            <Flex align='flex-start' className={classes.section}>
                <Stack className={classes.infoSection}>
                    <Text>
                        Hi, my I'm Brandon and I'm a senior Computer Science student at Texas State University graduating December of 2025. I'm constantly seeking opportunities 
                        to expand my knowledge and skills in areas that interest me.
                        <br/><br/>
                        I'm currently looking for a full-time software engineering position starting in 2026.
                    </Text>
                    <Container className={classes.listContainer} visibleFrom='sm'>
                        <Text className={classes.listContText} style={{textAlign: 'center'}}>Here are a few of the technologies that I'm proficient in:</Text>
                        <Group className={classes.techLists} align='top'>
                            {
                                createList((props.isMdWidth ? 2 : 4))
                            }
                        </Group>
                    </Container>
                </Stack>
                <Image src='self-portrait.jpg' className={classes.selfImage} visibleFrom='xs'/>
            </Flex>
            <Container className={classes.listContainer} hiddenFrom='sm'>
                <Text className={classes.listContText} style={{textAlign: 'center'}}>Here are a few of the technologies that I'm proficient in:</Text>
                <Group className={classes.techLists} align='top'>
                    {
                        createList((props.isMdWidth ? 2 : 4))
                    }
                </Group>
            </Container>
        </Container>
    );
});

export default AboutMe;