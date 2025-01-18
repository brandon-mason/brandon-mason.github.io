import { Container, MantineComponent, Title, Text, Accordion, Group, Image, Stack, List, ListItem } from '@mantine/core';
import { forwardRef, useEffect, useState } from 'react';
import classes from './AboutMe.module.css';
import IconAccordion from '../IconAccordion/IconAccordion';
import { useViewportSize } from '@mantine/hooks';
import techItems from './technologies.json';
import { comma } from 'postcss/lib/list';

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

    const createList = (rows: number) => {
        let listCounter = 0;
        const techItemArrays: JSX.Element[][] = [];

        for(let i = 0; i < rows; i++) {
            techItemArrays.push([]);
        }
            techItems.forEach((item, i) => {
                techItemArrays[listCounter].push(<ListItem key={i}>{item}</ListItem>);
                if(listCounter === 0 && i >= techItems.length / 2 - 1) {
                    listCounter++;
                }
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
            <Title order={2} className={classes.title}>About Me</Title>
            <Group align='flex-start'>
                <Stack className={classes.infoSection}>
                    <Text>
                        Hi, I'm Brandon! I'm a senior Computer Science student at Texas State University with a 
                        passion for coding that started back in high school. Ever since writing my first lines of code, 
                        I've been hooked on problem-solving and creating new things. I'm constantly seeking opportunities 
                        to expand my knowledge and skills in areas that interest me.
                        <br/><br/>
                        I'm currently looking for a software engineering internship for this summer and a 
                        full-time position after I graduate in the fall. I'm excited to see where my career 
                        takes me and eager to explore and experiment with new technologies along the way.

                    </Text>
                </Stack>
                <Image src='self-portrait.jpg' className={classes.selfImage}/>
            </Group>
            <Container className={classes.listContainer}>
                <Text className={classes.listContText} style={{textAlign: 'center'}}>Here are a few of the technologies that I'm proficient in:</Text>
                <List className={classes.techLists}>
                    {
                        createList((props.isMdWidth ? 2 : 4))
                    }
                </List>
            </Container>
        </Container>
    );
});

export default AboutMe;