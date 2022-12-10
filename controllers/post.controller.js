// const db = require("../models");
// const Posts = db.posts;
// const Op = db.Sequelize.Op;
// const { user: User, role: Role, posts: Post } = db;


// // exports.create = (req, res) => {
// //   const posts = {
// //     name: req.body.name,
// //     time: req.body.time,
// //     date: req.body.date,
// //   };
  
// //   Posts.create(posts)
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
// //     Posts.findAll({ where: condition })
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
// //     Posts.destroy({
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

// exports.getPosts = (req, res) => {
//     const userId = req.query.userId;
//   const token = req.cookies.accessToken;
//   if (!token) return res.status(401).json("Not logged in!");

//   jwt.verify(token, "secretkey", (err, userInfo) => {
//     if (err) return res.status(403).json("Token is not valid!");

//     console.log(userId);

//     const q =
//       userId !== "undefined"
//         ? `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) WHERE p.userId = ? ORDER BY p.createdAt DESC`
//         : `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)
//     LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId= ? OR p.userId =?
//     ORDER BY p.createdAt DESC`;

//     const values =
//       userId !== "undefined" ? [userId] : [userInfo.id, userInfo.id];

//     db.query(q, values, (err, data) => {
//       if (err) return res.status(500).json(err);
//       return res.status(200).json(data);
//     });
//   });
// }

// exports.addPost = (req, res) => {
//     const token = req.cookies.accessToken;
//   if (!token) return res.status(401).json("Not logged in!");

//   jwt.verify(token, "secretkey", (err, userInfo) => {
//     if (err) return res.status(403).json("Token is not valid!");

//     const q =
//       "INSERT INTO posts(`desc`, `img`, `createdAt`, `userId`) VALUES (?)";
//     const values = [
//       req.body.desc,
//       req.body.img,
//       moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
//       userInfo.id,
//     ];

//     db.query(q, [values], (err, data) => {
//       if (err) return res.status(500).json(err);
//       return res.status(200).json("Post has been created.");
//     });
//   });
// }

// exports.deletePost = (req, res) => {
//     const token = req.cookies.accessToken;
//   if (!token) return res.status(401).json("Not logged in!");

//   jwt.verify(token, "secretkey", (err, userInfo) => {
//     if (err) return res.status(403).json("Token is not valid!");

//     const q =
//       "DELETE FROM posts WHERE `id`=? AND `userId` = ?";

//     db.query(q, [req.params.id, userInfo.id], (err, data) => {
//       if (err) return res.status(500).json(err);
//       if(data.affectedRows>0) return res.status(200).json("Post has been deleted.");
//       return res.status(403).json("You can delete only your post")
//     });
//   });
// }