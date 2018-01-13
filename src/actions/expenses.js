import uuid from 'uuid';
import  database from '../firebase/firebase';



// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
  });
  
export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      woulo = '',
      like = 0
    } = expenseData;
    const expense = {woulo, like};

    database.ref(`waitinglist/woulos`).push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })
  };
};

export const addRealExpense = (expense) => ({
  type: 'ADD_REALEXPENSE',
  expense
});

export const startAddRealExpense = (expenseData={}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      woulo= '',
      like = 0
    } = expenseData
    const expense = {woulo, like};

    database.ref(`open/woulo`).push(expense).then((ref) => {
      dispatch(addRealExpense({
        id: ref.key,
        ...expense
      }))
    })
    };
  };


  // REMOVE_EXPENSE
  export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
  });

  export const startRemoveExpense = ({id} = {}) => {
    return (dispatch, getState) => {

      const uid = getState().auth.uid;
      database.ref(`waitinglist/woulos/${id}`).remove().then(() => {
        dispatch(removeExpense({id}))
      })
    };
  };
  
  // EDIT_EXPENSE
  export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
  });

  export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {

      const uid = getState().auth.uid;
      database.ref(`waitinglist/woulos/${id}`).update(updates).then(() => {
        dispatch(editExpense(id, updates))
      })
    };
  };

  export const addLike = (id, like) => ({
    type: 'ADD_LIKE',
    id, 
    like
  });

  export const startAddLike = (id, like) => {
    return (dispatch) => {
      console.log(like);
      like++;
      console.log(like);
      database.ref(`open/woulo/${id}`).update(like).then(() => {
        dispatch(addLike(id))
      })
    };
  };

  export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
  }) ;

  export const startSetExpenses = () => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`open/woulo`).once('value').then((snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(setExpenses(expenses));
      });
    };
  };



