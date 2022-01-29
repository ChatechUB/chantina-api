var firebase = require('firebase')


firebase.initializeApp({
	apiKey: "AIzaSyCNBcLGHvEs5JAFc0XSGbNBanyi-kKhw2g",
	authDomain: "fir-test-5d0fa.firebaseapp.com",
	projectId: "fir-test-5d0fa",
	storageBucket: "fir-test-5d0fa.appspot.com",
	messagingSenderId: "243559034407",
	appId: "1:243559034407:web:e7f653ecfbc3a33fc0e802",
	measurementId: "G-LBTESEHKJV"
})

const db = firebase.firestore();


const getWeek = async (req, res) =>{

    const colRef = db.collection("Mat")
   
    let data = []
    
    colRef.get()
    .then((querySnapshot)=> {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            data.push(doc.data()) 
        });
        res.json(data)
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
        res.json("Error getting documents: ", error)
    });


    
}


module.exports = getWeek