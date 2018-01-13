import React from 'react';
import {connect} from 'react-redux';
import Action from './Action';
import PrintWoulo from './PrintWoulo';
import AfficheWoulo from './AfficheWoulo';
import {startAddLike} from '../actions/expenses';




export class WouloApp extends React.Component {
    state = {
        selectedWoulo : undefined,
        liked: '',
        like: undefined
    }

    //Fonction that Pick the Woulo which will appear 
    handlePick = (props) => {
        const randomNum = Math.floor(Math.random() * this.props.Woulos.length);
        const Woulo = this.props.Woulos[randomNum];
        this.setState(() => ({
            selectedWoulo: Woulo
        }));
    };

    handleClick = (props) => {
        console.log(`${this.props.like}`);
        this.props.startAddLike(this.state.selectedWoulo.id, this.props.like);
    };

    handleSelecWoulo = () => {
        this.setState(() => ({ selectedWoulo : undefined }));
    };


    render(){
        return (
            <section className="jumbotron-header-WA text-center-WA mb-3-WA jumbotron-WA">
                <div className="container-WA">
                    <div className="row-WA">
                        <PrintWoulo 
                        selectedWoulo={this.state.selectedWoulo}
                        handleSelecWoulo={this.handleSelecWoulo}
                        />
                            <h1 className="jumbotron-heading-WA display-4-WA h1-WA" > Génère les meilleurs woulos</h1>
                            <p className="lead-WA p-WA" > A chaque clique, tu feras lever le maison ! </p>
                            <Action
                            hasWoulos={this.props.Woulos.length > 0}
                            handlePick={this.handlePick}
                            />
                        </div>
                        </div>
                        <AfficheWoulo
                        selectedWoulo={this.state.selectedWoulo}
                        handleSelecWoulo={this.handleSelecWoulo} 
                        handleClick={this.handleClick}
                        />
                  
                
            </section>
            
        );
    }  
}

const mapStateToProps = (state) => ({
    Woulos: state.expenses
  });

  const mapDispatchToProps = (dispatch, props) => ({
      startAddLike: (id, like) => dispatch(startAddLike(id, like))
  });

  export default connect(mapStateToProps, mapDispatchToProps)(WouloApp);
