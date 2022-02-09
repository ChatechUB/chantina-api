const getDay = async (req, res, db) => {

    let data = [];
    let day = req.url.split("?")[1];
    let dayInt = parseInt(day);

    const colRef = db.collection("Mat").doc(day);
    
    if (dayInt && dayInt < 6) {
        colRef
            .get()
            .then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    res.json(doc.data());
                } else {
                    // doc.data() will be undefined in this case
                    res.status(400).json({
                        error: "Bad request, day can only be 1-5!",
                    });
                }
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
                res.status(400).json({
                    error: "Bad request, day can only be 1-5!",
                });
            });
    } else {
        res.status(400).json({
            error: "Bad request, day can only be 1-5!",
        });
    }
};

module.exports = getDay;
