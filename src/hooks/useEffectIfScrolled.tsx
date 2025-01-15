import { useEffect, useRef } from "react";

const useEffectIfScrolled = (setHasScrolled: (hasScrolled: boolean) => void, scrollState: boolean) => { 
    const isScrolled = useRef(scrollState);

    useEffect(() => {
        if (isScrolled.current) {
            return;
        }
        if (scrollState) {
            isScrolled.current = true;
            setHasScrolled(true);
        }
    }, [scrollState, setHasScrolled]);
}

export { useEffectIfScrolled };