import { Anchor, Box, Button, Flex, MantineComponent, Stack, Text, Title } from '@mantine/core';
import classes from './Home.module.css';
import { forwardRef } from 'react';

interface HomeProps {
    vpWidth: number;
    headerHeight: number;
    isLgHeight: boolean | undefined;
    buttonRef: React.MutableRefObject<any>;
    projectRef: React.MutableRefObject<any>;
}

const Home = forwardRef<MantineComponent<any>, HomeProps>((props, homeRef) => {

    return (
        <Flex
            ref={homeRef}
            className={classes.root}
            pt={props.isLgHeight ? `calc(${props.headerHeight}px + 1vh)` : ''}
        >
            <Stack classNames={classes}
                justify="center"
                align="flex-start"
                gap="xs"
            >
                <Box pr={(props.vpWidth < 1024) ? "0" : "10vh"}>
                    <Text className={classes.introtext}>
                    Hi there, I'm
                    </Text>
                    <Title ta="left" fw={900} className={classes.title}>
                    Brandon Mason.
                    </Title>
                    <Text ta="left" className={classes.text}>
                    I am pursuing a <strong>Bachelor of Science in Computer Science</strong> degree at Texas State University, with plans to graduate in December 2025. 
                    While most of my projects are web-based, I have a strong foundation in various programming languages, including C++ and Java.
                    </Text>
                    <Text classNames={{root: classes.resumeRoot}} > Take a look at my <Anchor href='Resume.pdf' target='_blank'>resume</Anchor>,</Text>
                    <Text classNames={{root: classes.githubRoot}} > and explore my work on <Anchor href='https://github.com/brandon-mason' target='_blank'>GitHub</Anchor>.</Text>
                </Box>
                <a href={'#projects'}>
                    <Button 
                        color={'var(--mantine-color-viridian)'} 
                        className={classes.button}
                        size='md'
                        style={{width: '40%', minWidth: '300px', color: 'var(--mantine-color-mint)', position: 'static'}}
                        ref={props.buttonRef}
                    >
                        Check out some of my work!
                    </Button>
                </a>
            </Stack>
        </Flex>
    );
});

export default Home;