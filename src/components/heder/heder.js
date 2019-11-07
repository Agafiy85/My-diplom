import React from 'react';
import "./heder.scss";



class Heder extends React.Component {
    render() {
        return (
            <header>
                <div class="container-fluid top-header">
                    <div class="container">
                        <div class="row for-xl-top-header-main">
                            <div class="col-xl-9 col-lg-9 col-md-12">
                                <div class="call">
                                    <p class="normal"></p>
                                    <span class="call__text">Toll for free: <a href="#" class="number">+38 - 0673542788</a></span>
                                    <p class="active"></p>
                                    <span class="call__text">Call now: <a href="#" class="number">+38 - 0673542788</a></span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-3">
                                <div class="socials">
                                    <p class="socials__text">Join us:</p>
                                    <div class="social__icons">
                                        <a href="#">
                                            <p class="socials__pinterest"></p>
                                        </a>

                                        <a href="#">
                                            <p class="socials__facebook"></p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container middle-header">
                    <div class="row for-xl-logo-nav">
                        <div class=" head col-xl-3 col-lg-12 col-md-12 col-sm-6 col-9 col-xs-center">
                            <div class="logo">
                                <img src="../img/logo1.png" alt="logo" />
                            </div>
                        </div>
                        <div class="col-xl-9 col-lg-12 col-md-12 col-sm-6 col-3 col-xs-hiden">
                            <nav>
                                <ul class="nav__list">
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="galerey.html">Galerey</a>
                                    </li>

                                    <li><a href="Blog.html">Blog</a>
                                    </li>

                                    <li><a href="Login.html">Login</a>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                        <div id="menuToggle">

                            <input type="checkbox" />

                            <span></span>
                            <span></span>
                            <span></span>

                            <ul id="menu">
                                <a href="index.html"><li>Home</li></a>
                                <a href="galerey.html"><li>Galerey</li></a>
                                <a href="Blog.html"><li>Blog</li></a>
                                <a href="Login.html"><li>Login</li></a>

                            </ul>
                        </div>
                        <nav role="navigation">

                        </nav>
                    </div>
                </div>
            </header>

        );
    }
}

export default Heder;