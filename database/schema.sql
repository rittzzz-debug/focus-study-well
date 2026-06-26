-- Focus Study Well Database Schema
-- PostgreSQL

-- ============================================
-- ENUM TYPES
-- ============================================

CREATE TYPE user_role AS ENUM ('student', 'teacher', 'admin', 'guest');
CREATE TYPE learning_level AS ENUM ('bachelor', 'postgraduate', 'research');
CREATE TYPE subject_type AS ENUM ('biotechnology', 'microbiology');
CREATE TYPE difficulty_level AS ENUM ('easy', 'medium', 'hard', 'advanced');
CREATE TYPE quiz_question_type AS ENUM ('mcq', 'true_false', 'match', 'fill_blank', 'image_based', 'case_study');
CREATE TYPE achievement_type AS ENUM ('completion', 'streak', 'quiz', 'special');

-- ============================================
-- USERS TABLE
-- ============================================

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(15),
  password_hash VARCHAR(255),
  full_name VARCHAR(255),
  profile_picture_url TEXT,
  role user_role DEFAULT 'student',
  learning_level learning_level DEFAULT 'bachelor',
  institution VARCHAR(255),
  bio TEXT,
  is_email_verified BOOLEAN DEFAULT FALSE,
  is_phone_verified BOOLEAN DEFAULT FALSE,
  theme_preference VARCHAR(20) DEFAULT 'light',
  language VARCHAR(20) DEFAULT 'en',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);

-- ============================================
-- SUBJECTS TABLE
-- ============================================

CREATE TABLE subjects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  subject_type subject_type NOT NULL,
  icon_url TEXT,
  color_code VARCHAR(7),
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- LEARNING LEVELS TABLE
-- ============================================

CREATE TABLE learning_levels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  level learning_level NOT NULL UNIQUE,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  is_active BOOLEAN DEFAULT TRUE
);

-- ============================================
-- TOPICS TABLE
-- ============================================

CREATE TABLE topics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subject_id UUID NOT NULL REFERENCES subjects(id),
  learning_level learning_level NOT NULL,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  subtitle VARCHAR(255),
  difficulty difficulty_level DEFAULT 'medium',
  estimated_reading_time_minutes INTEGER,
  definition TEXT,
  introduction TEXT,
  simple_explanation TEXT,
  real_life_analogy TEXT,
  importance TEXT,
  detailed_theory TEXT,
  step_by_step_process TEXT,
  applications TEXT,
  advantages TEXT,
  disadvantages TEXT,
  limitations TEXT,
  latest_developments TEXT,
  summary TEXT,
  author_id UUID REFERENCES users(id),
  is_published BOOLEAN DEFAULT FALSE,
  view_count INTEGER DEFAULT 0,
  helpful_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  published_at TIMESTAMP
);

-- ============================================
-- DIAGRAMS TABLE
-- ============================================

CREATE TABLE diagrams (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id UUID NOT NULL REFERENCES topics(id),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  image_alt_text VARCHAR(255),
  caption TEXT,
  display_order INTEGER,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- QUIZ QUESTIONS TABLE
-- ============================================

CREATE TABLE quiz_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id UUID NOT NULL REFERENCES topics(id),
  question_type quiz_question_type NOT NULL,
  question_text TEXT NOT NULL,
  difficulty difficulty_level,
  option_a TEXT,
  option_b TEXT,
  option_c TEXT,
  option_d TEXT,
  correct_option VARCHAR(1),
  image_url TEXT,
  explanation TEXT,
  marks INTEGER DEFAULT 1,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- BOOKMARKS TABLE
-- ============================================

CREATE TABLE bookmarks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  topic_id UUID NOT NULL REFERENCES topics(id),
  folder_name VARCHAR(255) DEFAULT 'Favorites',
  note TEXT,
  bookmarked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, topic_id)
);

-- ============================================
-- PERSONAL NOTES TABLE
-- ============================================

CREATE TABLE personal_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  topic_id UUID NOT NULL REFERENCES topics(id),
  note_title VARCHAR(255),
  note_content TEXT NOT NULL,
  is_pinned BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- PROGRESS TABLE
-- ============================================

CREATE TABLE progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  subject_id UUID REFERENCES subjects(id),
  topics_completed INTEGER DEFAULT 0,
  topics_total INTEGER DEFAULT 0,
  hours_studied DECIMAL(10, 2) DEFAULT 0,
  daily_streak INTEGER DEFAULT 0,
  completion_percentage DECIMAL(5, 2) DEFAULT 0,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- ACHIEVEMENTS TABLE
-- ============================================

CREATE TABLE achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  achievement_type achievement_type NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  icon_url TEXT,
  earned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, title)
);

-- ============================================
-- INDEXES
-- ============================================

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_topics_subject_id ON topics(subject_id);
CREATE INDEX idx_bookmarks_user_id ON bookmarks(user_id);
CREATE INDEX idx_personal_notes_user_id ON personal_notes(user_id);
CREATE INDEX idx_progress_user_id ON progress(user_id);
CREATE INDEX idx_achievements_user_id ON achievements(user_id);

-- ============================================
-- DEFAULT LEARNING LEVELS
-- ============================================

INSERT INTO learning_levels (level, title, description) VALUES
('bachelor', 'Bachelor\'s (Simple)', 'Extremely simple explanations for beginners'),
('postgraduate', 'Postgraduate (Medium)', 'Moderately detailed content for advanced students'),
('research', 'Research (Advanced)', 'Scientific terminology, research papers, and advanced concepts');
