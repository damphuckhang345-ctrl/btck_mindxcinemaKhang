//Lấy form có id là registerForm
const form =
document.getElementById("registerForm");

//addEventListener để bắt sự kiện để khi người dùng nhấn đăng ký   
form.addEventListener("submit", function(event){

    event.preventDefault();

    //Lấy giá trị của người dùng nhập đầy đủ tên
    const fullName =
    document.getElementById("fullName").value;

    //Lấy giá trị của người dùng nhập email
    const email =
    document.getElementById("email").value;

    //Lấy giá trị của người dùng nhập password
    const password =
    document.getElementById("password").value;

    //Lấy giá trị của người dùng xác nhận lại password
    const confirmPassword =
    document.getElementById("confirmPassword").value;

    //Kiểm tra lại mật khẩu xem có khớp chưa nếu chưa báo alert
    if(password !== confirmPassword){

        alert("Mật khẩu không khớp");

        return;
    }

    //Tạo object(fullname, email, password) của user
    const user = {
        fullName: fullName,
        email: email,
        password: password
    };

    //Lưu vào localstorage
    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    //Nếu đăng ký thành công thì sẽ thông báo
    alert("Đăng ký thành công");

    //Trang này sẽ chuyển sang trang đăng nhập
    window.location.href =
    "../login/login.html";

});
