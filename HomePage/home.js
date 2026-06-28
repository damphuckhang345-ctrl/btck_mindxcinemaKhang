//Lấy nút đăng xuất
const logoutBtn =
document.getElementById("logoutBtn");

//Gắn sự kiện click
logoutBtn.addEventListener(
    "click",
    logout
);

//Khai báo hàm logout
function logout(){

    //Xóa dữ liệu 
    localStorage.removeItem("isLogin");

    //Chuyển sang trang login
    window.location.href =
    "../login/login.html";

}

//lấy dữ liệu của isLogin
const isLogin =
localStorage.getItem("isLogin");

//Nếu isLogin đúng thì chạy code
if(isLogin !== "true"){

    window.location.href =
    "../login/login.html";

}