import { IQuizData } from "@/typification";

export const quizDataList: IQuizData[] = [
  {
    quiz: "Q1/8",
    title: ": How are you feeling today?",
    name: "mood",
    page: 1,
    options: [
      { answer: "Happy", value: "happy" },
      { answer: "Sad", value: "sad" },
      { answer: "Adventurous", value: "adventurous" },
      { answer: "Mysteryous", value: "mysteryous" },
    ],
  },
  {
    quiz: "Q2/8",
    title: ": Who are you watching the film with?",
    name: "watchWith",
    page: 2,
    options: [
      { answer: "Alone", value: "alone" },
      { answer: "Friends", value: "friends" },
      { answer: "Family", value: "family" },
      { answer: "Significant other", value: "significant other" },
    ],
  },
  {
    quiz: "Q3/8",
    title: ": Choose your favorite genre",
    name: "genre",
    page: 3,
    options: [
      { answer: "Drama", value: "drama" },
      { answer: "Comedy", value: "comedy" },
      { answer: "Thriller", value: "thriller" },
      { answer: "Detective", value: "detective" },
      { answer: "Romance", value: "romance" },
      { answer: "Horror", value: "horror" },
      { answer: "Action", value: "action" },
      { answer: "Surprise me", value: "any" },
    ],
  },
  {
    quiz: "Q4/8",
    title: ": Something old or something new?",
    name: "years",
    page: 4,
    options: [
      { answer: "Classic (pre-1970)", value: "before 1970" },
      {
        answer: "Retro (1970-2000)",
        value: "1970 - 1999",
      },
      {
        answer: "Modern (2000-2020)",
        value: "2000 - 2020",
      },
      {
        answer: "Recent (2020 to 2025)",
        value: "2020 - 2025",
      },
    ],
  },
  {
    quiz: "Q5/8",
    title: ": Pick an iconic movie song",
    name: "song",
    page: 5,
    options: [
      { answer: "Bohemian Rhapsody", value: "bohemian rhapsody" },
      { answer: "Let It Go", value: "let it go" },
      { answer: "Ghostbusters", value: "ghostbusters" },
      { answer: "Star Wars Theme", value: "star wars theme" },
    ],
  },
  {
    quiz: "Q6/8",
    title: ": What actor or actress  you would like to spend a day with?",
    name: "actorGenre",
    page: 6,
    options: [
      { answer: "Melissa McCarthy", value: "comedy" },
      { answer: "Harrison Ford", value: "action-adventure" },
      { answer: "Anthony Hopkins", value: "drama" },
      { answer: "Margot Robbie", value: "action" },
    ],
  },
  {
    quiz: "Q7/8",
    title: ": Please select age rating if any",
    name: "ageRating",
    page: 7,
    options: [
      { answer: "Family friendly", value: "PG" },
      { answer: "PG 13+", value: "PG 13 and R" },
      { answer: "R 18+", value: "NC-17" },
      { answer: "Does not matter", value: "No limits" },
    ],
  },
  {
    quiz: "Q8/8",
    title: ": What is your favorite movie snack?",
    name: "snack",
    page: 8,
    options: [
      {
        answer: "Popcorn",
        value: "popcorn",
      },
      {
        answer: "Chocolate",
        value: "chocolate",
      },
      {
        answer: "Nachos",
        value: "nachos",
      },
      {
        answer: "Ice Cream",
        value: "ice cream",
      },
    ],
  },
];
