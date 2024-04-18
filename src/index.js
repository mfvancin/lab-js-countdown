const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

document.getElementById("start-btn").addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown

timer = setInterval(startCountdown, 1000);

function startCountdown() {
  console.log("startCountdown called!");
};

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  if (remainingTime === 10) {
    console.log(message);
  };
};

// BONUS: ITERATION 4: TOAST CLOSE BUTTON