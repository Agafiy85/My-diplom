import React, { Component } from 'react';

class Blog extends React.Component {
    render() {
        return (

            <main class="blog">
                <div class="container-fluid about_us">
                    <div class="row">
                        <div class="col-12">
                            <div class="about_us d-flex justify-content-center align-items-center">
                                <p class="title2">
                                    Blog
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="container-fluid  col-xs-hiden blog-inner">
                    <div class="row">
                        <div class="col-xl-9 d-xl-block d-none">
                            <form>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Name</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Text</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            
            

            </main >
        );
    }
}





export default Blog;