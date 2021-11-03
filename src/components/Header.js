function Header({onDarkModeClick, DarkMode}) {
return (
    <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
            {DarkMode ? "Dark" : "Light"} Mode
        </button>
    </header>
)
}

export default Header
