const reels = [
  {
    username: "tech_sourav",
    likeCount: 1200,
    iLiked: true,
    commentCount: 142,
    caption: "Mastering Node.js one bug at a time 😎🔥",
    video: "./assets/one.mp4",
    userProfile: "./assets/fav.jpg",
    shareCount: 87,
    isFollowed: true
  },
  {
    username: "dev_diaries",
    likeCount: 980,
    iLiked: false,
    commentCount: 63,
    caption: "JavaScript is love, JavaScript is life ❤️",
    video: "./assets/two.mp4",
    userProfile: "https://i.pinimg.com/736x/48/98/5c/48985cc83ac4ecad753a9a292256e5d9.jpg",
    shareCount: 44,
    isFollowed: false
  },
  {
    username: "coding_girl",
    likeCount: 5400,
    iLiked: true,
    commentCount: 502,
    caption: "100 days of DSA challenge! 🚀",
    video: "./assets/three.mp4",
    userProfile: "https://i.pinimg.com/1200x/bd/cd/81/bdcd81e4a04765ae94dab2392ed9c0dd.jpg",
    shareCount: 350,
    isFollowed: true
  },
  {
    username: "frontend_king",
    likeCount: 3100,
    iLiked: false,
    commentCount: 187,
    caption: "CSS is not hard, you are just weak 🤣",
    video: "./assets/four.mp4",
    userProfile: "https://i.pinimg.com/736x/1f/c0/bf/1fc0bfd266936636f652decae55e7e2d.jpg",
    shareCount: 260,
    isFollowed: false
  },
  {
    username: "ai_future",
    likeCount: 8700,
    iLiked: true,
    commentCount: 740,
    caption: "AGI will replace half of you by 2030 😈🤖",
    video: "./assets/five.mp4",
    userProfile: "https://i.pinimg.com/736x/5e/e4/ab/5ee4abf36be61879f896b96c3575f831.jpg",
    shareCount: 800,
    isFollowed: true
  },
  {
    username: "fitness_coder",
    likeCount: 700,
    iLiked: false,
    commentCount: 52,
    caption: "Code + Gym = Perfect Life 💪💻",
     video: "./assets/six.mp4",
    userProfile: "https://i.pinimg.com/736x/68/c2/58/68c258d753f52dc1fa2ec22c7de1dbb9.jpg",
    shareCount: 33,
    isFollowed: false
  },
  {
    username: "travel_with_code",
    likeCount: 15400,
    iLiked: true,
    commentCount: 1100,
    caption: "Coding from the mountains hits different 🏔️✨",
    video: "./assets/seven.mp4",
    userProfile: "https://i.pinimg.com/1200x/fd/42/d8/fd42d80daab153a3eaf3f098a00b5b42.jpg",
    shareCount: 1200,
    isFollowed: true
  },
  {
    username: "bug_hunter",
    likeCount: 400,
    iLiked: false,
    commentCount: 28,
    caption: "Found a bug, fixed a bug, created three new bugs 🐛🤣",
    video: "./assets/eight.mp4",
    userProfile: "https://i.pinimg.com/1200x/9d/7d/5e/9d7d5e155a9f241911d1291601855e3f.jpg",
    shareCount: 12,
    isFollowed: false
  },
  {
    username: "design_master",
    likeCount: 2600,
    iLiked: false,
    commentCount: 201,
    caption: "UI so clean it makes backend developers cry 😭✨",
    video: "./assets/nine.mp4",
    userProfile: "https://i.pinimg.com/1200x/12/b8/0c/12b80c2bcb9a9d0d618faef866a2f7d0.jpg",
    shareCount: 150,
    isFollowed: true
  },
  {
    username: "coding_memes",
    likeCount: 19000,
    iLiked: true,
    commentCount: 2400,
    caption: "This is why we hate production deployments 😂🔥",
    video: "./assets/ten.mp4",
    userProfile: "https://i.pinimg.com/736x/2f/ce/2a/2fce2afaaa0ac56631befe3096b5328d.jpg",
    shareCount: 2100,
    isFollowed: true
  },
   {
    username: "tech_sourav",
    likeCount: 1200,
    iLiked: true,
    commentCount: 142,
    caption: "Mastering Node.js one bug at a time 😎🔥",
    video: "./assets/one.mp4",
    userProfile: "./assets/fav.jpg",
    shareCount: 87,
    isFollowed: true
  },
  {
    username: "tech_sourav",
    likeCount: 1200,
    iLiked: true,
    commentCount: 142,
    caption: "Mastering Node.js one bug at a time 😎🔥",
    video: "./assets/one.mp4",
    userProfile: "./assets/fav.jpg",
    shareCount: 87,
    isFollowed: true
  },
  {
    username: "dev_diaries",
    likeCount: 980,
    iLiked: false,
    commentCount: 63,
    caption: "JavaScript is love, JavaScript is life ❤️",
    video: "./assets/two.mp4",
    userProfile: "https://i.pinimg.com/736x/48/98/5c/48985cc83ac4ecad753a9a292256e5d9.jpg",
    shareCount: 44,
    isFollowed: false
  },
  {
    username: "coding_girl",
    likeCount: 5400,
    iLiked: true,
    commentCount: 502,
    caption: "100 days of DSA challenge! 🚀",
    video: "./assets/three.mp4",
    userProfile: "https://i.pinimg.com/1200x/bd/cd/81/bdcd81e4a04765ae94dab2392ed9c0dd.jpg",
    shareCount: 350,
    isFollowed: true
  },
  {
    username: "frontend_king",
    likeCount: 3100,
    iLiked: false,
    commentCount: 187,
    caption: "CSS is not hard, you are just weak 🤣",
    video: "./assets/four.mp4",
    userProfile: "https://i.pinimg.com/736x/1f/c0/bf/1fc0bfd266936636f652decae55e7e2d.jpg",
    shareCount: 260,
    isFollowed: false
  },
  {
    username: "ai_future",
    likeCount: 8700,
    iLiked: true,
    commentCount: 740,
    caption: "AGI will replace half of you by 2030 😈🤖",
    video: "./assets/five.mp4",
    userProfile: "https://i.pinimg.com/736x/5e/e4/ab/5ee4abf36be61879f896b96c3575f831.jpg",
    shareCount: 800,
    isFollowed: true
  },
  {
    username: "fitness_coder",
    likeCount: 700,
    iLiked: false,
    commentCount: 52,
    caption: "Code + Gym = Perfect Life 💪💻",
     video: "./assets/six.mp4",
    userProfile: "https://i.pinimg.com/736x/68/c2/58/68c258d753f52dc1fa2ec22c7de1dbb9.jpg",
    shareCount: 33,
    isFollowed: false
  },
  {
    username: "travel_with_code",
    likeCount: 15400,
    iLiked: true,
    commentCount: 1100,
    caption: "Coding from the mountains hits different 🏔️✨",
    video: "./assets/seven.mp4",
    userProfile: "https://i.pinimg.com/1200x/fd/42/d8/fd42d80daab153a3eaf3f098a00b5b42.jpg",
    shareCount: 1200,
    isFollowed: true
  },
  {
    username: "bug_hunter",
    likeCount: 400,
    iLiked: false,
    commentCount: 28,
    caption: "Found a bug, fixed a bug, created three new bugs 🐛🤣",
    video: "./assets/eight.mp4",
    userProfile: "https://i.pinimg.com/1200x/9d/7d/5e/9d7d5e155a9f241911d1291601855e3f.jpg",
    shareCount: 12,
    isFollowed: false
  },
  {
    username: "design_master",
    likeCount: 2600,
    iLiked: false,
    commentCount: 201,
    caption: "UI so clean it makes backend developers cry 😭✨",
    video: "./assets/nine.mp4",
    userProfile: "https://i.pinimg.com/1200x/12/b8/0c/12b80c2bcb9a9d0d618faef866a2f7d0.jpg",
    shareCount: 150,
    isFollowed: true
  },
  {
    username: "coding_memes",
    likeCount: 19000,
    iLiked: true,
    commentCount: 2400,
    caption: "This is why we hate production deployments 😂🔥",
    video: "./assets/ten.mp4",
    userProfile: "https://i.pinimg.com/736x/2f/ce/2a/2fce2afaaa0ac56631befe3096b5328d.jpg",
    shareCount: 2100,
    isFollowed: true
  },
   {
    username: "tech_sourav",
    likeCount: 1200,
    iLiked: true,
    commentCount: 142,
    caption: "Mastering Node.js one bug at a time 😎🔥",
    video: "./assets/one.mp4",
    userProfile: "./assets/fav.jpg",
    shareCount: 87,
    isFollowed: true
  },
];

const section2 = document.querySelector("#section-2")
const likeCount = document.querySelector(".likeCount")


function displayReels(){
let clutter = ""
reels.forEach((item,index)=>{
  clutter+=`<div class="reel" id="${index}">
      <video loop src=${item.video}></video>

      <div id="bottom-section-content">
        <div class="top-bottom-section-content">
          <img src=${item.userProfile} alt="">
           <span>${item.username}</span>
           <button class="uf">${item.isFollowed===true?"Unfollow":"Follow"}</button>
        </div>
        <div class="bottom-bottom-section-content" style="display: flex; justify-content: space-between; align-items: center;">
          <p>${item.caption}</p>
          <i class="ri-volume-up-line" style="font-size: 1rem; background-color: #7e7979; border-radius: 50%; padding: 10px; cursor: pointer;"></i>
        </div>
      </div>


       <div id="reel-right-like-commnt-section">
        <div>
            ${item.iLiked 
          ? `<i class="ri-heart-fill red-love heart"></i>` 
          : `<i class="ri-heart-3-line heart"></i>`
        }
                  
          <p class="likeCount">${item.likeCount}</p>
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
}


displayReels()


section2.addEventListener("click",(e)=>{
  if(e.target.classList.contains("heart")){     
    const idNo = e.target.closest(".reel").id
    const obj = reels[Number(idNo)]
    if(obj.iLiked){
        obj.iLiked=false
        obj.likeCount--;
    }
    else{
      obj.iLiked=true;
      obj.likeCount++;
    }
     

    displayReels()
  }

  if(e.target.classList.contains("uf")){
    const idNo = e.target.closest(".reel").id;
     const obj = reels[Number(idNo)];
     if(obj.isFollowed){
      obj.isFollowed = false
     }
     else{
      obj.isFollowed = true
     }

         displayReels()
  }

})












function controlVideoPlayback() {
  const videos = document.querySelectorAll("video");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;

      if (entry.isIntersecting) {
        video.currentTime = 0;  
        video.play();            
      } else {
        video.pause();          
      }
    });
  }, { threshold: 0.7 }); 

  videos.forEach((video) => observer.observe(video));
}

setTimeout(controlVideoPlayback, 500); 




section2.addEventListener("click", (e) => {
  // Only react if user clicked on volume icon
  if (
    !e.target.classList.contains("ri-volume-up-line") &&
    !e.target.classList.contains("ri-volume-mute-line")
  ) {
    return;
  }

  const reel = e.target.closest(".reel");
  if (!reel) return;

  const video = reel.querySelector("video");
  if (!video) return;

  if (video.muted) {
    // currently muted -> unmute
    video.muted = false;
    e.target.classList.remove("ri-volume-mute-line");
    e.target.classList.add("ri-volume-up-line");
  } else {
    // currently playing with sound -> mute
    video.muted = true;
    e.target.classList.remove("ri-volume-up-line");
    e.target.classList.add("ri-volume-mute-line");
  }
});
