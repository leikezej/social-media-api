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
 "cover_image": "https://media-exp1.licdn.com/dms/image/C4D03AQFEtDjOkN6eLw/profile-displayphoto-shrink_800_800/0/1654707360220?e=1675900800&v=beta&t=RyksSkHUImfHwOE_EoeIma0ktlDhNlO-hcznme_jF6U",
 "profile_image": "https://media-exp1.licdn.com/dms/image/C4D03AQFEtDjOkN6eLw/profile-displayphoto-shrink_800_800/0/1654707360220?e=1675900800&v=beta&t=RyksSkHUImfHwOE_EoeIma0ktlDhNlO-hcznme_jF6U",
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
 "cover_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr8fN40BV0CSed0OLUArE_RVFOZasmG_KAcw&usqp=CAU",
 "profile_image": "https://i1.sndcdn.com/artworks-000327420636-i08pvf-t500x500.jpg",
 "website": "https://www.wakemewhenimfree.com",
 "roles": ["user", "admin"]
}
{
 "id": 3,
 "username": "slim_shady",
  "name": "Marshall Matthers",
 "email": "rap_god@protonmail.com",
 "phone": "+639261905502",
 "address": "Carrillo Drive Suite 300 Los Angeles, CA 90048-5400 USA",
 "password": "420230",
 "cover_image": "https://variety.com/wp-content/uploads/2018/08/eminem.jpg?w=681&h=383&crop=1",
 "profile_image": "https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b",
 "website": "https://www.eminem.com/",
 "roles": ["user", "admin"]
}
