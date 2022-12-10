"# social-media-api" 

# mysql database = social_media

# db tables
 - likes = {id, userId, postId}
 - comments = {id, desc, createdAt, userId, commentUserId, postId}
- posts = {id, desc, image, userId, postId}
- users = {id, username, email, password, name, profilePic, coverPic, city, website, userId}
- relationships = {id, followerUserId, followedUserId}
- stories = {id, image, userId, storyUserId}

