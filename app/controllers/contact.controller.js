exports.create = (req, res) => {
    res.send({ message: "create handler" });
};

exports.findAll = (req, res) => {
    res.send({ message: "findAll handler" });
};

exports.findOne = (req, res) => {
    res.send({ message: "findOne handler" });
};

exports.update = (req, res) => {
    res.send({ message: "update handler" });
};

exports.delete = (req, res) => {
    res.send({ message: "delete handler" });
};

exports.deleteAll = (req, res) => {
    res.send({ message: "deleteAll handler" });
};

exports.findAllFavorite = (req, res) => {
    res.send({ message: "findAllFavorite handler" });
};


// module.exports = {
//     All_FAVORITE: (req, res) => {
//         res.send({ message: "findAll handler" });
//     },
//     CREATE: (req, res) => {
//         try {
//             console.log('req', req.body);
//             res.send({ message: "create handler" });
//         } catch (error) {

//         }
//     },
// }



