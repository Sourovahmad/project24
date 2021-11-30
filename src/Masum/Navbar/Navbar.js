import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar_area'>
            <div className='container'>
                <nav class="d-flex justify-content-between navbar navbar-expand-lg navbar-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="text-center navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Whitepaper</a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" href="#">Mint</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Claim</a>
                            </li> */}
                            <li class="nav-item">
                                <a class="nav-link" href="#">Stake</a>
                            </li>
                        </ul>
                    </div>

                    <div className='social_area'>
                        <a href="https://discord.gg/zM47G5YJRs" target="_blank"><FontAwesomeIcon icon={faDiscord} /></a>
                        <a href='https://twitter.com/CopsandCartels' target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                        <button className='btn'>CONNECT WALLET</button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;