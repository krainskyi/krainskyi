import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img alt='' src="https://benjaminmoore.lviv.ua/image/catalog/bmlogosm.jpg"/>
            <div> Main</div>
            <div>About us</div>
            <div>Contact</div>
        </header>
    )
}
export default Header;
