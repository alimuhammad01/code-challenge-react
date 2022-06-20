import {useEffect, useRef} from "react";
import {NavLink, useLocation} from "react-router-dom";
import data from "../../assets/navigation.json";
import './style.scss';

function Header() {
    const slideBar = useRef(null);
      const location = useLocation();

    useEffect(()=> {
        const activeElement =  document.querySelector('.nav_btn.active');
        if(activeElement) {
            const linkWidth = activeElement.clientWidth;
            const sliderPosition = activeElement.offsetLeft;
            slideBar.current.style.width = `${linkWidth}px`;
            slideBar.current.style.left = `${sliderPosition}px`
        }
    }, [slideBar, location.pathname]);

    return (
        <header className={'app_header'}>
            <div className="container">
                <nav>
                    <ul>
                        {data.cities?.map(({section, label})=>(
                            <li key={section}>
                                <NavLink
                                    className={"nav_btn"}
                                    to={section}
                                    activeclassname="active"
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <span ref={slideBar} className={'tab_bar'}/>
                </nav>
            </div>
        </header>
    );
}

export default Header;
