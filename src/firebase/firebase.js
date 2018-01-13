import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCNydWVL4fiPg7v-2NMaOj1AiGfbyemLTw",
  authDomain: "woulo-8d4c5.firebaseapp.com",
  databaseURL: "https://woulo-8d4c5.firebaseio.com",
  projectId: "woulo-8d4c5",
  storageBucket: "woulo-8d4c5.appspot.com",
  messagingSenderId: "763233643775"
};

firebase.initializeApp(config);

const database = firebase.database();
const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();
// const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { firebase, FacebookAuthProvider,  database as default };




// // database.ref('notes/-Krll52aVDQ3X6dOtmS7').remove();

// // database.ref('notes').push({
// //   title: 'Course Topics',
// //   body: 'React Native, Angular, Python'
// // });

// // database.ref().on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // })

// // Setup data sub -> Andrew is a Software Developer at Amazon.

// // Change the data and make sure it reprints

// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('Error fetching data', e);
// //   });

// // database.ref().set({
// //   name: 'Andrew Mead',
// //   age: 26,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Philadelphia',
// //     country: 'United States'
// //   }
// // }).then(() => {
// //   console.log('Data is saved!');
// // }).catch((e) => {
// //   console.log('This failed.', e);
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // });

// // database.ref()
// //   .remove()
// //   .then(() => {
// //     console.log('Data was removed');
// //   }).catch((e) => {
// //     console.log('Did not remove data', e);
// //   });




// --------------------------------------------------------
// ***** Code to ReUse *****************
// --------------------------------------------------------
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });



// // database.ref('notes').push({
// //     title: 'Course Topic',
// //     body: 'React native ingular'
// // }); 

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnap) => {
// //         expenses.push({
// //             id: childSnap.key,
// //             ...childSnap.val()
// //         });
// //     });
// //     console.log(expenses);
// //   });

// // database.ref('expenses').on('value', (snapshot => {
// //     const expenses = [];
    
// //     snapshot.forEach((childSnap) => {
// //         expenses.push({
// //             id: childSnap.key,
// //             ...childSnap.val()
// //         });
// //     });
// //     console.log(expenses);
// // }))

 

// // database.ref()
// // .on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is ${val.age} and lives in ${val.location.city} `)
// // } );

// database.ref('expenses').push({
//     description: 'rent',
//     note: '',
//     amount: 109500,
//     createdAt: 56789765
// });



// // database.ref('location/city')
// // .once('value')
// // .then((snapshot) => {
// //    const val = snapshot.val();
// //    console.log(val);
// // })
// // .catch((e) => {
// //     console.log('Error fetching data', e)
// // });
// // database.ref().set({
// //     name: "Thomas Deblay",
// //     age: 26,
// //     isSingle: false, 
// //     location: {
// //         city: 'philadelphia',
// //         country: "USA"
// //     }
// // });

// // // database.ref().set('this is my data');

// // database.ref('age').set(27);
// // database.ref('location/city').set('Paris');