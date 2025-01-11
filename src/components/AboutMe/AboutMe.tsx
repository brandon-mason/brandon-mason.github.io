import { Container, MantineComponent, Title, Text, Accordion, Group, Image, Stack, List, ListItem } from '@mantine/core';
import { forwardRef } from 'react';
import classes from './AboutMe.module.css';
import IconAccordion from '../IconAccordion/IconAccordion';
import { useViewportSize } from '@mantine/hooks';

interface AboutMeProps {
    headerHeight: number;
}

const AboutMe = forwardRef<MantineComponent<any>, AboutMeProps>((props, aboutRef) => {
    const techItems = [
        "React",
        "HTML5",
        "TypeScript",
        "CSS3",
        "Mantine",
        "C++",
        "Java",
        "MongoDB",
        "MySQL",
        "Git",
    ];

    const techItemArrays: JSX.Element[][] = [
        techItems.slice(0, techItems.length / 2).map((tech, i) => (
            <ListItem key={i}>{tech}</ListItem>
        )),
        techItems.slice(techItems.length / 2).map((tech, i) => (
            <ListItem key={i}>{tech}</ListItem>
        )),
    ];

    const techLists: JSX.Element[] = [
        <List className={classes.techList}>
            {techItemArrays[0]}
        </List>,
        <List className={classes.techList}>
            {techItemArrays[1]}
        </List>,
    ];

    return (
        <Container className={classes.root} mih={'100vh'} pt={`calc(${props.headerHeight}px + 1vh`} px={0} ml={0} ref={aboutRef}>
            <Title order={2} className={classes.title}>About Me</Title>
            <Group align='flex-start'>
                <Stack>
                    <Text>This is the About Me section of the portfolio.</Text>
                    {/* <IconAccordion/> */}
                    <Container>
                        <Text style={{textAlign: 'center', fontSize: '1.1rem'}}>Here's some technologies that I'm proficient in.</Text>
                        <Group className={classes.techGroup}>
                            {techLists}
                        </Group>
                    </Container>
                </Stack>
                <Image src='self-portrait.jpg' className={classes.selfImage}/>
            </Group>
        </Container>
    );
});

export default AboutMe;