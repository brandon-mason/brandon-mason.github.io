import { Divider, Flex, Grid, List, Stack, Text, Title } from '@mantine/core';
import React from 'react';
import classes from './SingleExp.module.css';

interface SingleExpProps { 
    id: number;
    name: string;
    date: string;
    description: string[];
    technologies: string[];
    isMdWidth: boolean | undefined;
}

const SingleExp: React.FC<SingleExpProps> = (props) => {

    const techList = props.technologies.map((technology: string) => (
        <Grid.Col key={technology} span="content" className={classes.techItem}>
            <Text key={props.id}>{technology}</Text>
        </Grid.Col>
    ));

    const bulletList = props.description.map((bullet: string) => (
        <List.Item key={bullet} className={classes.bulletItem}>
            <Text key={props.id}>{bullet}</Text>
        </List.Item>
    ));
    
    return (
        <>
        {
            props.isMdWidth ? 
            <Title order={3} className={classes.title}>{props.name}</Title> :
            <Divider classNames={{label: classes.divider}} size={1.5} labelPosition='left' color={'var(--mantine-color-zomp)'} 
                label={
                    <Title order={3} className={classes.title}>{props.name}</Title>
                } 
            />
        }
            <Text className="" style={{ verticalAlign: 'top', alignSelf: 'flex-start', textWrap: 'wrap' }}>{props.date}</Text>
            <Flex wrap='nowrap' pb={'2rem'} className={classes.expInfo}>
                <Stack className={classes.textSection} justify='space-between'>
                    <List classNames={{
                        root: classes.bulletList,
                    }}>
                        {bulletList}
                    </List>
                    <Grid classNames={{
                        root: classes.techStackGrid,
                        col: classes.techStackCol,
                    }} grow>
                        {techList}
                    </Grid>
                </Stack>
            </Flex>
        </>
    );
};

export default SingleExp;