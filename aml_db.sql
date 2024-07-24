

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role_id INT,
    username VARCHAR(50) NOT NULL,
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    telephone VARCHAR(20),
    email VARCHAR(100),
    password VARCHAR(100),
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL
);

CREATE TABLE words_of_the_day (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    word_en TEXT,
    word_fr TEXT,
    bible_quote_en TEXT,
    bible_quote_fr TEXT,
    ref_bible_quote_en TEXT,
    ref_bible_quote_fr TEXT,
    quote_en TEXT,
    quote_fr TEXT,
    quote_ref_en TEXT,
    quote_ref_fr TEXT,
    quote_author VARCHAR(100),
    date DATE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    title_en VARCHAR(255),
    title_fr VARCHAR(255),
    date_event DATE,
    hour_begin TIME,
    hour_end TIME,
    address VARCHAR(255),
    date DATE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE sermons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    day INT,
    month INT,
    location VARCHAR(255),
    date_sermon DATE,
    title_en VARCHAR(255),
    title_fr VARCHAR(255),
    duration TIME,
    date DATE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE memories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    title_en VARCHAR(255),
    title_fr VARCHAR(255),
    location VARCHAR(255),
    date DATE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE series (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    memories_id INT,
    cover_photo VARCHAR(255),
    date_series DATE,
    subject_en VARCHAR(255),
    subject_fr VARCHAR(255),
    date DATE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (memories_id) REFERENCES memories(id) ON DELETE CASCADE
);

CREATE TABLE gallery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    series_id INT,
    user_id INT,
    image VARCHAR(255),
    date DATE,
    FOREIGN KEY (series_id) REFERENCES series(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE experts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    name VARCHAR(100),
    title_en VARCHAR(255),
    title_fr VARCHAR(255),
    email VARCHAR(100),
    phone VARCHAR(20),
    profile TEXT,
    date DATE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    content TEXT,
    date DATE
);
