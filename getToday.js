const getDay = async (req, res, db) => {
    const colRef = db.collection("Mat").doc(new Date().getDay().toString());

    colRef
        .get()
        .then((doc) => {
            if (doc.exists) {
                res.json(doc.data());
            } else {
                // doc.data() will be undefined in this case
                res.status(200).json({
                    Matrett: "Kantina er stengt!",
                    Pris: "Kantina er stengt!",
                });
            }
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
            res.status(500);
        });
};

module.exports = getDay;
