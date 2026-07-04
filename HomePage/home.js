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

console.log(movies);

const featuredList = document.getElementById("featured-list");
const trendingList = document.getElementById("trending-list");

// 8 phim đầu
movies.slice(0,8).forEach(movie => {

    featuredList.innerHTML += `
        <a href="../DetailMovie/detail.html?id=${movie.id}" class="movie-card">
            <img src="${movie.poster}">
            <h3>${movie.title}</h3>
        </a>
    `;

});

// 8 phim sau
movies.slice(8,16).forEach(movie => {

    trendingList.innerHTML += `
        <a href="../DetailMovie/detail.html?id=${movie.id}" class="movie-card">
            <img src="${movie.poster}">
            <h3>${movie.title}</h3>
        </a>
    `;

});