import React from 'react';
import "./footer.scss";

class Footer extends React.Component {
    render() {
        return (

            <footer>
                <div class="container-fluid d-xl-block d-flex d-none footer-botom">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-4 d-xl-block d-none">
                                <div class="img-logo-wrapper">
                                    <img class="logo1" src="../img/logo1.png" alt="Logo"></img>

                                </div>

                                <div class="under-logo_text">
                                    <p class="text5">Call now: +38-067-3542288</p>
                                    <p class="text5">Email: bejliz@kr.net</p>
                                </div>
                            </div>
                            <div class="col-xl-8  ">

                                <div class="text-wrapper1 d-xl-block d-flex d-none">
                                    <p class="brend">Ексклюзивний та креативний виріб - це запорука вдалого подарунку!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid middle-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-3 d-md-flex align-items-center d-none">
                                <div class="social-footer d-flex justify-content-xl-end align-items-center">
                                    <span class="social__text">
                                        Join us:
                                    </span>
                                    <div class="social__icons">

                                        <a href="#">
                                            <p class="socials__twitter"></p>
                                        </a>
                                        <a href="#">
                                            <p class="socials__facebook"></p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-9 col-lg-9 col-md-9 d-flex align-items-center justify-content-center">
                                <div class="write">
                                    <p class="copy-write">
                                        HendMade © 2019 OnlyService.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        

        </footer>
        

        )
    };

}









export default Footer;