// const db = require("../models");
// const Likes = db.likes;
// const Op = db.Sequelize.Op;
// const { user: User, role: Role, like: Like } = db;

// // exports.create = (req, res) => {
// //   const likes = {
// //     name: req.body.name,
// //     time: req.body.time,
// //     date: req.body.date,
// //   };
  
// //   Likes.create(likes)
// //     .then(data => {
// //       res.send(data);
// //     })
// //     .catch(err => {
// //       res.status(500).send({
// //         message:
// //           err.message || "Some error occurred while creating the Like."
// //       });
// //     }); 
// // };

// // exports.findAll = (req, res) => {
// //     const name = req.query.name;
// //     var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
// //     Likes.findAll({ where: condition })
// //       .then(data => {
// //         res.send(data);
// //       })
// //       .catch(err => {
// //         res.status(500).send({
// //           message:
// //             err.message || "Some error occurred while retrieving users."
// //         });
// //       });
// // };

// // exports.delete = (req, res) => {
// //     const id = req.params.id;
// //     Likes.destroy({
// //       where: { id: id }
// //     })
// //       .then(num => {
// //         if (num == 1) {
// //           res.send({
// //             message: "Tutorial was deleted successfully!"
// //           });
// //         } else {
// //           res.send({
// //             message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
// //           });
// //         }
// //       })
// //       .catch(err => {
// //         res.status(500).send({
// //           message: "Could not delete Tutorial with id=" + id
// //         });
// //       });
// // };



// exports.getLikes = (req, res) => {
//     const q = "SELECT userId FROM likes WHERE postId = ?";

//     db.query(q, [req.query.postId], (err, data) => {
//       if (err) return res.status(500).json(err);
//       return res.status(200).json(data.map(like=>like.userId));
//     });
// };

// exports.addLike = (req, res) => {
//     const token = req.cookies.accessToken;
//   if (!token) return res.status(401).json("Not logged in!");

//   jwt.verify(token, "secretkey", (err, userInfo) => {
//     if (err) return res.status(403).json("Token is not valid!");

//     const q = "INSERT INTO likes (`userId`,`postId`) VALUES (?)";
//     const values = [
//       userInfo.id,
//       req.body.postId
//     ];

//     db.query(q, [values], (err, data) => {
//       if (err) return res.status(500).json(err);
//       return res.status(200).json("Post has been liked.");
//     });
//   });
// }

// exports.deleteLike = (req, res) => {
//   const token = req.cookies.accessToken;
//   if (!token) return res.status(401).json("Not logged in!");

//   jwt.verify(token, "secretkey", (err, userInfo) => {
//     if (err) return res.status(403).json("Token is not valid!");

//     const q = "DELETE FROM likes WHERE `userId` = ? AND `postId` = ?";

//     db.query(q, [userInfo.id, req.query.postId], (err, data) => {
//       if (err) return res.status(500).json(err);
//       return res.status(200).json("Post has been disliked.");
//     });
//   });
// }
