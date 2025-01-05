import { MantineComponent, Container, Title } from '@mantine/core';
import classes from './Projects.module.css';
import { forwardRef } from 'react';
import SingleProj from '../SingleProj/SingleProj';
import projects from '../../../public/projects.json';

interface ProjectProps {
    headerHeight: number;
}

interface Project {
    name: string;
    description: string;
    image: string;
    github: string;
    deployed: string;
}

const Projects = forwardRef<MantineComponent<any>, ProjectProps>((props, projectRef) => {

    const projectList = projects.map((project: Project) => {
        return <SingleProj
            name={project.name}
            description={project.description}
            image={project.image}
            github={project.github}
            deployed={project.deployed}
        />
    });

    return (
        <Container mih={'100vh'} ref={projectRef} pt={`calc(${props.headerHeight}px + 1vh`} px={0} ml={0} className={classes.container}>
            <Title order={2} className={classes.title}>Projects</Title>
            <Container pos={'relative'} w={'100vw'} p={0} className={classes.projectsRoot} >
                {projectList}
            </Container>
        </Container>
    );
});

export default Projects;