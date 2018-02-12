import React from 'react';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';
 


export default class BestWoulos extends React.Component {

  render(){
    return (
    <section id="browser " className="browser fontb">
    
    <div className="background-c" >
    <div className="container">
      <div className="row d-flex justify-content-center"> 
        <div className="col-lg-8 text-center">
          <h2 className="jumbotron-heading-WA display-4-WA but ">Nos Best Woulos</h2>
          <br />
          <p> Clique dessus pour les découvrir ! </p>
          <div className="browser-mockup">
            <div id="nav-tabContent" className="tab-content">
              <div id="nav-first" role="tabpanel" aria-labelledby="nav-first-tab" className="tab-pane fade show active">
              <FacebookProvider appId="153457595283592">
                <EmbeddedPost href="https://www.facebook.com/WebAppWoulo/posts/1901309396865931www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D1901309396865931%26id%3D1900082676988603" width="500" data-show-text="true" />
              </FacebookProvider>
              </div>

              <div id="nav-second" role="tabpanel" aria-labelledby="nav-second-tab" className="tab-pane fade">
              <FacebookProvider appId="153457595283592">
                <EmbeddedPost href="https://www.facebook.com/WebAppWoulo/posts/1901308680199336" width="500" />
              </FacebookProvider>
              </div>

              <div id="nav-third" role="tabpanel" aria-labelledby="nav-third-tab" className="tab-pane fade">
              <FacebookProvider appId="153457595283592">
                <EmbeddedPost href="https://www.facebook.com/WebAppWoulo/posts/1901307640199440" width="500" />
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
    </div>
  </section>
    );
  }

}
    


