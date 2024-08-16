import { quizDataType } from "@/typification";

export const quizDataList: quizDataType[] = [
  {
    quiz: "Q1/8",
    title: ": How are you feeling today?",
    options: [
      { answer: "Happy", value: "" },
      { answer: "Sad", value: "" },
      { answer: "Adventurous", value: "" },
      { answer: "Mysteryous", value: "" },
    ],
    page: 1,
  },
  {
    quiz: "Q2/8",
    title: ": Who are you watching the film with?",
    options: [
      { answer: "Alone", value: "" },
      { answer: "Friends", value: "" },
      { answer: "Family", value: "" },
      { answer: "Significant other", value: "" },
    ],
    page: 2,
  },
  {
    quiz: "Q3/8",
    title: ": Choose your favorite genre",
    options: [
      { answer: "Drama", value: "" },
      { answer: "Comedy", value: "" },
      { answer: "Thriller", value: "" },
      { answer: "Detective", value: "" },
      { answer: "Romance", value: "" },
      { answer: "Horror", value: "" },
      { answer: "Action", value: "" },
      { answer: "Surprise me", value: "" },
    ],
    page: 3,
  },
  {
    quiz: "Q4/8",
    title: ": Something old or something new?",
    options: [
      { answer: "Classic (pre-1970s)", value: "to 1970 YEAR" },
      {
        answer: "Retro (1970s-1990s)",
        value: "from 1970 to 1990 years",
      },
      {
        answer: "Modern (2000s-2010s)",
        value: "from 2000 to 2010 years",
      },
      {
        answer: "Recent (2010s to 2020s)",
        value: "from 2010 to present years",
      },
    ],
    page: 4,
  },
  {
    quiz: "Q5/8",
    title: ": Pick an iconic movie song",
    options: [
      { answer: "Bohemian Rhapsody", value: "" },
      { answer: "Let It Go", value: "" },
      { answer: "Ghostbusters", value: "" },
      { answer: "Star Wars Theme", value: "" },
    ],
    page: 5,
  },
  {
    quiz: "Q6/8",
    title: ": What actor or actress  you would like to spend a day with?",
    options: [
      { answer: "Melissa McCarthy", value: "comedy" },
      { answer: "Harrison Ford", value: "action-adventure" },
      { answer: "Anthony Hopkins", value: "drama" },
      { answer: "Margot Robbie", value: "action" },
    ],
    page: 6,
  },
  {
    quiz: "Q7/8",
    title: ": Please select age rating if any",
    options: [
      { answer: "Family friendly", value: "PG" },
      { answer: "PG 13+", value: "PG 13 and R" },
      { answer: "R 18+", value: "NC-17" },
      { answer: "Does not matter", value: "No limits" },
    ],
    page: 7,
  },
  {
    quiz: "Q8/8",
    title: ": What is your favorite movie snack?",
    options: [
      {
        answer: "Popcorn",
        value: "Blockbuster, Action",
      },
      {
        answer: "Chocolate",
        value: "Romance, Drama",
      },
      {
        answer: "Nachos",
        value: "Comedy, Adventure",
      },
      {
        answer: "Ice Cream",
        value: "Family, Animation",
      },
    ],
    page: 8,
  },
];
