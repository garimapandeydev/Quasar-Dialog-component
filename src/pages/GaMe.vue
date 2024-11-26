<template>
  <div class="game-container">
    <h4 style="color:violet">Guess the Number Game</h4>
    <p style="color:darkViolet">I'm thinking of a number between 1 and 100. Can you guess it?</p>

    <q-input
      v-model="guess"
      type="number"
      label="Your Guess"
      min="1"
      max="100"
      @keyup.enter="checkGuess"
      :rules="[val => val > 0 && val <= 100 || 'Guess must be between 1 and 100']"
    />

    <q-btn label="Submit Guess" @click="checkGuess" color="primary" class="q-mt-md" />

    <div v-if="message" class="game-message">{{ message }}</div>

    <q-btn v-if="showReplay" label="Play Again" @click="resetGame" color="secondary" class="q-mt-md" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      targetNumber: this.generateRandomNumber(),
      guess: '',
      message: '',
      showReplay: false
    };
  },
  methods: {
    generateRandomNumber() {
      return Math.floor(Math.random() * 100) + 1;
    },
    checkGuess() {
      const guessNumber = parseInt(this.guess, 10);

      if (guessNumber === this.targetNumber) {
        this.message = 'Congratulations! You guessed the number!';
        this.showReplay = true;
      } else if (guessNumber > this.targetNumber) {
        this.message = 'Too high! Try again.';
      } else if (guessNumber < this.targetNumber) {
        this.message = 'Too low! Try again.';
      } else {
        this.message = 'Please enter a valid number.';
      }
    },
    resetGame() {
      this.targetNumber = this.generateRandomNumber();
      this.guess = '';
      this.message = '';
      this.showReplay = false;
    }
  }
};
</script>

<style scoped>
.game-container {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
}

.game-message {
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
