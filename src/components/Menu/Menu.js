import React from 'react'
import { Link, Route } from 'react-router-dom'

export default function Menu() {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to='/'>WebSiteName</Link>
                </div>
                <ul className="nav navbar-nav">
                    {showMenu(menus)}
                </ul>
            </div>
        </nav>
    )

    function showMenu(menus) {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return <CustomLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />;
            })
        }
        return result;
    }
}
const menus = [
    {
        name: "Trang chủ",
        to: '/',
        exact: true
    },
    {
        name: "Quản lý sản phẩm",
        to: '/product',
        exact: true
    }
];

const CustomLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active' : ''
            return (
                <li className={active}>
                    <Link to={to}>{label}</Link>
                </li>
            )
        }} />
    )
}