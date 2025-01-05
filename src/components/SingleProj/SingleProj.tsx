import React from 'react';
import { Container, Divider, Flex, Group, Image, Space, Stack, Text, Title } from '@mantine/core';
import classes from './SingleProj.module.css';
import { SiGithub } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";

interface SingleProjProps { 
    name: string;
    description: string;
    image: string;
    github: string;
    deployed: string; 
}

const SingleProj: React.FC<SingleProjProps> = (props) => {
    return (
        <>
            <Divider mb={'2rem'} size={1.5} labelPosition='left' color={'var(--mantine-color-zomp)'} label={<Title order={3} className={classes.title}>{props.name}</Title>} />
            <Stack pb={'2rem'} pl={'1.5rem'}>
                <Flex wrap='nowrap' dir='column'>
                    <Image src={props.image} alt={props.name.toLowerCase().replace(/\s/g, '-')} 
                        style={{ borderRadius: '10px' }} 
                        classNames={{
                            root: classes.imgRoot,
                        }}
                    />
                    <Stack ml={'1.5rem'}>
                        <Text style={{ verticalAlign: 'top', alignSelf: 'flex-start', textWrap: 'wrap' }}>{props.description}</Text>
                        <Group>
                            <a href={props.github} target="_blank" rel="noreferrer">
                                <SiGithub size={35} color='var(--mantine-color-viridian)' />
                            </a>
                            <Space />
                            <a href={props.deployed} target="_blank" rel="noreferrer">
                                <LuExternalLink size={35} color='var(--mantine-color-viridian)' />
                            </a>
                        </Group>
                    </Stack>
                </Flex>
            </Stack>
        </>
    );
};

export default SingleProj;