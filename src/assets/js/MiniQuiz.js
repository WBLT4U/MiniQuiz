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
  },
};