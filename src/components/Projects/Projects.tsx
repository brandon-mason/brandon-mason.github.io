import { MantineComponent, Container, Title } from '@mantine/core';
import classes from './Projects.module.css';
import { forwardRef, useEffect, useState } from 'react';
import SingleProj from '../SingleProj/SingleProj';
import projects from '../../../public/projects.json';

interface ProjectProps {
    headerHeight: number;
    isMdWidth?: boolean | undefined;
    vpHeight: number;
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

const Projects = forwardRef<MantineComponent<any>, ProjectProps>((props, projectRef: React.ForwardedRef<any>) => {
    const [combinedHeight, setCombinedHeight] = useState(0);

    useEffect(() => {
        const currentRef = (projectRef as React.MutableRefObject<any>).current;
        if (currentRef) {
            const children = currentRef.children;
            let totalHeight = 0;
            for (let i = 0; i < children.length; i++) {
                totalHeight += children[i].clientHeight;
            }
            setCombinedHeight(totalHeight);
        }
    }, []);

    const projectList = projects.map((project: Project) => {
        return <SingleProj key={project.id} isMdWidth={props.isMdWidth} {...project} />
    });

    return (
        <Container ref={projectRef} pt={`calc(${props.headerHeight}px + 1vh`} px={0} ml={0} classNames={{root: classes.projectsRoot}}
            mih={
                (() => {
                    const currentRef = (projectRef as React.MutableRefObject<any>).current;
                    if (currentRef) {
                        return (props.vpHeight > combinedHeight) ? `${combinedHeight * ( 1 - props.vpHeight)}px` : '100vh' ;
                    }
                    return 'auto';
                })()
            } 
        >
            <Title order={2} className={classes.title}>Projects</Title>
            <Container p={0} className={classes.projectsRoot} >
                {projectList}
            </Container>
        </Container>
    );
});

export default Projects;