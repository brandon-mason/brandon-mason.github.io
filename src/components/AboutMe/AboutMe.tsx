import { Container, MantineComponent, Title, Text, Accordion, Group, Image, Stack, List, ListItem } from '@mantine/core';
import { forwardRef, useEffect } from 'react';
import classes from './AboutMe.module.css';
import IconAccordion from '../IconAccordion/IconAccordion';
import { useViewportSize } from '@mantine/hooks';
import techItems from '../../../public/technologies.json';

interface AboutMeProps {
    headerHeight: number;
    isMd: boolean | undefined;
}

const AboutMe = forwardRef<MantineComponent<any>, AboutMeProps>((props, aboutRef) => {
    // const techItems = [
    //     "React",
    //     "HTML5",
    //     "TypeScript",
    //     "CSS3",
    //     "Mantine",
    //     "C++",
    //     "Java",
    //     "MongoDB",
    //     "MySQL",
    //     "Git",
    // ];
    
    const techLists: JSX.Element[] = [];

    // const techItemArrays: JSX.Element[][] = [
    //     techItems.slice(0, techItems.length / 2).map((tech, i) => (
    //         <ListItem key={i}>{tech}</ListItem>
    //     )),
    //     techItems.slice(techItems.length / 2).map((tech, i) => (
    //         <ListItem key={i}>{tech}</ListItem>
    //     )),
    // ];
    const techItemArrays: JSX.Element[][] = [];


    // useEffect(() => {
    //     // if(props.isMd) {
    //     //     techItemArrays.map((techItemArray, i) => {
    //     //         techLists.push(<List>
    //     //             {techItemArrays[0]}
    //     //         </List>);
    //     //     })
    //     //     };
    //     //     console.log(techLists);
    //     let listCounter = 0;

    //     const techItems = [
    //         "React",
    //         "HTML5",
    //         "TypeScript",
    //         "CSS3",
    //         "Mantine",
    //         "C++",
    //         "Java",
    //         "MongoDB",
    //         "MySQL",
    //         "Git",
    //     ];

    //     const techItemArrays: JSX.Element[][] = [];

    //     if(props.isMd) {
    //         techItems.forEach((item, i) => {
    //             console.log(listCounter);
    //             techItemArrays[listCounter].push(<ListItem key={i}>{item}</ListItem>);
    //             if(listCounter === 0 && i >= techItems.length / 2 - 1) {
    //                 listCounter++;
    //             }
    //         });
    //     }
    //     console.log(techItemArrays);
    //     console.log(props.isMd);
    // }, [props.isMd]);

    const createList = (rows: number) => {
        let listCounter = 0;

        // const techItems = [
        //     "React",
        //     "HTML5",
        //     "TypeScript",
        //     "CSS3",
        //     "Mantine",
        //     "C++",
        //     "Java",
        //     "MongoDB",
        //     "MySQL",
        //     "Git",
        //     "Github",
        //     "VS Code",
        // ];

        const techItemArrays: JSX.Element[][] = [];
        for(let i = 0; i < rows; i++) {
            techItemArrays.push([]);
        }

        // if(props.isMd) {
            techItems.forEach((item, i) => {
                console.log(techItemArrays[listCounter]);
                techItemArrays[listCounter].push(<ListItem key={i}>{item}</ListItem>);
                if(listCounter === 0 && i >= techItems.length / 2 - 1) {
                    listCounter++;
                }
            });
        // }
        // console.log(techItemArrays);
        // console.log(props.isMd);

        return techItemArrays.map((array, i) => 
            <List key={i} className={classes.techList}>
                {array}
            </List>);
    }


    return (
        <Container className={classes.root} mih={'90vh'} pt={`calc(${props.headerHeight}px + 1vh`} px={0} ml={0} ref={aboutRef}>
            <Title order={2} className={classes.title}>About Me</Title>
            <Group align='flex-start'>
                <Stack className={classes.infoSection}>
                    <Text>
                        Hi! I'm Brandon, a senior Computer Science student at Texas State University.
                        I started writing code in high school, and have been hooked ever since. I love
                        problem solving and creating new things, and I'm always looking for ways to expand 
                        on my knowledge and skills in any activity or subject that I'm interested in.
                        <br/><br/>
                        I'm currently looking for a software engineering internship this summer, and a 
                        full-time position after I graduate in the Fall. I'm excited to see where my career
                        will go, and am excited to have the opportunity to experiment with any new technologies.

                    </Text>
                    {/* <IconAccordion/> */}
                </Stack>
                <Image src='self-portrait.jpg' className={classes.selfImage}/>
            </Group>
            <Container className={classes.listContainer}>
                <Text className={classes.listContText} style={{textAlign: 'center'}}>Here are a few of the technologies that I'm proficient in:</Text>
                {/* <Group className={classes.techGroup} visibleFrom='sm'>
                    {techLists}
                </Group> */}
                {/* <List className={classes.techList}>
                    {
                        techItemArrays.map(array => 
                            <List>
                                {array}
                            </List>
                    )}
                </List> */}
                <List className={classes.techLists}>
                    {
                        createList((props.isMd ? 2 : 4))
                    }
                </List>
                {/* <List className={classes.techList}>
                    {techLists}
                </List> */}
            </Container>
        </Container>
    );
});

export default AboutMe;