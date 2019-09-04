import  { store } from '../../index.js';
import { logout } from '../../store/actions/authActions.js';

let linkItem = () => {
    return `<a>` + store.getState().email + `</a>`;
}

let Navbar = {
    render : async () => {
        return (/*html*/ `
            <nav class="blue">
                <div class="nav-wrapper container">
                    <a href="#" class="logo">Letærn</a>
                    <ul id="nav-mobile" class="right">
                        <div id="navbar-links"></div>
                    </ul>
                </div>
            </nav>
        `);
    },
    after_render : async () => {
        const token = localStorage.getItem('token');
        let navItems = '';
        if (token === null) {
            navItems = (/*html*/`
                <li><a href="/public/#/login">Login</a></li>
            `)
            document.getElementById('navbar-links').innerHTML = navItems;
        } else {
            navItems = (/*html*/`
                <li><a>` + store.getState().email + /*html*/`</a></li>
                <li><a href="/public/#/login" id="logout">Logout</a></li>
            `);
            document.getElementById('navbar-links').innerHTML = navItems;
            document.getElementById('logout').addEventListener('click', () => logout());
        }
    }
}

export default Navbar;