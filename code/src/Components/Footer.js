import React from 'react';

import logo from './assests/logo.svg'

const Footer = () => {
    return (
        <footer>
            <img className="logo" src={logo}></img>
            <div className="footer-info">
                <p>Project 11 - Happy Thoughts</p>
                <p>Anna Hellqvist @ Technigo Bootcamp Fall 2020</p>
                <div>
                    <p>
                        <a href="https://github.com/AnnaHellqvist">GitHub</a> - <a href="https://www.linkedin.com/in/anna-hellqvist-62168466/">LinkedIn</a> - <a href="">Medium</a>
                    </p>
                </div>
            </div>
            <p className="reference">Background by <a href="https://unsplash.com/@freestocks?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">freestocks</a> on <a href="https://unsplash.com/s/photos/hearts?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></p>
        </footer>
    )
};

export default Footer;