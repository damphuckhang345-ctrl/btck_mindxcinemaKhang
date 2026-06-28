
//Lây form có id là loginForm
const form = document.getElementById("loginForm");

//addeventListener để bắt sự kiện khi người dùng nhấn đăng nhập
form.addEventListener("submit", function(event){

    event.preventDefault();

    //lấy giá trị mà người dùng nhập email
    const email =
        document.getElementById("email").value;

    //Lấy giá trị mà người dùng nhập password
    const password =
        document.getElementById("password").value;

    //Lấy ra thông tin của user trong localstorage
    const user =
        JSON.parse(
            localStorage.getItem("user")
        );

    //Kiểm tra xem user có tài khoản hay chưa nếu chưa báo alert và cho exit luôn
    if(!user){
        alert("Chưa có tài khoản");
        return;
    }

    //Nếu user mà có tài khoản thì kiểm tra email và password xem có trùng khớp hay không
    if(
        email === user.email &&
        password === user.password
    ){

        localStorage.setItem(
            "isLogin",
            "true"
        );

        alert("Đăng nhập thành công");

        //Nếu thành công chuyển trang vào trang chủ
        window.location.href =
            "../HomePage/index.html";

    }else{

        alert("Sai email hoặc mật khẩu");

    }

});

