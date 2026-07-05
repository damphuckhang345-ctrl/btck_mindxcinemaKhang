# Tài liệu dự án Khang Cinema

Tài liệu này giải thích dự án ở mức cơ bản nhất để học sinh có thể hiểu được dự án đang có những trang nào, mỗi trang làm gì, dữ liệu đi qua đâu và JavaScript đang xử lý chức năng như thế nào.

## 1. Tổng quan dự án

Khang Cinema là một website xem thông tin phim đơn giản, được viết bằng:

- HTML: tạo cấu trúc trang.
- CSS: tạo giao diện, màu sắc, bố cục, responsive.
- JavaScript thuần: xử lý dữ liệu, tìm kiếm, chuyển trang, đăng nhập, đăng ký, hiển thị loading.

Dự án không dùng framework như React, Vue, Angular. Dự án cũng chưa dùng backend thật. Dữ liệu phim đang được lấy từ file giả lập `data/movie.js`.

## 2. Các chức năng hiện tại

Dự án hiện có các chức năng chính:

- Trang chủ hiển thị danh sách phim từ dữ liệu giả lập.
- Trang chủ có phần hero hiển thị phim nổi bật đầu tiên.
- Trang chủ có thống kê số phim, số thể loại và năm phim mới nhất.
- Trang chủ có tìm kiếm phim theo tên phim, thể loại, đạo diễn hoặc năm.
- Tìm kiếm không phân biệt có dấu hoặc không dấu. Ví dụ gõ `hanh dong` vẫn tìm được `Hành động`.
- Có hiệu ứng loading bằng vòng xoay khi giả lập lấy dữ liệu.
- Có trang chi tiết phim theo từng `id`.
- Trang chi tiết hiển thị poster, tên phim, thể loại, năm, thời lượng, đánh giá, mô tả, đạo diễn và diễn viên.
- Trang chi tiết có video player để xem video.
- Có trang đăng ký tài khoản bằng `localStorage`.
- Có trang đăng nhập bằng tài khoản đã lưu trong `localStorage`.
- Nút đăng nhập/đăng xuất trên trang chủ dựa vào trạng thái `isLogin` trong `localStorage`.

## 3. Cấu trúc thư mục

```txt
btck_mindxcinemaKhang/
├── data/
│   └── movie.js
├── HomePage/
│   ├── index.html
│   ├── style.css
│   ├── home.js
│   ├── watch.html
│   └── watch.css
├── DetailMovie/
│   ├── detail.html
│   ├── detail.css
│   └── detail.js
├── login/
│   ├── login.html
│   ├── login.css
│   └── login.js
├── register/
│   ├── register.html
│   ├── register.css
│   └── register.js
└── docs.md
```

## 4. Vai trò của từng nhóm file

### `data/movie.js`

Đây là file chứa dữ liệu phim giả lập.

Mỗi phim là một object, ví dụ:

```js
{
    id: 1,
    title: "Avengers: Endgame",
    year: 2019,
    duration: "181 phút",
    genre: "Hành động, Phiêu lưu",
    director: "Anthony Russo, Joe Russo",
    rating: "8.4/10",
    poster: "...",
    backdrop: "...",
    video: "...",
    description: "...",
    cast: ["Robert Downey Jr.", "Chris Evans"]
}
```

Ý nghĩa các trường:

- `id`: mã định danh duy nhất của phim.
- `title`: tên phim.
- `year`: năm phát hành.
- `duration`: thời lượng phim.
- `genre`: thể loại phim.
- `director`: đạo diễn.
- `rating`: điểm đánh giá.
- `poster`: ảnh poster dọc.
- `backdrop`: ảnh nền ngang.
- `video`: đường dẫn video.
- `description`: mô tả phim.
- `cast`: danh sách diễn viên.

Cuối file có dòng:

```js
window.movies = movies;
```

Dòng này đưa mảng `movies` ra biến toàn cục `window.movies`, giúp các file khác như `home.js` và `detail.js` đọc được dữ liệu phim.

## 5. Trang chủ

Trang chủ gồm 3 file:

- `HomePage/index.html`
- `HomePage/style.css`
- `HomePage/home.js`

### 5.1. `index.html`

File này tạo khung giao diện trang chủ:

- Header: logo, menu, nút đăng nhập/đăng xuất.
- Hero: khu vực phim nổi bật.
- Ô tìm kiếm.
- Thống kê nhanh.
- Khu kết quả tìm kiếm.
- Danh sách phim nổi bật.
- Danh sách phim thịnh hành.
- Footer liên hệ.
- Loading overlay.

Cuối file có 2 dòng script:

```html
<script src="../data/movie.js"></script>
<script src="./home.js"></script>
```

Thứ tự này rất quan trọng:

- `movie.js` phải được load trước để tạo `window.movies`.
- `home.js` load sau để lấy dữ liệu từ `window.movies` và render ra giao diện.

### 5.2. `style.css`

File này tạo giao diện cho trang chủ:

- Màu nền tối kiểu rạp phim.
- Header cố định ở trên cùng.
- Hero có ảnh nền lớn.
- Card phim dạng lưới.
- Ô tìm kiếm.
- Loading overlay.
- Spinner xoay.
- Responsive cho màn hình nhỏ.

Ví dụ spinner dùng CSS animation:

```css
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
```

Ý nghĩa: phần tử spinner sẽ xoay 360 độ liên tục.

### 5.3. `home.js`

File này xử lý logic của trang chủ.

Các biến đầu file:

```js
const FETCH_DELAY = 1600;
const authButton = document.getElementById("logoutBtn");
const featuredList = document.getElementById("featured-list");
const trendingList = document.getElementById("trending-list");
```

Ý nghĩa:

- `FETCH_DELAY`: thời gian chờ giả lập khi lấy dữ liệu.
- `authButton`: nút đăng nhập/đăng xuất.
- `featuredList`: nơi render danh sách phim nổi bật.
- `trendingList`: nơi render danh sách phim thịnh hành.

### 5.4. Luồng chạy của trang chủ

Khi mở trang chủ, JavaScript chạy theo thứ tự:

1. Gọi `setupAuthButton()`.
2. Gọi `loadHomePage()`.
3. Bật loading.
4. Gọi `mockFetchMovies()` để giả lập lấy dữ liệu.
5. Sau vài giây, nhận dữ liệu từ `window.movies`.
6. Render hero.
7. Render thống kê.
8. Render danh sách phim.
9. Gắn chức năng tìm kiếm.
10. Tắt loading.

### 5.5. Hàm `mockFetchMovies()`

```js
function mockFetchMovies() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve([...(window.movies || [])]);
        }, FETCH_DELAY);
    });
}
```

Hàm này giả lập việc gọi API.

Giải thích cơ bản:

- `Promise`: đại diện cho một công việc chưa xong ngay lập tức.
- `setTimeout`: chờ một khoảng thời gian rồi mới chạy code bên trong.
- `resolve`: trả dữ liệu về sau khi chờ xong.
- `window.movies`: dữ liệu phim từ file `data/movie.js`.

Trong dự án thật có backend, phần này có thể đổi thành:

```js
fetch("duong-dan-api")
```

### 5.6. Hàm `renderMovieCards()`

Hàm này nhận vào một danh sách phim và tạo HTML cho từng card phim.

Mỗi card phim có:

- Ảnh poster.
- Tên phim.
- Năm và thời lượng.
- Thể loại.
- Đánh giá.
- Nút chữ `Chi tiết`.

Card phim có link:

```html
../DetailMovie/detail.html?id=${movie.id}
```

Ví dụ phim có `id` là `3`, link sẽ là:

```txt
../DetailMovie/detail.html?id=3
```

Nhờ vậy trang chi tiết biết cần hiển thị phim nào.

### 5.7. Chức năng tìm kiếm

Khi người dùng nhập vào ô tìm kiếm, hàm `runSearch()` sẽ chạy.

Tìm kiếm dựa trên các thông tin:

- Tên phim.
- Thể loại.
- Đạo diễn.
- Năm phát hành.

Hàm `normalizeText()` giúp tìm kiếm không phân biệt dấu:

```js
function normalizeText(value) {
    return value
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d");
}
```

Giải thích:

- `trim()`: xóa khoảng trắng thừa ở đầu và cuối.
- `toLowerCase()`: chuyển về chữ thường.
- `normalize("NFD")`: tách chữ và dấu tiếng Việt.
- `replace(/[\u0300-\u036f]/g, "")`: xóa dấu.
- `replace(/đ/g, "d")`: đổi `đ` thành `d`.

Ví dụ:

- `Hành động` được đổi thành `hanh dong`.
- Người dùng gõ `hanh dong` vẫn tìm được kết quả.

## 6. Trang chi tiết phim

Trang chi tiết gồm 3 file:

- `DetailMovie/detail.html`
- `DetailMovie/detail.css`
- `DetailMovie/detail.js`

### 6.1. `detail.html`

File này tạo khung trang chi tiết:

- Header có nút về trang chủ.
- Khu hero chi tiết phim.
- Poster phim.
- Tên phim.
- Thông tin năm, thời lượng, đánh giá.
- Mô tả phim.
- Nút xem video.
- Video player.
- Tóm tắt phim.
- Đạo diễn.
- Dàn diễn viên.
- Khu thông báo không tìm thấy phim.
- Loading overlay.

Các phần như tên phim, mô tả, poster chưa viết cứng mà để JavaScript đổ dữ liệu vào.

### 6.2. Luồng chạy của trang chi tiết

Khi mở trang:

```txt
detail.html?id=1
```

JavaScript sẽ:

1. Đọc `id` trên URL.
2. Bật loading.
3. Tìm phim có `id` tương ứng trong `window.movies`.
4. Nếu tìm thấy, render dữ liệu phim.
5. Nếu không tìm thấy, hiện thông báo lỗi.
6. Tắt loading.

### 6.3. Đọc `id` từ URL

```js
function getMovieIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return Number(params.get("id"));
}
```

Giải thích:

- `window.location.search` lấy phần sau dấu `?` trên URL.
- `URLSearchParams` giúp đọc tham số URL dễ hơn.
- `params.get("id")` lấy giá trị của `id`.
- `Number(...)` chuyển giá trị từ chuỗi sang số.

Ví dụ:

```txt
detail.html?id=12
```

Kết quả lấy được là số `12`.

### 6.4. Tìm phim theo id

```js
const movie = movies.find(function (item) {
    return item.id === movieId;
});
```

Giải thích:

- `movies.find(...)` tìm phần tử đầu tiên thỏa điều kiện.
- Điều kiện ở đây là `item.id === movieId`.
- Nếu tìm thấy thì trả về phim.
- Nếu không tìm thấy thì trả về `undefined`.

### 6.5. Render video

```js
source.src = movie.video;
video.load();
```

Giải thích:

- `movie.video` là link video trong dữ liệu phim.
- Gán link đó vào thẻ `<source>`.
- `video.load()` yêu cầu trình duyệt nạp lại video mới.

Khi bấm nút `Xem video`, code sẽ cuộn xuống khu video và thử phát video:

```js
video.play().catch(function () {});
```

`catch` được dùng để tránh lỗi nếu trình duyệt chặn tự động phát video.

## 7. Đăng ký tài khoản

Trang đăng ký gồm:

- `register/register.html`
- `register/register.css`
- `register/register.js`

### 7.1. Người dùng nhập gì?

Form đăng ký có các ô:

- Họ và tên.
- Email.
- Mật khẩu.
- Xác nhận mật khẩu.

### 7.2. Kiểm tra mật khẩu

```js
if(password !== confirmPassword){
    alert("Mật khẩu không khớp");
    return;
}
```

Giải thích:

- Nếu mật khẩu và xác nhận mật khẩu khác nhau, hiện thông báo lỗi.
- `return` dùng để dừng hàm, không cho đăng ký tiếp.

### 7.3. Lưu tài khoản vào localStorage

```js
const user = {
    fullName: fullName,
    email: email,
    password: password
};

localStorage.setItem("user", JSON.stringify(user));
```

Giải thích:

- Tạo object `user` chứa thông tin người dùng.
- `JSON.stringify(user)` chuyển object thành chuỗi.
- `localStorage.setItem(...)` lưu chuỗi đó vào trình duyệt.

Lưu ý: đây chỉ là cách học cơ bản. Dự án thật không nên lưu mật khẩu trực tiếp trong `localStorage`.

## 8. Đăng nhập

Trang đăng nhập gồm:

- `login/login.html`
- `login/login.css`
- `login/login.js`

### 8.1. Lấy tài khoản đã đăng ký

```js
const user = JSON.parse(localStorage.getItem("user"));
```

Giải thích:

- `localStorage.getItem("user")` lấy chuỗi user đã lưu.
- `JSON.parse(...)` đổi chuỗi đó về object JavaScript.

### 8.2. Kiểm tra email và mật khẩu

```js
if(
    email === user.email &&
    password === user.password
){
    localStorage.setItem("isLogin", "true");
}
```

Giải thích:

- Nếu email nhập vào giống email đã lưu.
- Và mật khẩu nhập vào giống mật khẩu đã lưu.
- Thì đăng nhập thành công.
- Sau đó lưu `isLogin = true` vào `localStorage`.

### 8.3. Chuyển trang sau khi đăng nhập

```js
window.location.href = "../HomePage/index.html";
```

Dòng này chuyển người dùng sang trang chủ.

## 9. Nút đăng nhập và đăng xuất trên trang chủ

Trong `home.js`, hàm `setupAuthButton()` kiểm tra:

```js
const isLogin = localStorage.getItem("isLogin") === "true";
```

Nếu đã đăng nhập:

- Nút hiển thị `Đăng xuất`.
- Khi bấm sẽ xóa `isLogin`.
- Sau đó chuyển về trang đăng nhập.

Nếu chưa đăng nhập:

- Nút hiển thị `Đăng nhập`.
- Khi bấm sẽ chuyển sang trang đăng nhập.

## 10. Loading giả lập

Dự án có loading ở:

- Trang chủ.
- Trang chi tiết phim.

Cách hoạt động:

1. Trước khi lấy dữ liệu, gọi `showLoading(...)`.
2. Lớp phủ loading hiện ra.
3. Sau khi dữ liệu đã sẵn sàng, gọi `hideLoading()`.
4. Lớp phủ loading biến mất.

HTML dùng thuộc tính `hidden`:

```html
<div id="loadingOverlay" hidden>
```

JavaScript bật loading:

```js
loadingOverlay.hidden = false;
```

JavaScript tắt loading:

```js
loadingOverlay.hidden = true;
```

## 11. Cách thêm một phim mới

Muốn thêm phim mới, chỉ cần mở file:

```txt
data/movie.js
```

Sau đó thêm một object mới vào mảng `movies`.

Ví dụ:

```js
{
    id: 17,
    title: "Tên phim mới",
    year: 2026,
    duration: "120 phút",
    genre: "Hành động",
    director: "Tên đạo diễn",
    rating: "8.0/10",
    poster: "link ảnh poster",
    backdrop: "link ảnh nền",
    video: "link video mp4",
    description: "Mô tả phim",
    cast: ["Diễn viên 1", "Diễn viên 2"]
}
```

Lưu ý:

- `id` không được trùng với phim khác.
- Nên có đủ các trường để trang chủ và trang chi tiết không bị thiếu dữ liệu.
- `video` nên là link video `.mp4` để thẻ `<video>` chạy dễ hơn.

## 12. Các id và class quan trọng

| Tên | Nằm ở file | Tác dụng |
| --- | --- | --- |
| `searchInput` | `HomePage/index.html` | Ô nhập từ khóa tìm kiếm |
| `searchForm` | `HomePage/index.html` | Form tìm kiếm |
| `featured-list` | `HomePage/index.html` | Nơi hiển thị phim nổi bật |
| `trending-list` | `HomePage/index.html` | Nơi hiển thị phim thịnh hành |
| `loadingOverlay` | Trang chủ và trang chi tiết | Lớp phủ loading |
| `moviePoster` | `DetailMovie/detail.html` | Ảnh poster của phim |
| `movieVideo` | `DetailMovie/detail.html` | Thẻ video để xem phim |
| `loginForm` | `login/login.html` | Form đăng nhập |
| `registerForm` | `register/register.html` | Form đăng ký |

## 13. Cách chạy thử dự án

Vì dự án chỉ dùng HTML, CSS và JavaScript thuần, có thể mở trực tiếp bằng trình duyệt.

Gợi ý luồng chạy thử:

1. Mở `register/register.html`.
2. Đăng ký tài khoản.
3. Tự động chuyển sang `login/login.html`.
4. Đăng nhập.
5. Tự động chuyển sang `HomePage/index.html`.
6. Tìm kiếm phim ở ô tìm kiếm.
7. Bấm một phim để qua trang chi tiết.
8. Bấm `Xem video` để xem video.

Lưu ý: ảnh và video trong dự án đang dùng link online, nên máy cần có internet để tải được đầy đủ hình ảnh và video.

## 14. Kiến thức học sinh học được từ dự án

Qua dự án này, học sinh có thể học:

- Cách tách HTML, CSS và JavaScript thành các file riêng.
- Cách dùng `id` và `class` để kết nối HTML với CSS/JS.
- Cách render danh sách bằng JavaScript.
- Cách dùng mảng và object trong JavaScript.
- Cách dùng `map`, `filter`, `find`.
- Cách dùng `localStorage`.
- Cách dùng `setTimeout` để giả lập chờ dữ liệu.
- Cách dùng `Promise` ở mức cơ bản.
- Cách đọc tham số trên URL bằng `URLSearchParams`.
- Cách dùng thẻ `<video>`.
- Cách làm tìm kiếm không phân biệt dấu tiếng Việt.

## 15. Hạn chế hiện tại của dự án

Dự án này đang phục vụ mục tiêu học tập, nên còn một số hạn chế:

- Chưa có backend thật.
- Tài khoản chỉ lưu trong trình duyệt bằng `localStorage`.
- Mật khẩu chưa được mã hóa.
- Video chỉ là link mẫu, chưa phải video thật của từng phim.
- Chưa có phân quyền người dùng.
- Chưa có chức năng yêu thích, đặt vé hoặc bình luận.

Những hạn chế này là bình thường với một dự án cơ bản. Sau khi học sinh hiểu được bản hiện tại, có thể nâng cấp dần từng phần.

## 16. Gợi ý bài tập mở rộng

Học sinh có thể thử làm thêm:

- Thêm bộ lọc theo thể loại phim.
- Thêm nút sắp xếp phim theo năm mới nhất.
- Thêm chức năng yêu thích phim bằng `localStorage`.
- Thêm trang danh sách phim riêng.
- Thêm kiểm tra form đăng ký không được để trống.
- Thêm thông báo đẹp thay cho `alert`.
- Thêm video riêng cho từng phim.
- Thêm giao diện sáng/tối.
