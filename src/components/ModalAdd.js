import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { history } from '../routers/AppRouter';







class ModalAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  facebookshare = () => {
    FB.ui({
    method: 'share',
    display: 'popup',
    mobile_iframe: true,
    redirect_uri: history.push('/ajoutetonwoulo'),
    action_properties: JSON.stringify({
      cricket: 'https://woulo-fr.herokuapp.com',
    })
  }, function(response){});
};



  render() {
    return (
      <div>
        <button className="btn-WA btn-danger-WA woulobutton" onClick={this.toggle}> Click ici ! </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Tu veux partager ton Woulo ?</ModalHeader>
          <ModalBody>
            <div className="modalfacebook">
              <div className="box-layout__box">
                <h1 className="box-layout__title">Etape 1</h1>
                <p> Pour ajouter ton Woulo, il faut d'abord partager woulo.fr à tes amis </p>
                <button className="loginBtn loginBtn--facebook" onClick={this.facebookshare} >Partager</button>
              </div>
            </div>
            </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>quitter</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalAdd;