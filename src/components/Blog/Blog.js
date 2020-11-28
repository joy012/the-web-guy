import React from 'react';
import Bounce from 'react-reveal/Bounce'
import { Container } from 'react-bootstrap';
import img1 from '../../images/blog1.jpeg';
import img2 from '../../images/blog2.jpeg';
import img3 from '../../images/blog3.png';
import './Blog.css';

const Blog = () => {
  return (
    <section id="blog" className='zIndex'>
      <Container>
        <div className="text-center py-5 my-5">
          <h2 className="text-center display-3 my-5 font-weight-bold text-white">Blog</h2>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 align-items-center justify-content-center">

            <div class="col mb-4">
              <Bounce top duration={2000} delay={250}>
                <>
                  <div class="card h-100">
                    <img src={img1} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">8 Common Problems Solving With JavaScript</h5>
                    </div>
                    <a className='btn btn-outline-danger d-inline-block mx-auto px-5 my-4' href="https://zahidul-islam-joy.medium.com/10-common-problem-solving-with-javascript-881feb952be9" target='_blank'>
                      Read
                </a>
                  </div>
                </>
              </Bounce>
            </div>


            <div class="col mb-4">
              <Bounce bottom duration={2000} delay={500}>
                <>
                  <div class="card  h-100">
                    <img src={img2} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">10 Important Topics of JavaScript That You Should Definitely Know</h5>
                    </div>
                    <a className='btn btn-outline-danger d-inline-block mx-auto px-5 my-4' href="https://zahidul-islam-joy.medium.com/10-important-topics-of-javascript-that-you-should-definitely-know-1b060206e1fe?source=your_stories_page-------------------------------------" target='_blank'>
                      Read
                </a>
                  </div>
                </>
              </Bounce>
            </div>

            <div class="col mb-4">
              <Bounce top duration={2000} delay={750}>
                <>
                  <div class="card h-100">
                    <img src={img3} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">10 Most Used Methods of JavaScript</h5>
                    </div>
                    <a className='btn btn-outline-danger d-inline-block mx-auto px-5 my-4' href="https://zahidul-islam-joy.medium.com/10-basic-topics-of-javascript-for-beginners-e081a6311565" target='_blank'>
                      Read
                </a>
                  </div>
                </>
              </Bounce>
            </div>
          </div>
        </div>
      </Container>
    </section >
  );
};

export default Blog;
