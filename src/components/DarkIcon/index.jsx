import {useEffect, useState} from 'react';

import './DarkIcon.scss';

function DarkIcon() {
    const [theme, setTheme] = useState("");
    const [label, setLabel] = useState("Change to light theme");

    useEffect(() => {
        const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
        const localStorageTheme = localStorage.getItem("theme");

        if(localStorageTheme == "dark" || localStorageTheme == "light"){
            setTheme(localStorageTheme);
        }else if(systemSettingDark.matches){
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        }else{

        }
        
    }, []); 

    function updateThemeOnHtmlEl( t ) {
        document.querySelector("html").setAttribute("data-theme", t);
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
        var newTheme = theme == "dark" ? "light" : "dark";
        setLabel(`Change to ${newTheme} theme`);
    }, [theme])

    const themeToggle = () => {
        var newTheme = theme == "dark" ? "light" : "dark";
        updateThemeOnHtmlEl(newTheme);
        setTheme(newTheme);
    }

return (
    <div className="darkIcon__DarkIcon" aria-label={label} onClick={themeToggle}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Zm0-1.5v-17a8.5 8.5 0 0 1 0 17Z"/></svg>
    </div>
    );
}
export default DarkIcon;

