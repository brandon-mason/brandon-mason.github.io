import { forwardRef } from 'react';
import classes from './Resume.module.css';
import { Anchor, Box, Container, MantineComponent, Title } from '@mantine/core';
import { LuExternalLink } from 'react-icons/lu';

interface ResumeProps {
    headerHeight: number;
}

const Resume = forwardRef<MantineComponent<any>, ResumeProps>((props, resumeRef) => {
    return (
        <Container pt={`calc(${props.headerHeight}px + 1vh`} px={0} mx={0} ref={resumeRef} className='resume-container' classNames={{root: classes.resumeRoot}}>
            <Title order={2} className='section-header'>Resume</Title>
            <Anchor className='linkText' href='Brandon_Mason.pdf' target=''>
                PDF Link
                <LuExternalLink className='externalLinkSvg'/>
            </Anchor>
            <Box visibleFrom='xs' mt={'1rem'}>
                <iframe src='Brandon_Mason.pdf' width='100%' min-height='80vh' style={{ borderRadius: '10px', zoom: '0.9' }}></iframe>
            </Box>
        </Container>
    );
});

export default Resume;