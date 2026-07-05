// Lấy form có id là registerForm
const form =
document.getElementById("registerForm");

// addEventListener để bắt sự kiện khi người dùng nhấn đăng ký
form.addEventListener("submit", function(event){

    event.preventDefault();

    // Lấy giá trị họ và tên mà người dùng nhập
    const fullName =
    document.getElementById("fullName").value;

    // Lấy giá trị email mà người dùng nhập
    const email =
    document.getElementById("email").value;

    // Lấy giá trị mật khẩu mà người dùng nhập
    const password =
    document.getElementById("password").value;

    // Lấy giá trị xác nhận mật khẩu mà người dùng nhập
    const confirmPassword =
    document.getElementById("confirmPassword").value;

    // Kiểm tra lại mật khẩu xem có khớp chưa, nếu chưa thì báo alert
    if(password !== confirmPassword){

        alert("Mật khẩu không khớp");

        return;
    }

    // Tạo object chứa thông tin người dùng gồm fullName, email và password
    const user = {
        fullName: fullName,
        email: email,
        password: password
    };

    // Lưu user vào localStorage
    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    // Nếu đăng ký thành công thì thông báo cho người dùng
    alert("Đăng ký thành công");

    // Sau khi đăng ký thành công, chuyển sang trang đăng nhập
    window.location.href =
    "../login/login.html";

});
