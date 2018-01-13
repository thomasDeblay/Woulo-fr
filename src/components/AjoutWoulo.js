import React from 'react';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';
import WouloForm from './WouloForm';

export class AjoutWoulo extends React.Component {

    onSubmit = (woulo) => {
        this.props.startAddExpense(woulo);
        this.props.history.push('/');
      };


    render(){
        return (
            <div>
                <WouloForm
                onSubmit={this.onSubmit}
                 />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense : (Woulo) => dispatch(startAddExpense(Woulo))
});

export default connect(undefined, mapDispatchToProps)(AjoutWoulo);
