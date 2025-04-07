<!-- To start stripe -->
In a second terminal, keep Stripe CLI listening:
stripe listen --forward-to localhost:3000/api/webhook


Movie Discovery Platform

Welcome to the Movie Discovery Platform, a web application built with Next.js where you can explore a vast collection of movies, get detailed information, take quizzes to discover personalized recommendations, and enjoy an enhanced movie-watching experience.

Overview

The Movie Discovery Platform combines the wealth of information from TMdB with the cutting-edge capabilities of OpenAI to offer personalized movie suggestions. Whether you're in the mood for a feel-good movie, an intense thriller, or something suitable for a specific age group, our platform is designed to simplify your movie selection process.

Key Features
    Comprehensive Movie Information: Access detailed information, ratings, reviews, and more from TMdB.
Interactive Quiz: Take a fun quiz to understand your movie preferences better.
Personalized Recommendations: Receive tailored movie suggestions based on your quiz responses, powered by OpenAI.
    
Technologies Used
    Next.js: A React framework for building server-side rendered and static web applications.
React: A JavaScript library for building user interfaces, ensuring responsiveness and interactivity.
TypeScript: A typed superset of JavaScript that enhances code quality and maintainability.
Slick-Slider: A carousel component for creating responsive sliders and carousels.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
Sass: A CSS preprocessor for advanced stylesheet features like variables, nesting, and mixins.
Why This Project?
Finding the perfect movie to watch can be daunting with so many options available. This project aims to streamline your decision-making process by offering tailored recommendations based on your preferences. Whether you're exploring new releases or classics, our platform ensures you find movies that match your tastes.

Getting Started
Installation
Clone the repository:

bash
Копіювати код
git clone https://github.com/your-username/movie-discovery.git
Navigate into the project directory:

bash
Копіювати код
cd movie-discovery
Install dependencies:

bash
npm install
# or
yarn install

Running the Application
bash
npm run dev
# or
yarn dev

Open your browser and navigate to http://localhost:3000 to view the application.

Contributing
Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

    Fork the repository.
Create a new branch (git checkout -b feature/my-feature).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/my-feature).
Create a new Pull Request.

License
This project is licensed under the MIT License.