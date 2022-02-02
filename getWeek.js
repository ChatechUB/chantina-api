const getWeek = async (req, res, db) => {
    const colRef = db.collection("Mat");

    let data = [];

    colRef
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                data.push(doc.data());
            });
            res.json(data);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
            res.json("Error getting documents: ", error);
        });
};

module.exports = getWeek;
