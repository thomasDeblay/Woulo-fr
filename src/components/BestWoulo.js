import React from 'react';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';
 


export default class BestWoulos extends React.Component {

  render(){
    return (
      <section id="browser" className="browser">
    <div className="container">
      <div className="row d-flex justify-content-center"> 
        <div className="col-lg-8 text-center">
          <h2 className="jumbotron-heading-WA display-4-WA but ">Nos Best Woulos</h2>
          <div className="browser-mockup">
            <div id="nav-tabContent" className="tab-content">
              <div id="nav-first" role="tabpanel" aria-labelledby="nav-first-tab" className="tab-pane fade show active">
              <FacebookProvider appId="153457595283592">
                <EmbeddedPost href="https://www.facebook.com/goalcast/posts/1626644120746105" width="500" />
              </FacebookProvider>
              </div>

              <div id="nav-second" role="tabpanel" aria-labelledby="nav-second-tab" className="tab-pane fade">
              <FacebookProvider appId="153457595283592">
                <EmbeddedPost href="https://www.facebook.com/goalcast/posts/1626645847412599" width="500" />
              </FacebookProvider>
              </div>

              <div id="nav-third" role="tabpanel" aria-labelledby="nav-third-tab" className="tab-pane fade">
              <FacebookProvider appId="153457595283592">
                <EmbeddedPost href="https://www.facebook.com/20531316728/posts/10154009990506729/" width="500" />
              </FacebookProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="myTab" role="tablist" className="nav nav-tabs">
        <div className="row">
          <div className="col-md-4"><a id="nav-first-tab" data-toggle="tab" href="#nav-first" role="tab" aria-controls="nav-first" aria-expanded="true" className="nav-item nav-link active"> <span className="number">1</span> <span className="BWW" >Woulo numéro 1 de la semaine </span></a></div>
          <div className="col-md-4"><a id="nav-second-tab" data-toggle="tab" href="#nav-second" role="tab" aria-controls="nav-second" className="nav-item nav-link"> <span className="number">2</span><span className="BWW" >Woulo numéro 2 de la semaine </span></a></div>
          <div className="col-md-4"><a id="nav-third-tab" data-toggle="tab" href="#nav-third" role="tab" aria-controls="nav-third" className="nav-item nav-link BWW"> <span className="number">3</span><span className="BWW" >Woulo numéro 3 de la semaine </span></a></div>
        </div>
      </div>
    </div>
  </section>
    );
  }

}
    


