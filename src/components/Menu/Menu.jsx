import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { menuHandler } from '../../app/menuAction';

import styles from './Menu.module.css';

function Menu() {
    const isOpened = useSelector(state => state.menu.value);

    return (
        <div className={isOpened ? styles.menu_opened : null}>
            <HamburgerMenu />
            <MenuList />
        </div>
    );
};



function MenuList() {
    const menuItems = [
        {
            title: 'Информация о Проекте',
            path: '/'
        },
        {
            title: 'Строительные работы',
            path: '/construction_works'
        },
        {
            title: 'Конструкции Проекта',
            path: '/project_designs'
        },
        {
            title: 'Программа работ',
            path: '/work_program'
        },
        {
            title: 'Требования к качеству и охране окружающей среды',
            path: '/requirements'
        },
        {
            title: 'Вовлеченные стороны Проекта',
            path: '/project_stakeholders'
        },
        {
            title: 'Новости Проекта',
            path: '/news'
        },
        {
            title: 'Контакты и обратная связь',
            path: '/contact_us'
        }
    ];

    return (
        <nav className={styles.menu_list}>
            {menuItems.map((menuItem, index) => <MenuItem title={menuItem.title} path={menuItem.path} key={`menu-item-${index}`} />)}
        </nav>
    );
};

function MenuItem({ title, path }) {
    const dispatch = useDispatch();

    function closeMenu() {
        dispatch(menuHandler(false));
    };

    return <NavLink
        to={path}
        className={({ isActive }) => isActive ? `${styles.menu_item} ${styles.active}` : styles.menu_item}
        onClick={() => closeMenu()}>{title}</NavLink>
};

function HamburgerMenu() {
    const dispatch = useDispatch();

    function closeMenu() {
        dispatch(menuHandler());
    };

    return (
        <div className={styles.hamburger_menu} onClick={() => closeMenu()}>
            <div className={styles.hamburger_menu_line}></div>
            <div className={styles.hamburger_menu_line}></div>
            <div className={styles.hamburger_menu_line}></div>
        </div>
    );
};


export default Menu;