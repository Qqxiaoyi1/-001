// 点赞功能
let likeCount = 0;
function addLike(){
    likeCount++;
    document.getElementById("likeCount").innerText = likeCount;
    robotAutoLike();
}

// 评论+机器人自动回复
function publishComment(){
    const val = document.getElementById("commentVal").value.trim();
    if(!val) return alert("请输入评论内容");
    const list = document.getElementById("commentList");
    const item = document.createElement("div");
    item.className = "comment-item";
    item.innerText = val;
    list.appendChild(item);
    document.getElementById("commentVal").value = "";
    // 机器人回复（判断开启状态）
    const robotStatus = localStorage.getItem("robotOpen") || "true";
    if(robotStatus === "true"){
        setTimeout(()=>{
            const robotReply = document.createElement("div");
            robotReply.className = "comment-item robot-comment";
            const savedReply = localStorage.getItem("robotReply") || "🤖 收到你的评论啦～,🤖 说得好有道理！,🤖 感谢你的互动呀！,🤖 已记录你的留言～";
            const replyArr = savedReply.split(",");
            robotReply.innerText = replyArr[Math.floor(Math.random()*replyArr.length)];
            list.appendChild(robotReply);
            list.scrollTop = list.scrollHeight;
        },800);
    }
}

// 机器人点赞提醒
function robotAutoLike(){
    const robotStatus = localStorage.getItem("robotOpen") || "true";
    if(robotStatus === "true" && likeCount%5 === 0){
        alert("🤖 机器人：哇！点赞数破5啦，给力！");
    }
}

// 机器人点击互动
document.getElementById("robot").onclick = function(){
    alert("🤖 我是主控人专属机器人，负责自动互动哦～");
}

// 我的-登录弹窗
function openLogin(){document.getElementById("loginPopup").style.display = "block";}
function closeLogin(){document.getElementById("loginPopup").style.display = "none";}
function toLogin(){
    const user = document.getElementById("user").value;
    const pwd = document.getElementById("pwd").value;
    if(user && pwd){window.location.href = "login.html";}
    else{alert("请输入账号密码");}
}
function goIndex(){window.location.href = "index.html";}

// 同步主控人后台公告
window.onload = ()=>{
    const saved = localStorage.getItem("masterNotice");
    if(saved) document.getElementById("noticeContent").innerText = saved;
}