import React from 'react';
import WouloApp from './WouloApp';
import BestWoulos from './BestWoulo';
import CallToAdd from './CallToAdd';
import Footer from './Footer';






    
  //Ajoute un WOULO ::::
    // handleAddWoulo = (Woulo) => {
    //     if(!Woulo){
    //         return 'Enter valid value to add item';
    //     }
    //     else if(this.state.Woulos.indexOf(Woulo) > -1){
    //         return 'this item already exist';
    //     }

    //     this.setState((prevState) => ({Woulos : prevState.Woulos.concat(Woulo)}));
    // };

   

const DashboardPage = () => (
        <div>
          <WouloApp />
          <BestWoulos />
          <CallToAdd />
          <Footer />
        </div>
   );
 
export default DashboardPage;