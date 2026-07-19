# Khang Cinema - Tài liệu demo sản phẩm

Tài liệu này giúp học sinh chuẩn bị phần trình bày demo website Khang Cinema trước ban giám khảo. Nội dung gồm:

- Toàn bộ tính năng hiện có của website.
- Các kiến thức lập trình đã sử dụng để tạo nên website.
- Các câu hỏi ban giám khảo có thể hỏi về tính năng, kỹ thuật và hướng phát triển.

## 1. Giới thiệu ngắn về sản phẩm

Khang Cinema là một website giới thiệu và xem thông tin phim. Website được xây dựng bằng HTML, CSS và JavaScript thuần, chưa sử dụng backend thật. Dữ liệu phim hiện được giả lập trong file `data/movie.js`.

Người dùng có thể:

- Đăng ký tài khoản.
- Đăng nhập tài khoản.
- Xem danh sách phim trên trang chủ.
- Tìm kiếm phim.
- Xem chi tiết từng phim.
- Xem video mẫu của phim.
- Đăng xuất khỏi website.

## 2. Cấu trúc dự án

```txt
btck_mindxcinemaKhang/
|-- data/
|   `-- movie.js
|-- HomePage/
|   |-- index.html
|   |-- style.css
|   |-- home.js
|   |-- watch.html
|   `-- watch.css
|-- DetailMovie/
|   |-- detail.html
|   |-- detail.css
|   `-- detail.js
|-- login/
|   |-- login.html
|   |-- login.css
|   `-- login.js
|-- register/
|   |-- register.html
|   |-- register.css
|   `-- register.js
|-- docs.md
`-- DEMO_SAN_PHAM.md
```

## 3. Toàn bộ tính năng của website

### 3.1. Trang đăng ký

File liên quan:

- `register/register.html`
- `register/register.css`
- `register/register.js`

Tính năng:

- Cho người dùng nhập họ tên, email, mật khẩu và xác nhận mật khẩu.
- Kiểm tra mật khẩu và xác nhận mật khẩu có trùng nhau hay không.
- Nếu mật khẩu không khớp, hiển thị thông báo lỗi bằng `alert`.
- Nếu thông tin hợp lệ, tạo object `user`.
- Lưu thông tin user vào `localStorage`.
- Chuyển người dùng sang trang đăng nhập sau khi đăng ký thành công.

Khi demo, học sinh có thể đăng ký một tài khoản mới, sau đó mở DevTools -> Application -> Local Storage để cho ban giám khảo thấy dữ liệu `user` đã được lưu.

### 3.2. Trang đăng nhập

File liên quan:

- `login/login.html`
- `login/login.css`
- `login/login.js`

Tính năng:

- Cho người dùng nhập email và mật khẩu.
- Lấy thông tin `user` đã lưu trong `localStorage`.
- Nếu chưa có tài khoản, hiển thị thông báo "Chưa có tài khoản".
- Nếu email và mật khẩu trùng với dữ liệu đã đăng ký, đăng nhập thành công.
- Lưu trạng thái đăng nhập bằng `localStorage.setItem("isLogin", "true")`.
- Chuyển người dùng về trang chủ sau khi đăng nhập.
- Nếu email hoặc mật khẩu sai, hiển thị thông báo lỗi.

Khi demo, nên thử cả trường hợp đăng nhập sai và đăng nhập đúng để thể hiện phần kiểm tra dữ liệu.

### 3.3. Nút đăng nhập và đăng xuất trên trang chủ

File liên quan:

- `HomePage/index.html`
- `HomePage/home.js`

Tính năng:

- Nút trên header tự đổi nội dung theo trạng thái đăng nhập.
- Nếu `localStorage.getItem("isLogin") === "true"`, nút hiển thị "Đăng xuất".
- Nếu chưa đăng nhập, nút hiển thị "Đăng nhập".
- Khi bấm "Đăng xuất", website xóa `isLogin` khỏi `localStorage`.
- Sau đó chuyển người dùng về trang đăng nhập.

Kiến thức liên quan:

- `localStorage.getItem`
- `localStorage.removeItem`
- Câu điều kiện `if`
- Sự kiện click bằng `addEventListener`
- Chuyển trang bằng `window.location.href`

### 3.4. Trang chủ hiển thị danh sách phim

File liên quan:

- `HomePage/index.html`
- `HomePage/style.css`
- `HomePage/home.js`
- `data/movie.js`

Tính năng:

- Hiển thị giao diện trang chủ của Khang Cinema.
- Có header gồm logo, menu điều hướng và nút đăng nhập/đăng xuất.
- Có khu vực hero hiển thị phim nổi bật đầu tiên trong danh sách.
- Có thống kê nhanh:
  - Tổng số phim.
  - Tổng số thể loại.
  - Năm phim mới nhất.
- Hiển thị khu "Phim nổi bật".
- Hiển thị khu "Phim thịnh hành".
- Mỗi phim được hiển thị bằng card gồm poster, tên phim, năm phát hành, thời lượng, thể loại, điểm đánh giá và link sang trang chi tiết.

Kiến thức liên quan:

- DOM.
- `document.getElementById`.
- Render danh sách bằng `map`.
- Gắn HTML động bằng `innerHTML`.
- Mảng và object trong JavaScript.
- Tách dữ liệu ra file riêng.

### 3.5. Dữ liệu phim giả lập

File liên quan:

- `data/movie.js`

Tính năng:

- Chứa mảng `movies`.
- Mỗi phim là một object riêng.
- Mỗi object phim có các trường: `id`, `title`, `year`, `duration`, `genre`, `director`, `rating`, `poster`, `backdrop`, `video`, `description`, `cast`.
- Gắn dữ liệu vào `window.movies` để các file JavaScript khác có thể sử dụng.

Khi demo có thể nói:

"Vì dự án chưa có backend nên em tạo một file dữ liệu giả lập. Khi có backend thật, phần `window.movies` có thể được thay bằng dữ liệu lấy từ API."

### 3.6. Loading khi lấy dữ liệu

File liên quan:

- `HomePage/home.js`
- `DetailMovie/detail.js`
- `HomePage/style.css`
- `DetailMovie/detail.css`

Tính năng:

- Khi mở trang chủ, website hiển thị loading trước khi hiện danh sách phim.
- Khi mở trang chi tiết, website hiển thị loading trước khi hiện thông tin phim.
- Dùng `setTimeout` để giả lập thời gian lấy dữ liệu.
- Dùng `Promise` và `async/await` để viết code bất đồng bộ dễ đọc hơn.
- Dùng thuộc tính `hidden` để ẩn/hiện loading overlay.

Kiến thức liên quan:

- Bất đồng bộ trong JavaScript.
- `Promise`.
- `setTimeout`.
- `async/await`.
- `try/catch/finally`.
- Thuộc tính HTML `hidden`.
- CSS spinner animation.

### 3.7. Tìm kiếm phim

File liên quan:

- `HomePage/index.html`
- `HomePage/home.js`

Tính năng:

- Người dùng có thể tìm phim ngay trên trang chủ.
- Tìm kiếm theo tên phim, thể loại, đạo diễn hoặc năm phát hành.
- Kết quả tìm kiếm hiển thị riêng trong khu "Tìm kiếm phim".
- Khi có từ khóa, ẩn khu "Phim nổi bật" và "Phim thịnh hành".
- Khi xóa từ khóa, hiển thị lại danh sách mặc định.
- Hiển thị số lượng phim tìm thấy.
- Nếu không có kết quả, hiển thị thông báo không tìm thấy phim phù hợp.
- Tìm kiếm không phân biệt chữ hoa/chữ thường.
- Tìm kiếm hỗ trợ không dấu tiếng Việt, ví dụ gõ `hanh dong` vẫn tìm được phim có thể loại `Hành động`.

Kiến thức liên quan:

- Sự kiện `submit`.
- Sự kiện `input`.
- `event.preventDefault()`.
- `filter`.
- `includes`.
- `join`.
- `trim`.
- `toLowerCase`.
- `normalize("NFD")`.
- Biểu thức chính quy RegExp.

### 3.8. Trang chi tiết phim

File liên quan:

- `DetailMovie/detail.html`
- `DetailMovie/detail.css`
- `DetailMovie/detail.js`

Tính năng:

- Khi bấm vào một card phim, website chuyển sang trang chi tiết.
- Link có dạng `detail.html?id=...`.
- Trang chi tiết đọc `id` trên URL.
- Tìm phim tương ứng trong `window.movies`.
- Nếu tìm thấy phim, hiển thị poster, ảnh nền, tên phim, thể loại, năm phát hành, thời lượng, điểm đánh giá, mô tả phim, đạo diễn, danh sách diễn viên và video.
- Nếu không tìm thấy phim, hiển thị trang "Không tìm thấy phim".

Kiến thức liên quan:

- Query string trên URL.
- `window.location.search`.
- `URLSearchParams`.
- `Number`.
- `find`.
- Gắn nội dung vào DOM.
- Gắn ảnh và video động từ dữ liệu.

### 3.9. Trình phát video

File liên quan:

- `DetailMovie/detail.html`
- `DetailMovie/detail.js`
- `HomePage/watch.html`

Tính năng:

- Dùng thẻ HTML `<video>` để phát video.
- Video có nút điều khiển mặc định của trình duyệt.
- Link video được lấy từ trường `movie.video`.
- Nút "Xem video" cuộn trang xuống khu video.
- Sau khi cuộn xuống, website thử phát video bằng `video.play()`.
- Có `catch` để tránh lỗi nếu trình duyệt chặn autoplay.

Kiến thức liên quan:

- Thẻ `<video>`.
- Thẻ `<source>`.
- Thuộc tính `controls`.
- Thuộc tính `poster`.
- `video.load()`.
- `video.play()`.
- `scrollIntoView`.

### 3.10. Giao diện và responsive

File liên quan:

- Các file `.css` trong `HomePage`, `DetailMovie`, `login`, `register`.

Tính năng:

- Giao diện theo chủ đề rạp phim.
- Card phim có poster, thông tin và nút chi tiết.
- Header điều hướng.
- Form đăng nhập/đăng ký riêng.
- Loading overlay và spinner.
- Layout có xử lý cho màn hình nhỏ bằng CSS responsive.

Kiến thức liên quan:

- CSS selector.
- Flexbox.
- Grid.
- Box model.
- Padding, margin, border-radius.
- Hover effect.
- Responsive với media query.
- CSS animation với `@keyframes`.

## 4. Kiến thức đã sử dụng trong dự án

### 4.1. HTML

HTML được dùng để tạo cấu trúc nội dung:

- `header`: phần đầu trang.
- `nav`: menu điều hướng.
- `main`: nội dung chính.
- `section`: từng khu nội dung.
- `footer`: chân trang.
- `form`: biểu mẫu đăng nhập, đăng ký và tìm kiếm.
- `input`: ô nhập dữ liệu.
- `button`: nút bấm.
- `a`: link chuyển trang.
- `img`: hiển thị ảnh.
- `video`: hiển thị video.

### 4.2. CSS

CSS được dùng để tạo giao diện:

- Màu sắc.
- Font chữ.
- Khoảng cách.
- Bố cục.
- Card phim.
- Header.
- Form.
- Responsive.
- Hiệu ứng loading.
- Hiệu ứng hover.

### 4.3. JavaScript DOM

DOM giúp JavaScript tương tác với HTML.

Ví dụ:

```js
document.getElementById("searchInput")
```

Dùng để lấy phần tử có id là `searchInput`.

```js
element.textContent = "Nội dung mới";
```

Dùng để thay đổi nội dung chữ của phần tử.

```js
element.innerHTML = "<p>Nội dung HTML</p>";
```

Dùng để chèn HTML vào trang.

### 4.4. Event

Event là sự kiện người dùng tạo ra. Dự án có dùng:

- `click`: khi bấm nút.
- `submit`: khi gửi form.
- `input`: khi gõ vào ô tìm kiếm.

Ví dụ:

```js
searchInput.addEventListener("input", runSearch);
```

Nghĩa là khi người dùng gõ vào ô tìm kiếm, hàm `runSearch` sẽ chạy.

### 4.5. localStorage

`localStorage` là bộ nhớ lưu dữ liệu trên trình duyệt.

Dự án dùng `localStorage` để:

- Lưu tài khoản người dùng với key `user`.
- Lưu trạng thái đăng nhập với key `isLogin`.
- Xóa trạng thái đăng nhập khi đăng xuất.

Ví dụ:

```js
localStorage.setItem("isLogin", "true");
localStorage.getItem("isLogin");
localStorage.removeItem("isLogin");
```

Lưu ý bảo mật:

- `localStorage` không phù hợp để lưu mật khẩu trong sản phẩm thật.
- Trong dự án này, nó được dùng để học cách lưu dữ liệu phía trình duyệt.
- Sản phẩm thật nên có backend, mã hóa/hash mật khẩu và xác thực an toàn hơn.

### 4.6. JSON

`localStorage` chỉ lưu được chuỗi, nên object cần được chuyển thành chuỗi JSON.

```js
JSON.stringify(user)
```

Dùng để chuyển object thành chuỗi.

```js
JSON.parse(localStorage.getItem("user"))
```

Dùng để chuyển chuỗi JSON về object.

### 4.7. Array và Object

Dữ liệu phim được lưu bằng mảng các object. Một object phim có dạng:

```js
{
    id: 1,
    title: "Avengers: Endgame",
    year: 2019,
    genre: "Hành động, Phiêu lưu"
}
```

Các hàm mảng đã dùng:

- `map`: tạo HTML cho từng phim.
- `filter`: lọc phim khi tìm kiếm.
- `find`: tìm một phim theo `id`.
- `forEach`: duyệt danh sách thể loại để thống kê.
- `slice`: chia danh sách phim thành các khu khác nhau.

### 4.8. URLSearchParams

`URLSearchParams` được dùng để đọc `id` trên URL.

Ví dụ URL:

```txt
detail.html?id=3
```

Code:

```js
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));
```

Ý nghĩa:

- Lấy phần `?id=3`.
- Đọc giá trị của `id`.
- Chuyển từ chuỗi `"3"` thành số `3`.

### 4.9. Bất đồng bộ với Promise và async/await

Dự án chưa gọi API thật, nhưng có giả lập qua `Promise` và `setTimeout`.

Mục đích:

- Giúp website có trải nghiệm loading giống ứng dụng thật.
- Giúp học sinh làm quen với cách xử lý dữ liệu bất đồng bộ.

Ví dụ:

```js
movieStore = await mockFetchMovies();
```

Nghĩa là code sẽ đợi lấy xong dữ liệu rồi mới render giao diện.

### 4.10. Tìm kiếm không dấu tiếng Việt

Dự án dùng hàm chuẩn hóa chuỗi:

```js
value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");
```

Ý nghĩa:

- Xóa khoảng trắng thừa.
- Chuyển về chữ thường.
- Tách dấu tiếng Việt.
- Xóa dấu.
- Đổi chữ `đ` thành `d`.

Nhờ vậy người dùng có thể gõ không dấu mà vẫn tìm được phim.

## 5. Luồng demo gợi ý cho học sinh

1. Mở trang đăng ký.
2. Đăng ký một tài khoản mới.
3. Giải thích tài khoản được lưu vào `localStorage`.
4. Đăng nhập bằng tài khoản vừa tạo.
5. Vào trang chủ và giới thiệu các khu vực: hero, thống kê nhanh, phim nổi bật, phim thịnh hành.
6. Tìm kiếm phim bằng tên phim, thể loại hoặc năm.
7. Tìm kiếm thử không dấu, ví dụ `hanh dong`.
8. Bấm vào một phim để sang trang chi tiết.
9. Giải thích `id` trên URL giúp trang chi tiết biết cần hiển thị phim nào.
10. Bấm nút "Xem video" để cuộn xuống video player.
11. Quay lại trang chủ.
12. Đăng xuất.
13. Nói về hạn chế và hướng phát triển.

## 6. Hạn chế hiện tại của dự án

Dự án hiện tại phù hợp mục tiêu học tập, nhưng còn một số hạn chế:

- Chưa có backend thật.
- Chưa có database thật.
- Tài khoản chỉ lưu trong `localStorage`.
- Mật khẩu đang lưu dạng text, chưa được mã hóa/hash.
- Chưa có chức năng bảo vệ route, nên người dùng vẫn có thể mở trang chủ bằng đường dẫn trực tiếp.
- Video đang là video mẫu, chưa phải video riêng thật của từng phim.
- Ảnh poster và backdrop dùng link online.
- Chưa có chức năng đặt vé.
- Chưa có chức năng yêu thích phim.
- Chưa có bình luận hoặc đánh giá của người dùng.

## 7. Hướng phát triển tiếp theo

Nếu có thêm thời gian, có thể nâng cấp:

- Thêm backend bằng Node.js/Express.
- Thêm database để lưu user và phim.
- Mã hóa/hash mật khẩu bằng bcrypt.
- Thêm đăng nhập an toàn bằng token/session.
- Thêm chức năng đặt vé.
- Thêm chức năng lọc phim theo thể loại.
- Thêm sắp xếp phim theo năm hoặc điểm đánh giá.
- Thêm yêu thích phim bằng `localStorage`.
- Thêm trang quản trị để thêm/sửa/xóa phim.
- Thêm bình luận và đánh giá phim.
- Thêm thông báo đẹp thay cho `alert`.
- Cải thiện responsive cho nhiều kích thước màn hình.

## 8. Câu hỏi BGK có thể hỏi về tính năng

### Câu 1: Website của em có những tính năng chính nào?

Gợi ý trả lời:

Website có đăng ký, đăng nhập, đăng xuất, hiển thị danh sách phim, tìm kiếm phim, xem chi tiết phim, xem video mẫu và loading khi lấy dữ liệu giả lập.

### Câu 2: Tại sao khi bấm vào một phim lại hiển thị đúng chi tiết phim đó?

Gợi ý trả lời:

Mỗi phim có một `id` riêng. Khi bấm vào card phim, website chuyển sang link `detail.html?id=...`. Trang chi tiết đọc `id` trên URL bằng `URLSearchParams`, sau đó dùng `find` để tìm phim có `id` tương ứng trong mảng `movies`.

### Câu 3: Chức năng tìm kiếm hoạt động như thế nào?

Gợi ý trả lời:

Khi người dùng gõ từ khóa, JavaScript lấy từ khóa đó và lọc danh sách phim bằng `filter`. Mỗi phim sẽ được ghép các thông tin như tên, thể loại, đạo diễn và năm thành một chuỗi. Nếu chuỗi đó có chứa từ khóa thì phim được đưa vào kết quả.

### Câu 4: Tại sao gõ không dấu vẫn tìm được phim tiếng Việt?

Gợi ý trả lời:

Vì em có hàm `normalizeText` để chuẩn hóa cả từ khóa người dùng nhập và dữ liệu phim. Hàm này chuyển chữ về chữ thường, tách và xóa dấu tiếng Việt, đổi `đ` thành `d`, nên `hanh dong` vẫn khớp với `Hành động`.

### Câu 5: Loading trên website được tạo như thế nào?

Gợi ý trả lời:

Em tạo một lớp loading overlay trong HTML và CSS. Trong JavaScript, trước khi lấy dữ liệu thì gọi `showLoading`, sau khi lấy xong thì gọi `hideLoading`. Dữ liệu được giả lập bằng `Promise` và `setTimeout` để tạo cảm giác đang gọi API.

### Câu 6: Đăng ký tài khoản được lưu ở đâu?

Gợi ý trả lời:

Thông tin tài khoản được lưu trong `localStorage` của trình duyệt với key là `user`. Vì `localStorage` chỉ lưu chuỗi, em dùng `JSON.stringify` để chuyển object user thành chuỗi trước khi lưu.

### Câu 7: Đăng nhập kiểm tra tài khoản như thế nào?

Gợi ý trả lời:

Khi người dùng nhập email và mật khẩu, website lấy object `user` từ `localStorage` bằng `JSON.parse`. Sau đó so sánh email và mật khẩu người dùng nhập với dữ liệu đã lưu. Nếu trùng thì lưu `isLogin = true` và chuyển về trang chủ.

### Câu 8: Nút đăng xuất hoạt động như thế nào?

Gợi ý trả lời:

Trang chủ kiểm tra `isLogin` trong `localStorage`. Nếu đã đăng nhập thì nút hiện "Đăng xuất". Khi bấm đăng xuất, JavaScript xóa key `isLogin` bằng `localStorage.removeItem` và chuyển về trang đăng nhập.

### Câu 9: Website có dùng backend hay database không?

Gợi ý trả lời:

Hiện tại chưa dùng backend và database thật. Dữ liệu phim được lưu trong file `data/movie.js`, còn tài khoản người dùng lưu tạm trong `localStorage`. Nếu phát triển thật, em sẽ thêm backend và database để bảo mật và quản lý dữ liệu tốt hơn.

### Câu 10: Nếu thêm một phim mới thì cần sửa ở đâu?

Gợi ý trả lời:

Chỉ cần thêm một object phim mới vào mảng `movies` trong file `data/movie.js`. Object mới cần có đầy đủ các trường như `id`, `title`, `year`, `duration`, `genre`, `director`, `rating`, `poster`, `backdrop`, `video`, `description` và `cast`.

## 9. Câu hỏi BGK có thể hỏi về kiến thức JavaScript

### Câu 1: `localStorage` là gì?

Gợi ý trả lời:

`localStorage` là nơi lưu trữ dữ liệu trên trình duyệt. Dữ liệu vẫn còn sau khi reload trang hoặc đóng mở lại trình duyệt, trừ khi người dùng xóa thủ công hoặc code xóa bằng `removeItem`/`clear`.

### Câu 2: `JSON.stringify` và `JSON.parse` khác nhau như thế nào?

Gợi ý trả lời:

`JSON.stringify` chuyển object JavaScript thành chuỗi JSON để lưu vào `localStorage`. `JSON.parse` chuyển chuỗi JSON ngược lại thành object để JavaScript có thể đọc từng thuộc tính.

### Câu 3: `map`, `filter`, `find` khác nhau như thế nào?

Gợi ý trả lời:

- `map` tạo ra mảng mới từ mảng ban đầu, trong dự án dùng để tạo HTML card phim.
- `filter` lọc ra nhiều phần tử thỏa điều kiện, trong dự án dùng cho tìm kiếm phim.
- `find` tìm phần tử đầu tiên thỏa điều kiện, trong dự án dùng để tìm phim theo `id`.

### Câu 4: `addEventListener` dùng để làm gì?

Gợi ý trả lời:

`addEventListener` dùng để lắng nghe sự kiện trên phần tử HTML. Ví dụ lắng nghe khi người dùng bấm nút, gửi form hoặc gõ vào ô tìm kiếm.

### Câu 5: Tại sao cần `event.preventDefault()` trong form?

Gợi ý trả lời:

Mặc định khi submit form, trình duyệt có thể reload trang. Em dùng `event.preventDefault()` để chặn hành vi mặc định đó, sau đó tự xử lý logic đăng nhập, đăng ký hoặc tìm kiếm bằng JavaScript.

### Câu 6: `innerHTML` và `textContent` khác nhau như thế nào?

Gợi ý trả lời:

`textContent` chỉ thay đổi nội dung chữ. `innerHTML` có thể chèn cả mã HTML. Trong dự án, `textContent` dùng cho các nội dung đơn giản, còn `innerHTML` dùng để render danh sách card phim.

### Câu 7: `URLSearchParams` dùng để làm gì?

Gợi ý trả lời:

`URLSearchParams` dùng để đọc tham số trên URL. Trong dự án, trang chi tiết đọc `id` từ URL như `detail.html?id=1` để biết cần hiển thị phim nào.

### Câu 8: `async/await` dùng để làm gì?

Gợi ý trả lời:

`async/await` giúp viết code bất đồng bộ dễ đọc hơn. Trong dự án, em dùng `await mockFetchMovies()` để đợi lấy xong dữ liệu giả lập rồi mới render giao diện.

### Câu 9: `try/catch/finally` có tác dụng gì?

Gợi ý trả lời:

`try` chứa code có thể lỗi, `catch` xử lý khi có lỗi, `finally` luôn chạy sau cùng. Trong dự án, `finally` được dùng để tắt loading dù lấy dữ liệu thành công hay thất bại.

### Câu 10: Vì sao cần tách HTML, CSS và JS thành file riêng?

Gợi ý trả lời:

Tách file giúp code dễ đọc, dễ sửa và dễ bảo trì. HTML phụ trách cấu trúc, CSS phụ trách giao diện, JavaScript phụ trách logic và tương tác.

## 10. Câu hỏi BGK có thể hỏi về bảo mật và hạn chế

### Câu 1: Lưu mật khẩu trong `localStorage` có an toàn không?

Gợi ý trả lời:

Không an toàn cho sản phẩm thật. Trong dự án này em làm để học cách lưu và đọc dữ liệu trên trình duyệt. Nếu làm sản phẩm thật, mật khẩu phải được xử lý ở backend và mã hóa/hash trước khi lưu vào database.

### Câu 2: Người dùng có thể sửa `localStorage` không?

Gợi ý trả lời:

Có. Người dùng có thể mở DevTools và sửa `localStorage`, nên không nên tin tưởng dữ liệu này cho các tính năng quan trọng. Sản phẩm thật cần backend kiểm tra quyền truy cập.

### Câu 3: Website hiện tại đã bảo vệ trang chủ chưa?

Gợi ý trả lời:

Chưa hoàn toàn. Website có hiển thị nút đăng nhập/đăng xuất theo `isLogin`, nhưng chưa chặn người dùng truy cập trang chủ bằng URL trực tiếp. Nếu muốn bảo vệ route, cần thêm logic kiểm tra đăng nhập ở đầu trang hoặc dùng backend.

### Câu 4: Vì sao dự án chưa dùng database?

Gợi ý trả lời:

Vì mục tiêu hiện tại là học HTML, CSS và JavaScript cơ bản. Em dùng file `movie.js` và `localStorage` để giả lập dữ liệu. Khi nâng cấp, em có thể dùng database như MongoDB, MySQL hoặc Firebase.

### Câu 5: Nếu có backend thật, em sẽ thay đổi phần nào?

Gợi ý trả lời:

Em sẽ thay `mockFetchMovies` bằng `fetch` gọi API thật. Phần đăng ký và đăng nhập sẽ gửi dữ liệu lên server. Server sẽ kiểm tra tài khoản, hash mật khẩu và trả về trạng thái đăng nhập an toàn hơn.

## 11. Câu hỏi BGK có thể hỏi để mở rộng ý tưởng

### Câu 1: Em sẽ thêm chức năng gì tiếp theo?

Gợi ý trả lời:

Em muốn thêm đặt vé, yêu thích phim, lọc phim theo thể loại, sắp xếp theo năm/điểm đánh giá và trang quản trị để thêm sửa xóa phim.

### Câu 2: Nếu có rất nhiều phim, cách hiện tại có ổn không?

Gợi ý trả lời:

Nếu danh sách phim rất lớn, việc render tất cả cùng lúc sẽ chậm. Lúc đó em có thể thêm phân trang, lazy loading, tìm kiếm trên backend hoặc chỉ tải dữ liệu theo từng trang.

### Câu 3: Nếu mất internet thì website có hiển thị ảnh và video không?

Gợi ý trả lời:

Hiện tại ảnh và video dùng link online nên cần internet. Nếu muốn chạy offline, em cần tải ảnh/video về dự án hoặc có cơ chế cache.

### Câu 4: Làm sao để chức năng tìm kiếm tốt hơn?

Gợi ý trả lời:

Có thể thêm bộ lọc thể loại, lọc theo năm, sắp xếp theo điểm, gợi ý từ khóa, debounce khi gõ và tìm kiếm trên backend nếu dữ liệu lớn.

### Câu 5: Làm sao để giao diện đẹp và dễ dùng hơn?

Gợi ý trả lời:

Có thể cải thiện responsive, thêm thông báo đẹp thay cho `alert`, thêm trạng thái rỗng rõ ràng hơn, thêm loading skeleton và kiểm tra màu sắc/contrast để người dùng dễ đọc.

## 12. Từ khóa học sinh nên nắm

Học sinh nên hiểu và có thể giải thích các từ khóa sau:

- HTML
- CSS
- JavaScript
- DOM
- `document.getElementById`
- `addEventListener`
- `localStorage`
- `JSON.stringify`
- `JSON.parse`
- Array
- Object
- `map`
- `filter`
- `find`
- `forEach`
- `slice`
- `Promise`
- `setTimeout`
- `async/await`
- `try/catch/finally`
- `URLSearchParams`
- `window.location.href`
- `innerHTML`
- `textContent`
- `<video>`
- Responsive
- Media query

## 13. Lời kết khi trình bày

Học sinh có thể kết thúc demo bằng đoạn sau:

"Website Khang Cinema của em là một sản phẩm học tập được xây dựng bằng HTML, CSS và JavaScript thuần. Sản phẩm đã có các chức năng cơ bản của một website phim như đăng ký, đăng nhập, hiển thị danh sách phim, tìm kiếm, xem chi tiết và phát video. Qua dự án này em hiểu hơn về DOM, localStorage, render dữ liệu, xử lý sự kiện, tìm kiếm và xử lý dữ liệu bất đồng bộ. Trong tương lai em muốn nâng cấp website với backend, database, đặt vé và bảo mật đăng nhập tốt hơn."
