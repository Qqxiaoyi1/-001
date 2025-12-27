// 主控人最终账号密码：xiaoyi / qtxiaoyi
function loginCheck(){
    const user = document.getElementById("user").value;
    const pwd = document.getElementById("pwd").value;
    if(user === "xiaoyi" && pwd === "qtxiaoyi"){
        alert("登录成功，进入主控人后台");
        window.location.href = "admin.html";
    }else{
        alert("账号密码错误！");
    }
}

// 返回首页
function goBack(){
    window.location.href = "index.html";
}