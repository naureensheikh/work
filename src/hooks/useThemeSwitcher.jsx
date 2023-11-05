import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
	const [theme, setTheme] = useState(localStorage.theme);
	const activeTheme = theme === 'dark' ? 'light' : 'dark';
	//const activeTheme = theme === 'dark' ? 'dark' : 'dark';

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove(activeTheme);
		console.log(activeTheme)
		console.log(theme)
		root.classList.add(theme);
		localStorage.setItem('theme', theme);
	}, [theme, activeTheme]);

	return [activeTheme, setTheme];
};

export default useThemeSwitcher;
