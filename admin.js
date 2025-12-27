// 机器人核心控制（同步缓存，开关生效）
let robotOpen = true;
localStorage.setItem("robotOpen", "true");
function openRobot(){
    robotOpen = true;
    localStorage.setItem("robotOpen", "true");
    document.getElementById("robotStatus").innerText = "开启";
    document.getElementById("siteInfo").innerText = "全网主控人平台 | 安全防护已开启 | 运维状态：正常 | 机器人状态：运行中";
    alert("🤖 机器人已开启！首页自动互动");
}
function closeRobot(){
    robotOpen = false;
    localStorage.setItem("robotOpen", "false");
    document.getElementById("robotStatus").innerText = "关闭";
    document.getElementById("siteInfo").innerText = "全网主控人平台 | 安全防护已开启 | 运维状态：正常 | 机器人状态：已关闭";
    alert("🤖 机器人已关闭！停止自动互动");
}
function editRobotReply(){
    const defaultReply = "🤖 收到你的评论啦～,🤖 说得好有道理！,🤖 感谢你的互动呀！,🤖 已记录你的留言～";
    const newReply = prompt("输入机器人回复话术，用英文逗号分隔，换行无效", defaultReply);
    if(newReply && newReply.trim() !== ""){
        localStorage.setItem("robotReply", newReply);
        alert("机器人话术修改成功！");
    }
}

// 更新首页公告
function updateNotice(){
    const txt = document.getElementById("noticeText").value.trim();
    if(!txt) return alert("公告内容不能为空！");
    localStorage.setItem("masterNotice", txt);
    alert("公告更新成功！首页已同步");
}

// 文件上传
function uploadFile(){
    const file = document.getElementById("fileUpload").files[0];
    if(!file) return alert("请先选择要上传的文件！");
    alert(`文件【${file.name}】上传成功！`);
    document.getElementById("fileUpload").value = "";
}

// 图片预览+上传
function previewImg(){
    const file = document.getElementById("imgUpload").files[0];
    if(!file) return alert("请先选择要预览的图片！");
    const reader = new FileReader();
    reader.onload = e => {
        document.getElementById("imgView").src = e.target.result;
        document.getElementById("imgView").style.display = "block";
    }
    reader.readAsDataURL(file);
}
function uploadImg(){
    const file = document.getElementById("imgUpload").files[0];
    if(!file) return alert("请先选择要上传的图片！");
    alert(`图片【${file.name}】上传成功！`);
    document.getElementById("imgUpload").value = "";
    document.getElementById("imgView").style.display = "none";
}

// 字幕上传/清空
function uploadSubtitle(){
    const txt = document.getElementById("subtitleText").value.trim();
    if(!txt) return alert("字幕内容不能为空！");
    localStorage.setItem("masterSubtitle", txt);
    alert("字幕上传成功！已保存");
}
function clearSubtitle(){
    document.getElementById("subtitleText").value = "";
    localStorage.removeItem("masterSubtitle");
    alert("字幕已清空！");
}

// 跳转+退出
function goIndex(){window.location.href = "index.html";}
function logout(){
    if(confirm("确定退出主控人后台吗？退出后需重新登录")){
        window.location.href = "index.html";
    }
}

// 页面加载缓存数据
window.onload = function(){
    const savedNotice = localStorage.getItem("masterNotice");
    const savedSub = localStorage.getItem("masterSubtitle");
    if(savedNotice) document.getElementById("noticeText").value = savedNotice;
    if(savedSub) document.getElementById("subtitleText").value = savedSub;
}