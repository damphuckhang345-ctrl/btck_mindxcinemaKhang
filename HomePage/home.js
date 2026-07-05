const FETCH_DELAY = 1600;

const authButton = document.getElementById("logoutBtn");
const loadingOverlay = document.getElementById("loadingOverlay");
const loadingText = document.getElementById("loadingText");
const featuredList = document.getElementById("featured-list");
const trendingList = document.getElementById("trending-list");
const searchSection = document.getElementById("search-section");
const searchList = document.getElementById("search-list");
const searchCount = document.getElementById("searchCount");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

let movieStore = [];

setupAuthButton();
loadHomePage();

function setupAuthButton() {
  const isLogin = localStorage.getItem("isLogin") === "true";

  authButton.textContent = isLogin ? "Đăng xuất" : "Đăng nhập";

  authButton.addEventListener("click", function () {
    if (isLogin) {
      localStorage.removeItem("isLogin");
    }

    window.location.href = "../login/login.html";
  });
}

async function loadHomePage() {
  showLoading("Đang lấy dữ liệu...");

  try {
    // TÍNH NĂNG MỚI: gọi hàm giả lập lấy dữ liệu bất đồng bộ.
    // Trong thực tế, đây sẽ là fetch("api/phim"), nhưng bài này chỉ dùng HTML/CSS/JS
    // thuần nên mình dùng Promise + setTimeout để tạo cảm giác đang tải dữ liệu.
    movieStore = await mockFetchMovies();

    renderHero(movieStore[0]);
    renderStats(movieStore);
    renderDefaultMovieSections(movieStore);
    setupSearch();
  } catch (error) {
    featuredList.innerHTML = createEmptyState("Không thể tải dữ liệu phim.");
    console.error(error);
  } finally {
    hideLoading();
  }
}

function mockFetchMovies() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      // TÍNH NĂNG MỚI: window.movies là mảng dữ liệu được nạp từ data/movie.js.
      // Clone bằng spread để trang chủ chỉ đọc dữ liệu, không làm thay đổi mảng gốc.
      resolve([...(window.movies || [])]);
    }, FETCH_DELAY);
  });
}

function showLoading(message) {
  // TÍNH NĂNG MỚI: bật vòng xoay tải trước khi render dữ liệu.
  // hidden là thuộc tính HTML có sẵn; khi bỏ hidden thì overlay xuất hiện.
  loadingText.textContent = message;
  loadingOverlay.hidden = false;
}

function hideLoading() {
  // TÍNH NĂNG MỚI: tắt vòng xoay tải sau khi Promise đã hoàn thành.
  loadingOverlay.hidden = true;
}

function renderHero(movie) {
  if (!movie) {
    return;
  }

  document.getElementById("heroTitle").textContent = movie.title;
  document.getElementById("heroDescription").textContent = movie.description;
  document.getElementById("heroMeta").textContent =
    `${movie.year} / ${movie.duration} / ${movie.rating}`;

  const heroPoster = document.getElementById("heroPoster");
  heroPoster.src = movie.poster;
  heroPoster.alt = `Poster ${movie.title}`;

  const heroLink = document.getElementById("heroLink");
  heroLink.href = `../DetailMovie/detail.html?id=${movie.id}`;
  heroLink.setAttribute("aria-label", `Mở chi tiết phim ${movie.title}`);
}

function renderStats(movies) {
  if (!movies.length) {
    document.getElementById("totalMovies").textContent = "0";
    document.getElementById("totalGenres").textContent = "0";
    document.getElementById("latestYear").textContent = "-";
    return;
  }

  const genreSet = new Set();

  movies.forEach(function (movie) {
    movie.genre.split(",").forEach(function (genre) {
      genreSet.add(genre.trim());
    });
  });

  document.getElementById("totalMovies").textContent = movies.length;
  document.getElementById("totalGenres").textContent = genreSet.size;
  document.getElementById("latestYear").textContent = Math.max(
    ...movies.map(function (movie) {
      return movie.year;
    }),
  );
}

function renderDefaultMovieSections(movies) {
  // TÍNH NĂNG MỚI: trang chủ được ghép trực tiếp từ dữ liệu giả lập.
  // 8 phim đầu đưa vào khu "Phim nổi bật", 8 phim sau đưa vào khu "Phim thịnh hành".
  featuredList.innerHTML = renderMovieCards(movies.slice(0, 8));
  trendingList.innerHTML = renderMovieCards(movies.slice(8, 16));
}

function setupSearch() {
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    runSearch();
  });

  searchInput.addEventListener("input", runSearch);
}

function runSearch() {
  // TÍNH NĂNG MỚI: tìm kiếm dựa trên dữ liệu giả lập đã tải sẵn trong movieStore.
  // Từ khóa được so khớp với tên phim, đạo diễn, thể loại và năm phát hành.
  const keyword = normalizeText(searchInput.value);

  if (!keyword) {
    searchSection.hidden = true;
    document.getElementById("featured-movies").hidden = false;
    document.getElementById("trending-movies").hidden = false;
    return;
  }

  const results = movieStore.filter(function (movie) {
    const searchSource = [
      movie.title,
      movie.genre,
      movie.director,
      String(movie.year),
    ].join(" ");

    return normalizeText(searchSource).includes(keyword);
  });

  document.getElementById("featured-movies").hidden = true;
  document.getElementById("trending-movies").hidden = true;
  searchSection.hidden = false;
  searchCount.textContent = `${results.length} phim`;
  searchList.innerHTML = results.length
    ? renderMovieCards(results)
    : createEmptyState("Không tìm thấy phim phù hợp.");
}

function normalizeText(value) {
  // TÍNH NĂNG MỚI: chuẩn hóa chữ để search không phân biệt hoa/thường và có dấu/không dấu.
  // Ví dụ: người dùng gõ "hanh dong" vẫn tìm được phim có thể loại "Hành động".
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");
}

function renderMovieCards(movies) {
  if (!movies.length) {
    return createEmptyState("Chưa có phim để hiển thị.");
  }

  return movies
    .map(function (movie) {
      return `
            <a href="../DetailMovie/detail.html?id=${movie.id}" class="movie-card">
                <img src="${movie.poster}" alt="Poster ${movie.title}" loading="lazy">
                <div class="movie-body">
                    <h3>${movie.title}</h3>
                    <p class="movie-info-line">${movie.year} / ${movie.duration}</p>
                    <p class="movie-info-line">${movie.genre}</p>
                    <div class="movie-footer">
                        <span class="movie-rating">${movie.rating}</span>
                        <span class="movie-action">Chi tiết</span>
                    </div>
                </div>
            </a>
        `;
    })
    .join("");
}

function createEmptyState(message) {
  return `<p class="empty-state">${message}</p>`;
}
