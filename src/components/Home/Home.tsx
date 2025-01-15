import { Anchor, Box, Button, Flex, MantineComponent, Stack, Text, Title } from '@mantine/core';
import classes from './Home.module.css';
import { forwardRef } from 'react';

interface HomeProps {
    vpWidth: number;
    headerHeight: number;
    isLgHeight: boolean | undefined;
    buttonRef: React.MutableRefObject<any>;
    projectRef: React.MutableRefObject<any>;
    setSelectedSection: (ref: React.MutableRefObject<any>) => void;
    scrollIntoView: (ref: React.MutableRefObject<any>) => void;
    setHash: (value: string) => void;
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
                    Hi there, my name is
                    </Text>
                    <Title ta="left" fw={900} className={classes.title}>
                    Brandon Mason.
                    </Title>
                    <Text ta="left" className={classes.text}>
                    I am pursuing a <strong>Bachelor of Science in Computer Science</strong> degree at Texas State University 
                    and will be graduating in December of 2025. Most of my projects are web based but I am well versed in many other 
                    languages such as C++ and Java.
                    </Text>
                    <Text classNames={{root: classes.resumeRoot}} > You can view my <Anchor href='Resume.pdf' target='_blank'>resume here</Anchor>.</Text>
                </Box>
                <Button 
                    color={'var(--mantine-color-viridian)'} 
                    className={classes.button}
                    size='md'
                    style={{width: '40%', minWidth: '260px', color: 'var(--mantine-color-mint)', position: 'static'}}
                    ref={props.buttonRef}
                    onClick={() => {
                        props.setSelectedSection(props.projectRef);
                        props.scrollIntoView(props.projectRef);
                        close();
                    }}
                >
                    Check out some of my work!
                </Button>
            </Stack>
        </Flex>
    );
});

export default Home;