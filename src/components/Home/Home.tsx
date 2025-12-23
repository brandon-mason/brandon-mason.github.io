import { Anchor, Box, Button, Flex, MantineComponent, Stack, Text, Title } from '@mantine/core';
import { forwardRef } from 'react';
import { LuExternalLink } from 'react-icons/lu';
import classes from './Home.module.css';

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
                    I graduated from Texas State University in December of 2025 with a <strong>Bachelor of Science in Computer Science</strong>.
                    I am currently employed at University Federal Credit Union as an Application Developer working on their web banking application.
                    </Text>
                    <Text classNames={{root: classes.resumeRoot}} > Take a look at my <Anchor className='linkText' href='Resume.pdf' target=''>resume<LuExternalLink className='externalLinkSvg'/></Anchor>,</Text>
                    <Text classNames={{root: classes.githubRoot}} > and explore my work on <Anchor className='linkText' href='https://github.com/brandon-mason' target=''>GitHub<LuExternalLink className='externalLinkSvg'/></Anchor>.</Text>
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