import React, { useState } from 'react';
import { Container, Divider, Flex, Grid, Group, Image, Space, Spoiler, Stack, Text, Title } from '@mantine/core';
import classes from './SingleProj.module.css';
import { SiGithub } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";

interface SingleProjProps { 
    id: number;
    name: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    deployed: string; 
}

const SingleProj: React.FC<SingleProjProps> = (props) => {
    const [expanded, setExpanded] = useState(false);

    const techList = props.technologies.map((technology: string) => (
        <Grid.Col span="content">
            <Text key={props.id}>{technology}</Text>
        </Grid.Col>
    ));
    
    return (
        <>
            <Divider classNames={{label: classes.divider}} mb={'2rem'} size={1.5} labelPosition='left' color={'var(--mantine-color-zomp)'} label={<Title order={3} className={classes.title}>{props.name}</Title>} />
            <Flex wrap='nowrap' pb={'2rem'} pr={'1.5rem'} className={classes.projInfo}>
                <Container className={classes.imgContainer}>
                    <Image src={props.image} alt={props.name.toLowerCase().replace(/\s/g, '-')} 
                        style={{ borderRadius: '10px' }} 
                        classNames={{
                            root: classes.imgRoot,
                        }}
                    />
                </Container>
                <Stack className={classes.textSection} justify='space-between'>
                    <Text visibleFrom='sm' className={classes.description} style={{ verticalAlign: 'top', alignSelf: 'flex-start', textWrap: 'wrap' }}>{props.description}</Text>
                    <Spoiler showLabel='Show More' hideLabel='Hide' hiddenFrom='sm' classNames={{content: classes.spoiler, root: classes.spoilerRoot}}
                        expanded={expanded}
                        onExpandedChange={setExpanded}
                    >
                        <Text className={classes.description}>{props.description}</Text>
                    </Spoiler>
                    <Grid classNames={{
                        root: classes.techStackGrid,
                        col: classes.techStackCol,
                    }} grow>
                        {techList}
                    </Grid>
                    <Group className={classes.projectLinks}>
                        <a href={props.github} target="_blank" rel="noreferrer" className='projectLink'>
                            <SiGithub size={35} color='var(--mantine-color-zomp)' className='projectLink' />
                        </a>
                        <Space/>
                        <a href={props.deployed} target="_blank" rel="noreferrer" className='projectLink'>
                            <LuExternalLink size={35} color='var(--mantine-color-zomp)' className='projectLink' />
                        </a>
                    </Group>
                </Stack>
            </Flex>
        </>
    );
};

export default SingleProj;