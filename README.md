"# social-media-api" 

# mysql database = social_media

# db tables
 - likes = {id, userId, postId}
 - comments = {id, desc, createdAt, userId, commentUserId, postId}
- posts = {id, desc, image, userId, postId}
- users = {id, username, email, password, name, profilePic, coverPic, city, website, userId}
- relationships = {id, followerUserId, followedUserId}
- stories = {id, image, userId, storyUserId}


{
 "id": 1,
 "username": "jepski420230",
  "name": "Jezekiel Isip",
 "email": "jezedevkiel21@gmail.com",
 "phone": "+639261905502",
 "address": "Arellano, Tacloban City",
 "password": "420230",
 "cover_image": "",
 "profile_image": "",
 "website": "https://docampaign.online/jezekielisip",
 "roles": ["user", "admin"]
}

{
 "id": 2,
 "username": "tupac_thug",
  "name": "Tupac Shakur",
 "email": "thug_life@yahoo.com",
 "phone": "+639261905502",
 "address": "4730 Azucena Road. Woodland Hills, CA 91364",
 "password": "420230",
 "cover_image": "",
 "profile_image": "",
 "website": "https://www.wakemewhenimfree.com",
 "roles": ["user", "admin"]
}

{
 "id": 3,
 "username": "slim_shady",
  "name": "Marshall Matthers",
 "email": "rap_god@protonmail.com",
 "phone": "+639261905502",
 "address": "4730 Azucena Road. Woodland Hills, CA 91364",
 "password": "420230",
 "cover_image": "https://variety.com/wp-content/uploads/2018/08/eminem.jpg?w=681&h=383&crop=1",
 "profile_image": "https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b",
 "website": "https://www.eminem.com/",
 "roles": ["user", "admin"]
}
