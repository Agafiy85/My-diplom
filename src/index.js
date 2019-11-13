import React, { Component,Fragment } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";



import Header from "./components/heder/heder";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Galerey from './components/galerey/galerey';
import Blog from './components/blog/blog';
import Login from './components/login/login';




export class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                    <Router>
                           
                    <Route path="/Home" exact component={() => <Home/>} />
                    <Route path="/Galerey" exact component={() => <Galerey/>} />
                    <Route path="/Blog" exact component={() => <Blog/>} />
                    <Route path="/Login" exact component={() => <Login/>} />
                               
                            
                    </Router>
                <Footer />
                
            </Fragment>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'));

