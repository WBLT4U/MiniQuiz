<template>
  <div class="quiz-app">
    <button @click="goToHome" class="back-home-button">Back to Home</button>
    <h1 class="title">Taofiq Mini Quiz App</h1>

    <!-- Quiz Questions -->
    <div v-if="!quizCompleted">
      <!-- Multiple Choice Question -->
      <div v-if="currentQuestion && currentQuestion.type === 'multiple-choice'" class="question-box">
        <h2>{{ currentQuestion.question }}</h2>
        <ul>
          <li
            v-for="(option, index) in currentQuestion.options"
            :key="index"
            @click="selectOption(option)"
            :class="{
              selected: selectedOption === option,
              correct: selectedOption === option && isCorrect(option),
              incorrect: selectedOption === option && !isCorrect(option),
            }"
          >
            {{ option }}
          </li>
        </ul>
      </div>

      <!-- Drag and Drop Question -->
      <div v-else-if="currentQuestion && currentQuestion.type === 'drag-and-drop'" class="question-box">
        <h2>{{ currentQuestion.question }}</h2>
        <draggable v-model="dragItems" class="drag-list" group="answers" @start="onDragStart" @end="onDragEnd">
          <template v-slot:item="{ element }">
            <div class="drag-item">
              {{ element }}
            </div>
          </template>
        </draggable>
      </div>

      <button @click="nextQuestion">{{ currentIndex < questions.length - 1 ? 'Next' : 'Submit' }}</button>
    </div>

    <!-- Results Breakdown -->
    <div v-else class="results-box">
      <h2>Quiz Results</h2>
      <p>Total Questions: {{ questions.length }}</p>
      <p>Correct Answers: {{ correctAnswers }}</p>
      <p>Incorrect Answers: {{ incorrectAnswers }}</p>
      <div v-for="(result, index) in results" :key="index" class="result-item">
        <p><strong>Question {{ index + 1 }}:</strong> {{ result.question }}</p>
        <p><strong>Your Answer:</strong> {{ result.userAnswer }}</p>
        <p><strong>Correct Answer:</strong> {{ result.correctAnswer }}</p>
        <p>
          <strong>Status:</strong>
          <span :class="{ correct: result.isCorrect, incorrect: !result.isCorrect }">
            {{ result.isCorrect ? 'Correct' : 'Incorrect' }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "MiniQuiz",
  components: { draggable },
  data() {
    return {
      questions: [
        {
          type: "multiple-choice",
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          correctAnswer: "Paris",
        },
        {
          type: "drag-and-drop",
          question: "Arrange the numbers in ascending order",
          options: ["3", "1", "4", "2"],
          correctOrder: ["1", "2", "3", "4"],
        },
        {
          type: "multiple-choice",
          question: "Which planet is known as the Red Planet?",
          options: ["Earth", "Mars", "Jupiter", "Saturn"],
          correctAnswer: "Mars",
        },
        {
          type: "multiple-choice",
          question: "What is the largest ocean on Earth?",
          options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
          correctAnswer: "Pacific Ocean",
        },
        {
          type: "drag-and-drop",
          question: "Arrange the colors in the order of the rainbow",
          options: ["Green", "Red", "Blue", "Yellow"],
          correctOrder: ["Red", "Yellow", "Green", "Blue"],
        },
      ],
      currentIndex: 0,
      selectedOption: null,
      dragItems: [],
      userAnswers: [],
      quizCompleted: false,
      results: [],
      correctAnswers: 0,
      incorrectAnswers: 0,
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentIndex] || null;
    },
  },
  watch: {
    currentIndex: {
      immediate: true,
      handler() {
        if (this.currentQuestion && this.currentQuestion.type === "drag-and-drop") {
          this.dragItems = [...this.currentQuestion.options];
        } else {
          this.dragItems = [];
        }
      },
    },
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
    },
    isCorrect(option) {
      return this.currentQuestion.correctAnswer === option;
    },
    nextQuestion() {
      if (this.currentIndex < this.questions.length - 1) {
        this.saveAnswer();
        this.currentIndex++;
        this.selectedOption = null;
      } else {
        this.saveAnswer();
        this.calculateResults();
        this.quizCompleted = true;
      }
    },
    saveAnswer() {
      const question = this.currentQuestion;
      let userAnswer;
      if (question.type === "multiple-choice") {
        userAnswer = this.selectedOption;
      } else if (question.type === "drag-and-drop") {
        userAnswer = this.dragItems.join(", ");
      }
      this.userAnswers.push({ question: question.question, userAnswer });
    },
    calculateResults() {
      this.results = this.questions.map((question, index) => {
        let userAnswer = this.userAnswers[index].userAnswer;
        let correctAnswer;
        if (question.type === "multiple-choice") {
          correctAnswer = question.correctAnswer;
        } else if (question.type === "drag-and-drop") {
          correctAnswer = question.correctOrder.join(", ");
        }
        const isCorrect = userAnswer === correctAnswer;
        if (isCorrect) {
          this.correctAnswers++;
        } else {
          this.incorrectAnswers++;
        }
        return {
          question: question.question,
          userAnswer,
          correctAnswer,
          isCorrect,
        };
      });
    },
    onDragStart() {
      console.log("Drag started");
    },
    onDragEnd() {
      console.log("Drag ended");
    },
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style src="../assets/css/MiniQuiz.css"></style> <!-- Import the external CSS -->

<style scoped>
.back-home-button {
  margin: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-home-button:hover {
  background-color: #0056b3;
}
</style>