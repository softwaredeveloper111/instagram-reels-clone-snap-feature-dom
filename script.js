const reels = [
  {
    username: "tech_sourav",
    likeCount: 1200,
    iLiked: true,
    commentCount: 142,
    caption: "Mastering Node.js one bug at a time 😎🔥",
    video: "./assets/13500874_1080_1920_30fps.mp4",
    userProfile: "images/user1.jpg",
    shareCount: 87,
    isFollowed: true
  },
  {
    username: "dev_diaries",
    likeCount: 980,
    iLiked: false,
    commentCount: 63,
    caption: "JavaScript is love, JavaScript is life ❤️",
    video: "./assets/13522676_1080_1920_30fps.mp4",
    userProfile: "images/user2.jpg",
    shareCount: 44,
    isFollowed: false
  },
  {
    username: "coding_girl",
    likeCount: 5400,
    iLiked: true,
    commentCount: 502,
    caption: "100 days of DSA challenge! 🚀",
    video: "./assets/13632333_1080_1920_30fps.mp4",
    userProfile: "images/user3.jpg",
    shareCount: 350,
    isFollowed: true
  },
  {
    username: "frontend_king",
    likeCount: 3100,
    iLiked: false,
    commentCount: 187,
    caption: "CSS is not hard, you are just weak 🤣",
    video: "./assets/14705040_2160_3840_30fps.mp4",
    userProfile: "images/user4.jpg",
    shareCount: 260,
    isFollowed: false
  },
  {
    username: "ai_future",
    likeCount: 8700,
    iLiked: true,
    commentCount: 740,
    caption: "AGI will replace half of you by 2030 😈🤖",
    video: "./assets/14786838_1080_1920_30fps.mp4",
    userProfile: "images/user5.jpg",
    shareCount: 800,
    isFollowed: true
  },
  {
    username: "fitness_coder",
    likeCount: 700,
    iLiked: false,
    commentCount: 52,
    caption: "Code + Gym = Perfect Life 💪💻",
     video: "./assets/13500874_1080_1920_30fps.mp4",
    userProfile: "images/user6.jpg",
    shareCount: 33,
    isFollowed: false
  },
  {
    username: "travel_with_code",
    likeCount: 15400,
    iLiked: true,
    commentCount: 1100,
    caption: "Coding from the mountains hits different 🏔️✨",
    video: "./assets/13522676_1080_1920_30fps.mp4",
    userProfile: "images/user7.jpg",
    shareCount: 1200,
    isFollowed: true
  },
  {
    username: "bug_hunter",
    likeCount: 400,
    iLiked: false,
    commentCount: 28,
    caption: "Found a bug, fixed a bug, created three new bugs 🐛🤣",
    video: "./assets/13632333_1080_1920_30fps.mp4",
    userProfile: "images/user8.jpg",
    shareCount: 12,
    isFollowed: false
  },
  {
    username: "design_master",
    likeCount: 2600,
    iLiked: false,
    commentCount: 201,
    caption: "UI so clean it makes backend developers cry 😭✨",
    video: "./assets/14705040_2160_3840_30fps.mp4",
    userProfile: "images/user9.jpg",
    shareCount: 150,
    isFollowed: true
  },
  {
    username: "coding_memes",
    likeCount: 19000,
    iLiked: true,
    commentCount: 2400,
    caption: "This is why we hate production deployments 😂🔥",
    video: "./assets/14786838_1080_1920_30fps.mp4",
    userProfile: "images/user10.jpg",
    shareCount: 2100,
    isFollowed: true
  }
];

const section2 = document.querySelector("#section-2")



let clutter = ""
reels.forEach((item,index)=>{
  clutter+=` <div class="reel">
      <video autoplay loop muted src=${item.video}></video>

      <div id="bottom-section-content">
        <div class="top-bottom-section-content">
          <img src="./assets/fav1 (1).jpg" alt="">
           <span>${item.username}</span>
           <button>${item.isFollowed===true?"Unfollow":"Follow"}</button>
        </div>
        <div class="bottom-bottom-section-content" style="display: flex; justify-content: space-between; align-items: center;">
          <p>${item.caption}</p>
          <i class="ri-volume-up-line" style="font-size: 1rem; background-color: #7e7979; border-radius: 50%; padding: 10px; cursor: pointer;"></i>
        </div>
      </div>


       <div id="reel-right-like-commnt-section">
        <div>
            ${item.iLiked 
          ? `<i class="ri-heart-fill red-love"></i>` 
          : `<i class="ri-heart-3-line"></i>`
        }
                  
          <p>${item.likeCount}</p>
        </div>
        <div>
          <i class="ri-chat-3-line"></i>
           <p>${item.commentCount}</p>
        </div>
        <i class="ri-send-plane-fill"></i>
        <i class="ri-bookmark-line"></i>
        <i class="ri-more-2-line" style="rotate: 90deg;"></i>
       </div>

      </div>
`
})

section2.innerHTML = clutter