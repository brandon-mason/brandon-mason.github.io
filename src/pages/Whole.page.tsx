import Home from '../components/Home/Home';
import Header from '@/components/Header/Header';
import { Container, MantineComponent, ScrollArea } from '@mantine/core';
import classes from './Whole.page.module.css';
import { useEffect, useState, useRef, useCallback } from 'react';
import Projects from '@/components/Projects/Projects';
import AboutMe from '@/components/AboutMe/AboutMe';
import Resume from '@/components/Resume/Resume';
import { useElementSize, useHash, useMediaQuery, useViewportSize } from '@mantine/hooks';
import ScrollArrow from '@/components/ScrollArrow/ScrollArrow';

const WholePage: React.FC = () => {
    const [scrollState, setScrollState] = useState(false);
	const [hash, setHash] = useHash();

	const homeRef = useRef<MantineComponent<any>>(null);
	const aboutRef = useRef<MantineComponent<any>>(null);
	const projectRef = useRef<MantineComponent<any>>(null);
	const resumeRef = useRef<MantineComponent<any>>(null);
	const buttonRef = useRef<MantineComponent<any>>(null);

	const { height: vpHeight, width: vpWidth } = useViewportSize();
	const { ref, width: headerWidth, height: headerHeight } = useElementSize();
    const isMdWidth = useMediaQuery('(max-width: 62em)');
    const isLgHeight = useMediaQuery('(max-width: 75em)');
	
	const refObj = {
		"Home":homeRef,
		"About":aboutRef,
		"Projects":projectRef,
		"Resume":resumeRef,
	};

	// Triggers all scrolling actions for the header and buttons.
	useEffect(() => {
		let key: String = String(hash).charAt(1).toUpperCase() + hash.substring(2, hash.length);
		let sectionRef = refObj[key as keyof typeof refObj];

		if(refObj[key as keyof typeof refObj]) {
			if (sectionRef.current && sectionRef) {
				sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}
	}, [hash]);

	return (
		<>
			<ScrollArea type="auto" scrollbarSize={8} classNames={{
				root: classes.root,
				thumb: classes.thumb,
				scrollbar: classes.scrollbar,
			}} onScrollPositionChange={(position: { x: number; y: number }) => setScrollState((position.y > 0) ? true : false)}>
				<Header ref={ref} scrollState={scrollState} refObj={refObj}/>
				<Container classNames={{root: classes.containerRoot}} pr={''} >
					<Home ref={refObj.Home} vpWidth={vpWidth} headerHeight={headerHeight} isLgHeight={isLgHeight} buttonRef={buttonRef} projectRef={refObj.Projects}/>
					<AboutMe ref={refObj.About} headerHeight={headerHeight} vpHeight={vpHeight} isMdWidth={isMdWidth}/>
					<Projects ref={refObj.Projects} headerHeight={headerHeight} isMdWidth={isMdWidth} vpHeight={vpHeight}/>
					<Resume ref={refObj.Resume} headerHeight={headerHeight}/>
				</Container>
			</ScrollArea>
			<ScrollArrow scrollState={scrollState}/>
		</>
	);
}

export default WholePage;