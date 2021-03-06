import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import img from './images/night.jpg';
import Portfolio from './Portfolio';
import ReactDOM from 'react-dom';
import WOW from 'wowjs';

const styles = {
    heroImage: {
        padding: '5em',
        border: '1px solid white'
    },
    heroText: {
        textAlign: 'center',
        color: 'white',
        padding: '12em'
    },
    button: {
        backgroundColor: '#27285E',
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer'
    },
    effect: {
        color: 'white',
        fontSize: '40px',
        textShadow: 'rgba(0,0,0,.2) 2px 6px 5px,rgba(255,255,255,.4) 0 -4px 30px'
    },
    second: {
        fontSize: '30px'
    }
  };

// var scroll = Scroll.animateScroll;

class Header extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    handleClick1 = () => {
        console.log('this is:', this);
        // window.location.href="#skills"
        scroll.scrollTo(650);
      }
    handleClick2 = () => {
        console.log('this is:');
        // window.location.href="#portfolio"
        scroll.scrollTo(1200);
      }
    handleClick3 = () => {
        console.log('this is:', this);
        // window.location.href="#aboutme"
        scroll.scrollTo(2380);
      }
    handleClick4 = () => {
        console.log('this is:', this);
        // window.location.href="#contact"
        scroll.scrollTo(4000);
      }

    render() {
        return (
        <div style={[styles.heroImage]}>
            <div style={styles.heroText}>
                <h1 className="wow rollIn" data-wow-duration="2s" data-wow-delay=".2s" data-wow-offset="20" style={styles.effect}>Hello, I'm Daniel Button</h1>
                <p className="wow zoomIn" data-wow-duration="1s" data-wow-delay="2.5s" data-wow-offset="20" style={styles.second}>I like Computers and Web Programming</p>
                <button className="wow flipInX" data-wow-duration="1s" data-wow-delay="4s" data-wow-offset="20" style={styles.button} onClick={this.handleClick1}>My Skills</button>
                <button className="wow flipInX" data-wow-duration="1s" data-wow-delay="5s" data-wow-offset="20"style={styles.button} onClick={this.handleClick2}>My Portfolio</button>
                <button className="wow flipInX" data-wow-duration="1s" data-wow-delay="6s" data-wow-offset="20"style={styles.button} onClick={this.handleClick3}>About Me</button>
                <button className="wow flipInX" data-wow-duration="1s" data-wow-delay="7s" data-wow-offset="20"style={styles.button} onClick={this.handleClick4}>Contact Me</button>
            </div>
          </div>
    );
    }
}


export default Header;