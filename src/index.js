import React, { Component,Fragment } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";



import Header from "./components/heder/heder";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";




export class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                    <Router>
                           
                        <Route path="/" exact component={Home} />
                               
                            
                    </Router>
                <Footer />
            </Fragment>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'));

