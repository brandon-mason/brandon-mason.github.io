import { MantineComponent, Container, Title } from '@mantine/core';
import classes from './Projects.module.css';
import { forwardRef } from 'react';
import SingleProj from '../SingleProj/SingleProj';

interface ProjectProps {
    headerHeight: number;
}

const Projects = forwardRef<MantineComponent<any>, ProjectProps>((props, projectRef) => {
    return (
        <Container mih={'100vh'} ref={projectRef} pt={`calc(${props.headerHeight}px + 1vh`} px={0} ml={0} className={classes.container}>
            <Title order={2} className={classes.title}>Projects</Title>
            <SingleProj 
                name="Recordable Midi Piano"
                description="This is a description of the project."
                imgSrc="project-images/piano.png"
                hostLink="https://example.com"
                repoLink="https://github.com/example/repo"/>
        </Container>
    );
});

export default Projects;