const FETCH_DELAY = 1400;

const detailPage = document.getElementById("detailPage");
const notFound = document.getElementById("notFound");
const loadingOverlay = document.getElementById("loadingOverlay");
const loadingText = document.getElementById("loadingText");
const watchVideoBtn = document.getElementById("watchVideoBtn");

loadMovieDetail();

async function loadMovieDetail() {
  const movieId = getMovieIdFromUrl();

  showLoading("Đang lấy chi tiết phim...");

  try {
    // TÍNH NĂNG MỚI: giả lập lấy dữ liệu chi tiết theo id trên URL.
    // Trang chủ truyền link dạng detail.html?id=1, hàm này đọc id đó và tìm
    // phim từ window.movies. setTimeout giúp người dùng thấy vòng xoay tải như đang gọi API.
    const movie = await mockFetchMovieById(movieId);

    if (!movie) {
      showNotFound();
      return;
    }

    renderMovieDetail(movie);
    detailPage.hidden = false;
  } catch (error) {
    console.error(error);
    showNotFound();
  } finally {
    hideLoading();
  }
}

function getMovieIdFromUrl() {
  // TÍNH NĂNG MỚI: URLSearchParams là API có sẵn của trình duyệt.
  // Nó giúp đọc ?id=... an toàn và rõ ràng hơn so với cắt chuỗi thủ công.
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("id"));
}

function mockFetchMovieById(movieId) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      const movies = window.movies || [];
      const movie = movies.find(function (item) {
        return item.id === movieId;
      });

      resolve(movie);
    }, FETCH_DELAY);
  });
}

function renderMovieDetail(movie) {
  const hero = document.getElementById("detailHero");
  hero.style.setProperty("--backdrop", `url("${movie.backdrop}")`);

  document.title = `${movie.title} - Khang Cinema`;
  document.getElementById("movieGenre").textContent = movie.genre;
  document.getElementById("movieTitle").textContent = movie.title;
  document.getElementById("movieDescription").textContent = movie.description;
  document.getElementById("movieLongDescription").textContent =
    movie.description;
  document.getElementById("movieDirector").textContent = movie.director;
  document.getElementById("movieRating").textContent =
    `Đánh giá: ${movie.rating}`;

  const poster = document.getElementById("moviePoster");
  poster.src = movie.poster;
  poster.alt = `Poster ${movie.title}`;

  renderMeta(movie);
  renderVideo(movie);
  renderCast(movie);
}

function renderMeta(movie) {
  // TÍNH NĂNG MỚI: meta được tạo từ dữ liệu giả lập thay vì viết cứng trong HTML.
  // Khi sửa year/duration/rating trong data/movie.js, trang chi tiết tự cập nhật theo.
  document.getElementById("movieMeta").innerHTML = `
        <span>${movie.year}</span>
        <span>${movie.duration}</span>
        <span>${movie.rating}</span>
    `;
}

function renderVideo(movie) {
  // TÍNH NĂNG MỚI: gắn video từ field movie.video vào thẻ <video>.
  // Sau khi đổi src của <source>, cần gọi video.load() để trình duyệt nạp lại file mới.
  const video = document.getElementById("movieVideo");
  const source = document.getElementById("movieSource");

  video.poster = movie.backdrop;
  source.src = movie.video;
  video.load();

  watchVideoBtn.addEventListener("click", function () {
    document.getElementById("watch").scrollIntoView({ behavior: "smooth" });

    // Trình duyệt có thể chặn autoplay nếu người dùng chưa tương tác đủ.
    // Vì click nút là hành động của người dùng, play thường sẽ chạy; catch để tránh lỗi ở console.
    video.play().catch(function () {});
  });
}

function renderCast(movie) {
  // TÍNH NĂNG MỚI: dàn diễn viên cũng nằm trong dữ liệu giả lập để mỗi phim có danh sách riêng.
  // Ảnh đại diện ở đây được tạo bằng chữ cái đầu để không cần thêm ảnh ngoài.
  document.getElementById("castList").innerHTML = movie.cast
    .map(function (name) {
      return `
            <article class="cast-card">
                <div class="cast-avatar">${name.charAt(0)}</div>
                <div>
                    <h3>${name}</h3>
                    <p>Diễn viên</p>
                </div>
            </article>
        `;
    })
    .join("");
}

function showNotFound() {
  detailPage.hidden = true;
  notFound.hidden = false;
}

function showLoading(message) {
  // TÍNH NĂNG MỚI: bật lớp phủ có vòng xoay trong lúc giả lập lấy dữ liệu.
  loadingText.textContent = message;
  loadingOverlay.hidden = false;
}

function hideLoading() {
  // TÍNH NĂNG MỚI: tắt lớp phủ có vòng xoay sau khi dữ liệu chi tiết đã sẵn sàng.
  loadingOverlay.hidden = true;
}
