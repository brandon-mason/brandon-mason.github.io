import { forwardRef } from 'react';
import classes from './Resume.module.css';
import { Anchor, Box, Container, MantineComponent, Title } from '@mantine/core';

interface ResumeProps {
    headerHeight: number;
}

const Resume = forwardRef<MantineComponent<any>, ResumeProps>((props, resumeRef) => {
    return (
        <Container pt={`calc(${props.headerHeight}px + 1vh`} px={0} mx={0} ref={resumeRef} className='resume-container' classNames={{root: classes.resumeRoot}}>
            <Title order={2} className={classes.title}>Resume</Title>
            <Anchor href='Resume.pdf' target='_blank'>Link</Anchor>
            <Box visibleFrom='xs' mih={'68vh'}>
                <iframe src="https://docs.google.com/document/d/1AQZoarByG7TqT1GTa6TpMQrMAzRy5fyqJ4XqPzxWmjw/preview?embedded=true" width='100%' min-height='80vh' style={{ borderRadius: '10px', zoom: '0.9' }}></iframe>
            </Box>
        </Container>
    );
});

export default Resume;