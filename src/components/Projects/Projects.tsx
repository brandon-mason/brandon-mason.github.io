import { MantineComponent, Container, Title } from '@mantine/core';
import classes from './Projects.module.css';
import { forwardRef } from 'react';
import SingleProj from '../SingleProj/SingleProj';
import projects from '../../../public/projects.json';

interface ProjectProps {
    headerHeight: number;
    isMd?: boolean | undefined;
}

interface Project {
    id: number;
    name: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    deployed: string;
}

const Projects = forwardRef<MantineComponent<any>, ProjectProps>((props, projectRef) => {

    const projectList = projects.map((project: Project) => {
        return <SingleProj key={project.id} isMd={props.isMd} {...project} />
    });

    return (
        <Container ref={projectRef} mih={'100vh'} pt={`calc(${props.headerHeight}px + 1vh`} px={0} ml={0} classNames={{root: classes.projectsRoot}}>
            <Title order={2} className={classes.title}>Projects</Title>
            <Container p={0} className={classes.projectsRoot} >
                {projectList}
            </Container>
        </Container>
    );
});

export default Projects;