import React from 'react';
import { Container, Group, Image, Stack, Text, Title } from '@mantine/core';
import classes from './SingleProj.module.css';

interface SingleProjProps { 
    name: string;
    description: string;
    imgSrc: string;
    hostLink: string; 
    repoLink: string;
}

const SingleProj: React.FC<SingleProjProps> = (props) => {
    return (
        <Stack>
            <Title order={3}>{props.name}</Title>
            <Group>
                <Image src={props.imgSrc} alt={props.name.toLowerCase().replace(/\s/g, '-')} 
                    style={{ borderRadius: '10px' }} 
                    classNames={{
                        root: classes.imgRoot,
                    }}
                />
                <Text>{props.description}</Text>
            </Group>
        </Stack>
    );
};

export default SingleProj;