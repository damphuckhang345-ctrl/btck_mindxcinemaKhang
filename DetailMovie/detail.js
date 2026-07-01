const movies = {

    avengers: {
        title: "Avengers: Endgame",
        year: "2019",
        duration: "181 phút",
        genre: "Hành động, Phiêu lưu, Khoa học viễn tưởng",
        director: "Anthony Russo, Joe Russo",
        imdb: "8.4/10",
        poster: "https://picsum.photos/400/600?1",
        description: "Sau sự kiện Infinity War, một nửa sinh vật trong vũ trụ đã biến mất bởi cú búng tay của Thanos. Những Avengers còn sống sót tập hợp lần cuối để thực hiện kế hoạch quay ngược thời gian nhằm thu thập các Viên đá Vô cực, khôi phục nhân loại và đối đầu Thanos trong trận chiến cuối cùng."
    },

    dune: {
        title: "Dune: Part Two",
        year: "2024",
        duration: "166 phút",
        genre: "Khoa học viễn tưởng, Phiêu lưu",
        director: "Denis Villeneuve",
        imdb: "8.5/10",
        poster: "https://picsum.photos/400/600?2",
        description: "Paul Atreides gia nhập tộc Fremen và bắt đầu hành trình trả thù những kẻ đã hủy hoại gia đình mình. Đồng thời, anh phải đối mặt với định mệnh trở thành người lãnh đạo Arrakis."
    },

    deadpool: {
        title: "Deadpool & Wolverine",
        year: "2024",
        duration: "128 phút",
        genre: "Hành động, Hài, Siêu anh hùng",
        director: "Shawn Levy",
        imdb: "7.8/10",
        poster: "https://picsum.photos/400/600?3",
        description: "Deadpool bị TVA lôi kéo vào một nhiệm vụ xuyên đa vũ trụ và buộc phải hợp tác với Wolverine để cứu dòng thời gian khỏi sự sụp đổ."
    },

    joker: {
        title: "Joker: Folie à Deux",
        year: "2024",
        duration: "138 phút",
        genre: "Tâm lý, Chính kịch",
        director: "Todd Phillips",
        imdb: "5.3/10",
        poster: "https://picsum.photos/400/600?4",
        description: "Arthur Fleck tiếp tục cuộc sống sau các sự kiện của phần đầu và gặp Harley Quinn trong bệnh viện tâm thần Arkham, mở ra một câu chuyện đầy bi kịch."
    },

    insideout: {
        title: "Inside Out 2",
        year: "2024",
        duration: "96 phút",
        genre: "Hoạt hình, Gia đình",
        director: "Kelsey Mann",
        imdb: "7.6/10",
        poster: "https://picsum.photos/400/600?5",
        description: "Riley bước vào tuổi thiếu niên và xuất hiện thêm nhiều cảm xúc mới như Lo Âu, Ghen Tị và Xấu Hổ, khiến mọi thứ trong 'Trụ sở cảm xúc' trở nên hỗn loạn."
    },

    furiosa: {
        title: "Furiosa: A Mad Max Saga",
        year: "2024",
        duration: "148 phút",
        genre: "Hành động, Phiêu lưu",
        director: "George Miller",
        imdb: "7.5/10",
        poster: "https://picsum.photos/400/600?6",
        description: "Câu chuyện nguồn gốc của Furiosa trước các sự kiện Mad Max: Fury Road, kể về hành trình sinh tồn và báo thù của cô trong vùng đất hoang tàn."
    },

    mission: {
        title: "Mission: Impossible",
        year: "2023",
        duration: "163 phút",
        genre: "Hành động, Điệp viên",
        director: "Christopher McQuarrie",
        imdb: "7.7/10",
        poster: "https://picsum.photos/400/600?7",
        description: "Ethan Hunt cùng đội IMF truy tìm một loại trí tuệ nhân tạo cực kỳ nguy hiểm trước khi nó rơi vào tay các thế lực xấu."
    },

    batman: {
        title: "The Batman",
        year: "2022",
        duration: "176 phút",
        genre: "Hành động, Tội phạm",
        director: "Matt Reeves",
        imdb: "7.8/10",
        poster: "https://picsum.photos/400/600?8",
        description: "Batman điều tra chuỗi án mạng do Riddler gây ra và khám phá những bí mật đen tối của thành phố Gotham."
    },

    oppenheimer: {
        title: "Oppenheimer",
        year: "2023",
        duration: "180 phút",
        genre: "Tiểu sử, Chính kịch",
        director: "Christopher Nolan",
        imdb: "8.3/10",
        poster: "https://picsum.photos/400/600?11",
        description: "Bộ phim kể về cuộc đời của J. Robert Oppenheimer, cha đẻ của bom nguyên tử và những hệ quả sau Dự án Manhattan."
    },

    interstellar: {
        title: "Interstellar",
        year: "2014",
        duration: "169 phút",
        genre: "Khoa học viễn tưởng",
        director: "Christopher Nolan",
        imdb: "8.7/10",
        poster: "https://picsum.photos/400/600?12",
        description: "Một nhóm phi hành gia du hành qua hố sâu không gian để tìm kiếm hành tinh mới nhằm cứu lấy loài người khỏi sự diệt vong."
    },

    topgun: {
        title: "Top Gun: Maverick",
        year: "2022",
        duration: "131 phút",
        genre: "Hành động",
        director: "Joseph Kosinski",
        imdb: "8.2/10",
        poster: "https://picsum.photos/400/600?13",
        description: "Pete 'Maverick' Mitchell trở lại Top Gun để huấn luyện một nhóm phi công trẻ cho nhiệm vụ nguy hiểm nhất sự nghiệp."
    },

    johnwick: {
        title: "John Wick: Chapter 4",
        year: "2023",
        duration: "169 phút",
        genre: "Hành động",
        director: "Chad Stahelski",
        imdb: "7.7/10",
        poster: "https://picsum.photos/400/600?14",
        description: "John Wick tiếp tục cuộc chiến chống lại High Table để giành lấy tự do sau nhiều năm bị truy sát."
    },

    gladiator: {
        title: "Gladiator II",
        year: "2024",
        duration: "148 phút",
        genre: "Hành động, Lịch sử",
        director: "Ridley Scott",
        imdb: "6.8/10",
        poster: "https://picsum.photos/400/600?15",
        description: "Nhiều năm sau cái chết của Maximus, Lucius bị cuốn vào đấu trường La Mã và phải chiến đấu để thay đổi vận mệnh đế chế."
    },

    fastx: {
        title: "Fast X",
        year: "2023",
        duration: "141 phút",
        genre: "Hành động",
        director: "Louis Leterrier",
        imdb: "5.8/10",
        poster: "https://picsum.photos/400/600?16",
        description: "Dom Toretto cùng gia đình phải đối đầu Dante Reyes, kẻ muốn trả thù cho cái chết của cha mình."
    },

    matrix: {
        title: "The Matrix",
        year: "1999",
        duration: "136 phút",
        genre: "Khoa học viễn tưởng",
        director: "Lana Wachowski, Lilly Wachowski",
        imdb: "8.7/10",
        poster: "https://picsum.photos/400/600?17",
        description: "Neo phát hiện thế giới mình đang sống chỉ là một mô phỏng do máy móc tạo ra và tham gia cuộc chiến giải phóng nhân loại."
    },

    blackpanther: {
        title: "Black Panther",
        year: "2018",
        duration: "134 phút",
        genre: "Hành động, Siêu anh hùng",
        director: "Ryan Coogler",
        imdb: "7.3/10",
        poster: "https://picsum.photos/400/600?18",
        description: "Sau cái chết của cha, T'Challa trở về Wakanda để kế vị ngai vàng và bảo vệ đất nước trước các thế lực muốn chiếm Vibranium."
    }

};