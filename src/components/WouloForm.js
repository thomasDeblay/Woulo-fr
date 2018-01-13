import React from 'react';


export default class WouloForm extends React.Component {
  constructor(props) {
    super(props);


  
    this.state = {
      woulo: props.waitinglist ? props.waitinglist.woulo : '',
      error: ''
    };
}
  onWouloChange = (e) => {
    const woulo = e.target.value;
    this.setState(() => ({ woulo }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.woulo) {
      this.setState(() => ({ error: 'Le woulo est vide, vous devez entrer le votre' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        woulo: this.state.woulo,
      });
    }
  };
  render() {
    return (
      <div className="wouloform">
              <div className="box-woulo__box">
                <h1 className="box-layout__title">Etape 2</h1>
                <p className="lead-WA p-WA" > Maintenant il ne te reste plus qu'à écrire ton Woulo et nous l'ajouterons à la liste ! </p>
                  <form className="form" onSubmit={this.onSubmit}>
                  {this.state.error && <p className="form__error">{this.state.error}</p>}
                  <textarea
                    placeholder="Ajoute ton WOULO !"
                    className="textarea textarea-box"
                    value={this.state.woulo}
                    onChange={this.onWouloChange}
                  >
                  </textarea>
                  <div>
                    <button className="btn-WA btn-danger-WA woulobutton">Enregistrer</button>
                  </div>
                </form>
              </div>
      </div>
    )
  }
}
