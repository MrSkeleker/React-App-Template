import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavigationMenu from './NavigationMenu/NavigationMenu';


function Navigation() {
    const [displayMenu, setDisplayMenu] = useState(false);

    const fadeTransitions = useTransition(displayMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const slideTransitions = useTransition(displayMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    return (
        <nav className="">
            <span className="text-xl">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setDisplayMenu(!displayMenu)} />
            </span>
            {fadeTransitions.map(({ item, key, props }) =>
                item
                &&
                <animated.div
                    key={key}
                    style={props}
                    className='fixed bg-black-t-50 top-0 left-0 h-full w-full z-10'
                    onClick={() => setDisplayMenu(false)}
                ></animated.div>
            )}
            {slideTransitions.map(({ item, key, props }) =>
                item
                &&
                <animated.div
                    key={key}
                    style={props}
                    className="fixed bg-white top-0 left-0 h-full w-4/5 z-20 shadow p-3"
                >
                <NavigationMenu closeMenu={()=>setDisplayMenu(false)} />
                </animated.div>
            )}
        </nav>
    )
}

export default Navigation;