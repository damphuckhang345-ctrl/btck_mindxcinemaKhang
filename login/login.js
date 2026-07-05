// Lấy form có id là loginForm
const form = document.getElementById("loginForm");

// addEventListener để bắt sự kiện khi người dùng nhấn đăng nhập
form.addEventListener("submit", function(event){

    event.preventDefault();

    // Lấy giá trị email mà người dùng nhập
    const email =
        document.getElementById("email").value;

    // Lấy giá trị mật khẩu mà người dùng nhập
    const password =
        document.getElementById("password").value;

    // Lấy thông tin user trong localStorage
    const user =
        JSON.parse(
            localStorage.getItem("user")
        );

    // Kiểm tra xem user đã có tài khoản hay chưa, nếu chưa thì báo alert và dừng hàm
    if(!user){
        alert("Chưa có tài khoản");
        return;
    }

    // Nếu user đã có tài khoản thì kiểm tra email và mật khẩu xem có trùng khớp hay không
    if(
        email === user.email &&
        password === user.password
    ){

        localStorage.setItem(
            "isLogin",
            "true"
        );

        alert("Đăng nhập thành công");

        // Nếu đăng nhập thành công thì chuyển vào trang chủ
        window.location.href =
            "../HomePage/index.html";

    }else{

        alert("Sai email hoặc mật khẩu");

    }

});
