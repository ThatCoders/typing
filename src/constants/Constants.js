const DEFAULT_WORDS_COUNT = 200;
const COUNT_DOWN_90 = 90;
const COUNT_DOWN_60 = 60;
const COUNT_DOWN_30 = 30;
const COUNT_DOWN_15 = 15;
const DEFAULT_COUNT_DOWN = COUNT_DOWN_60;

// const DEFAULT_DIFFICULTY = "normal";
const DEFAULT_DIFFICULTY = "普通模式";
// const HARD_DIFFICULTY = "hard";
const HARD_DIFFICULTY = "困难模式";
// const RESTART_BUTTON_TOOLTIP_TITLE = "[Tab] + [Enter] to quickly restart";
// const RESTART_BUTTON_TOOLTIP_TITLE = "[Tab] + [Enter] to quickly restart";
const RESTART_BUTTON_TOOLTIP_TITLE = "[Tab] + [Enter] 快速重组单词"; 
// const REDO_BUTTON_TOOLTIP_TITLE = "[Tab] + [Space] to quickly redo";
const REDO_BUTTON_TOOLTIP_TITLE = "[Tab] + [Space] 快速重新开始";
const RESTART_BUTTON_TOOLTIP_TITLE_WORDSCARD = "[Tab] + [Enter] to quick restart the chapter";
// const SELECT_ONE_OR_MORE_CHAPTERS = "Open to select one or more chapters. Pick the chapters in the typing area."
const SELECT_ONE_OR_MORE_CHAPTERS = "打开以选择一个或多个章节."
const RECITE_MODE_TITLE = "hide the word (默写模式)";
// const DEFAULT_DIFFICULTY_TOOLTIP_TITLE =
//   "normal mode generates random words from top 1000 most frequently used words in English dataset.";正常模式从英语数据集中最常用的1000个单词中生成随机单词。
const DEFAULT_DIFFICULTY_TOOLTIP_TITLE =
  "正常模式从英语数据集中最常用的1000个单词中生成随机单词.";
// const HARD_DIFFICULTY_TOOLTIP_TITLE =
//   "hard mode generates random words from blog posts words data, so you may encounter longer and less frequently used word.";
  const HARD_DIFFICULTY_TOOLTIP_TITLE =
  "困难模式从博客数据中生成随机词，因此您兴许会遇到更长且使用频率较低的词，祝君好运!";
const CHAR_TOOLTIP_TITLE =
  "correct/incorrect/missing/extra\n extras are recorded even if deleted.";
const SENTENCE_CHAR_TOOLTIP_TITLE = "correct/incorrect/extra\n";
// const ENGLISH_MODE_TOOLTIP_TITLE = "English Mode";
const ENGLISH_MODE_TOOLTIP_TITLE = "英文模式";
// const CHINESE_MODE_TOOLTIP_TITLE = "Chinese Pinyin Mode";
const CHINESE_MODE_TOOLTIP_TITLE = "汉语拼音";
// const DEFAULT_DIFFICULTY_TOOLTIP_TITLE_CHINESE =
//   "normal mode generates random words from top 5000 most frequently used words in Chinese dataset.";
  const DEFAULT_DIFFICULTY_TOOLTIP_TITLE_CHINESE =
  "正常模式从最常见的前5000生成随机单词.";
// const HARD_DIFFICULTY_TOOLTIP_TITLE_CHINESE =
//   "hard mode generates random words from top 1500 most used Chinese idioms.";
  const HARD_DIFFICULTY_TOOLTIP_TITLE_CHINESE =
  "困难模式从最常用的1500个成语中生成随机单词.";

// const GITHUB_TOOLTIP_TITLE =
//   "Dear visitors: \n For feature requests or bug reports, please submit an issue to the github repo. \n Welcome contributing with a fork. \n If you like my works, please star the project. \n Thanks! \n";
const GITHUB_TOOLTIP_TITLE =
    "亲爱的 Typer：\n对于功能请求或错误报告，请将问题提交给github仓库。\n欢迎提交issue。\n如果您喜欢 Ele types，请在项目中添加星号。\n谢谢！\n 这个网址也不错:<a href=\"https://www.typingstudy.com/zh/lesson/13/part/1\">盲打网</a>\n\n";
const SUPPORT_TOOLTIP_TITLE =
  "Help me keep the site live with your support : D \n Appreciate with love! \n";
const AUTHOR = "author: @Muyang Guo\n";
const GITHUB_REPO_LINK = "project: @Github\n";

// const FOCUS_MODE = "Focus mode";
const FOCUS_MODE = "专注模式";

const MUSIC_MODE =
//   "Spotify player. You will need to login spotify first to use the full feature.";
    "Spotify播放器。您需要先登录Spotify才能使用完整功能.";
const FREE_MODE =
//   "Free typing mode\nType any thing, no pressure, it's coffee time! \n ";
    "自由模式\n你可以编写任何内容, 现在是放松时间! \n ";

const ENGLISH_MODE = "ENGLISH_MODE";
const CHINESE_MODE = "CHINESE_MODE";

const GAME_MODE = "GAME_MODE";
const GAME_MODE_DEFAULT = "WORD_MODE";
const GAME_MODE_SENTENCE = "SENTENCE_MODE";
// const WORD_MODE_LABEL = "word";
const WORD_MODE_LABEL = "单词";
// const SENTENCE_MODE_LABEL = "sentence";
const SENTENCE_MODE_LABEL = "短语";
// const TRAINER_MODE = "QWERTY keyboard practice mode";
const TRAINER_MODE = "键位练习";

const DEFAULT_SENTENCES_COUNT = 5;
const TEN_SENTENCES_COUNT = 10;
const FIFTEEN_SENTENCES_COUNT = 15;

// const ENGLISH_SENTENCE_MODE_TOOLTIP_TITLE = "English Sentence Mode";
const ENGLISH_SENTENCE_MODE_TOOLTIP_TITLE = "英语语句模式";
// const CHINESE_SENTENCE_MODE_TOOLTIP_TITLE = "Chinese Sentence Mode";
const CHINESE_SENTENCE_MODE_TOOLTIP_TITLE = "汉语语句模式";

// const WORDS_CARD_MODE = "Words Card mode, learn something in typing!"
const WORDS_CARD_MODE = "单词卡片模式，在打字中学习一些东西"

const PACING_CARET = "光标";
const PACING_PULSE = "划线";

// const PACING_CARET_TOOLTIP = "type the word with a caret \"|\" , character by character.";
const PACING_CARET_TOOLTIP = "使用光标 \"|\" 标记当前字符位置.";
// const PACING_PULSE_TOOLTIP = "type the word with a pulse \"____\", this helps improving wpm and your speed typing pace habit.";
const PACING_PULSE_TOOLTIP = "使用划线 \"____\" 标记整个单词位置. (推荐)";

export {
  DEFAULT_WORDS_COUNT,
  DEFAULT_COUNT_DOWN,
  COUNT_DOWN_60,
  COUNT_DOWN_30,
  COUNT_DOWN_15,
  COUNT_DOWN_90,
  DEFAULT_DIFFICULTY,
  HARD_DIFFICULTY,
  DEFAULT_DIFFICULTY_TOOLTIP_TITLE,
  HARD_DIFFICULTY_TOOLTIP_TITLE,
  CHAR_TOOLTIP_TITLE,
  SENTENCE_CHAR_TOOLTIP_TITLE,
  GITHUB_TOOLTIP_TITLE,
  SUPPORT_TOOLTIP_TITLE,
  FOCUS_MODE,
  MUSIC_MODE,
  ENGLISH_MODE,
  CHINESE_MODE,
  RESTART_BUTTON_TOOLTIP_TITLE,
  REDO_BUTTON_TOOLTIP_TITLE,
  ENGLISH_MODE_TOOLTIP_TITLE,
  CHINESE_MODE_TOOLTIP_TITLE,
  DEFAULT_DIFFICULTY_TOOLTIP_TITLE_CHINESE,
  HARD_DIFFICULTY_TOOLTIP_TITLE_CHINESE,
  FREE_MODE,
  GAME_MODE,
  GAME_MODE_DEFAULT,
  GAME_MODE_SENTENCE,
  WORD_MODE_LABEL,
  SENTENCE_MODE_LABEL,
  DEFAULT_SENTENCES_COUNT,
  TEN_SENTENCES_COUNT,
  FIFTEEN_SENTENCES_COUNT,
  ENGLISH_SENTENCE_MODE_TOOLTIP_TITLE,
  CHINESE_SENTENCE_MODE_TOOLTIP_TITLE,
  AUTHOR,
  GITHUB_REPO_LINK,
  TRAINER_MODE,
  WORDS_CARD_MODE,
  RESTART_BUTTON_TOOLTIP_TITLE_WORDSCARD,
  SELECT_ONE_OR_MORE_CHAPTERS,
  RECITE_MODE_TITLE,
  PACING_CARET,
  PACING_PULSE,
  PACING_CARET_TOOLTIP,
  PACING_PULSE_TOOLTIP
};
