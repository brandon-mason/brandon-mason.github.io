import { Burger, Container, Group, MantineComponent, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { forwardRef } from 'react';

interface Link {
    link: string;
    label: string;
    class: string;
    target?: string;
    scrollIntoView?: (ref: React.MutableRefObject<any>) => void;
    ref?: React.MutableRefObject<any>;
}

interface HeaderProps {
    ref: React.MutableRefObject<any>;
    scroll: boolean;
    refObj: {
        Home: React.MutableRefObject<any>;
        About: React.MutableRefObject<any>;
        Projects: React.MutableRefObject<any>;
        Resume: React.MutableRefObject<any>;
    };
    setSelectedSection: (ref: React.MutableRefObject<any>) => void;
    setHash: (value: string) => void;
    // scrollIntoView: (ref: React.MutableRefObject<any>) => void;
}

const Header = forwardRef<MantineComponent<any>, HeaderProps>((props, headerRef) => {
    const [opened, { open, close }] = useDisclosure();

    const links: Link[] = [
        { link: '/#home', label: 'Home', ref: props.refObj.Home, class: "home" },
        { link: '/#about', label: 'About Me', ref: props.refObj.About, class: "about-me" },
        { link: '/#projects', label: 'Projects', ref: props.refObj.Projects, class: "projects" },
        { link: 'https://docs.google.com/document/d/1AQZoarByG7TqT1GTa6TpMQrMAzRy5fyqJ4XqPzxWmjw/preview', label: 'Resume', class: "resume-link", target: '_blank' },
        { link: '/#resume', label: 'Resume', ref: props.refObj.Resume, class: "resume" },
        { link: '/#contact', label: 'Contact Me', class: "contact" },
    ];

    const items: JSX.Element[] = links.map((link: Link) => (
        <a
        key={link.label}
        href={link.link}
        target={link.target}
        className={[classes.link, link.class + "-header"].join(' ')}
        onClick={() => {
            if (link.ref && link.ref.current) {
                props.setSelectedSection(link.ref);
                close();
            }
        }}
        >
        {link.label}
        </a>
        
    ));

    return (
        <>
            <header ref={headerRef} id="header" style={{ boxShadow: (props.scroll) ? 'rgba(0, 0, 0, 0.15) 0px 3px 8px 0px' : 'none' }}>
                <Container className={classes.inner} fluid >
                    <Group gap={5} visibleFrom="xs">
                        {items}
                    </Group>

                    <Burger opened={opened} onClick={(opened) ? close : open} hiddenFrom="xs" size="lg" className={classes.burger}/>

                </Container>
                <Modal opened={opened} onClose={close} withCloseButton={false} yOffset={0} closeOnClickOutside transitionProps={{transition: 'slide-left'}}
                    className={classes.modal}
                    classNames={{
                        root: classes.modalRoot,
                        header: classes.modalHeader,
                        title: classes.modalTitle,
                        inner: classes.modalInner,
                        body: classes.modalBody,
                        content: classes.modalContent,
                        overlay: classes.modalOverlay,
                    }}
                >
                    {items}
                </Modal>
            </header>
        </>
    );
});

export default Header;