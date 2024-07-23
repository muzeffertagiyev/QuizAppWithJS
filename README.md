# Quiz JS App

This is a simple quiz application built using HTML, CSS, and JavaScript. The app allows users to answer multiple-choice questions and see their score upon completion.


## Pictures of the Web app

### Questions

![Screen Shot 2024-07-23 at 18 46 00](https://github.com/user-attachments/assets/1b3b7392-9e9f-46eb-a83e-9763768311e6)

### Result

![Screen Shot 2024-07-23 at 18 46 24](https://github.com/user-attachments/assets/e88113e7-b74b-4577-bfa8-1f5c8d1aec68)

## Features

- **Multiple-Choice Questions**: Users can select answers from multiple choices.
- **Score Calculation**: The app calculates and displays the score based on correct answers.
- **Dynamic Question Loading**: Questions are loaded dynamically from a predefined set.
- **Results Display**: After completing the quiz, users can see their results and reload the quiz.

## Table of Contents

- [Usage](#usage)
- [Code Overview](#code-overview)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Usage

1. **Answer Questions**:

   - Select the answer for each question by clicking the radio buttons.

2. **Submit Answers**:

   - Click the "Submit" button to see your score.

3. **Reload Quiz**:

   - Click the "Reload" button to start the quiz again.

## Code Overview

### `index.html`

- **Purpose**: Contains the structure of the quiz app, including the question display, multiple-choice answers, and the submit button.
- **Key Components**:
  - A container for displaying the quiz question and choices.
  - Radio buttons for each answer option.
  - A button to submit answers and view results.

### `style.css`

- **Purpose**: Provides styling for the quiz app to enhance its visual appearance.
- **Key Features**:
  - Responsive design with a centered quiz container.
  - Styling for buttons, text, and answer options.
  - Hover effects for better user interaction.

### `app.js`

- **Purpose**: Implements the logic for the quiz application using JavaScript.
- **Key Features**:
  - Loads quiz questions dynamically.
  - Handles answer selection and score calculation.
  - Manages quiz navigation and result display.

#### Key Functions:

- `loadQuiz()`: Loads the current question and answer options.
- `deselectAnswers()`: Deselects any previously selected answers.
- `getSelected()`: Retrieves the selected answer from the radio buttons.
- `submitBtn.addEventListener('click', ...)`: Handles the submit button click, checks answers, and displays the result.

## Project Structure

- `index.html`: The main HTML file that defines the layout and content of the quiz app.
- `style.css`: The stylesheet that defines the look and feel of the quiz app.
- `app.js`: The JavaScript file that contains the logic for loading questions, handling user input, and calculating scores.

## Contributing

Contributions are welcome! If you have suggestions for improvements, new features, or bug fixes, please submit a Pull Request. Ensure that your contributions are well-documented and tested.

