window.addEventListener("load", function () {
  // TODO 1) Declare variables here.
  let timer = null;
  let elapsedTimeMillis = 0;
  let timerState = "stopped";
  let lapTimeout = null;

  // TODO 5) Add event listeners to both buttons:
  // a. When #btnStartTimer is clicked, the startTimer function should be called.
  // b. When #btnStopTimer is clicked, the stopTimer function should be called.
  const startButton = document.querySelector("#btnStartTimer");
  const stopButton = document.querySelector("#btnStopTimer");

  const lapButton = document.querySelector("#btnLap");
  lapButton.addEventListener("click", function () {
    if (timerState === "running") {
      startLapTimeout();
    }
  });

  function startLapTimeout() {
    clearTimeout(lapTimeout);
    lapTimeout = setTimeout(resetTimerUI, 3000);
  }

  function resetTimerUI() {
    elapsedTimeMillis += 3000;
    const elapsedSeconds = (elapsedTimeMillis / 1000).toFixed(2);
    document.querySelector("#timer_face").innerHTML = elapsedSeconds;
    startTimer();
  }

  function updateTimer() {
    if (lapTimeout !== null) {
      return;
    }
    elapsedTimeMillis += 100;
    document.querySelector("#timer_face").innerHTML = (
      elapsedTimeMillis / 1000
    ).toFixed(2);
  }

  startButton.addEventListener("click", function () {
    if (timerState === "stopped") {
      elapsedTimeMillis = 0;
      document.querySelector("#timer_face").innerHTML = "0.00";
      timer = setInterval(updateTimer, 100);
      timerState = "running";
      startButton.innerHTML = "Pause";
      startButton.classList.remove("button-positive");
      startButton.classList.add("button-warn");
    } else if (timerState === "running") {
      clearInterval(timer);
      timer = null;
      timerState = "paused";
      startButton.innerHTML = "Resume";
      startButton.classList.remove("button-warn");
      startButton.classList.add("button-positive");
    } else if (timerState === "paused") {
      timer = setInterval(updateTimer, 100);
      timerState = "running";
      startButton.innerHTML = "Pause";
      startButton.classList.remove("button-positive");
      startButton.classList.add("button-warn");
    }
  });
  stopButton.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
    timerState = "stopped";
    startButton.innerHTML = "Start";
    startButton.classList.remove("button-warn");
    startButton.classList.add("button-positive");
    document.querySelector("#timer_face").innerHTML = "0.00";
    stopTimer();
  });

  // TODO 2) Complete this function so that:
  // a. IF the timer isn't already started, it:
  // - Sets the value of elapsedTimeMillis to 0
  // - Displays "0.00" in the #timer_face <span>
  // - Starts a timer calling the updateTimer function every 100ms.
  // b. IF the timer is already started, calling this does nothing.
  function startTimer() {
    if (timer === null) {
      elapsedTimeMillis = 0;
      document.querySelector("#timer_face").innerHTML = "0.00";
      timer = setInterval(updateTimer, 100);
    }
  }

  // TODO 3) Complete this function so that:
  // a. IF the timer is already started, it stops the timer.
  // b. IF the timer isn't already started, calling this does nothing.
  function stopTimer() {
    clearInterval(timer);
    timer = null;
    lapTimeout = null;
    timerState = "stopped";
    document.querySelector("#timer_face").innerHTML = "0.00";
    startButton.innerHTML = "Start";
    startButton.classList.remove("button-warn");
    startButton.classList.remove("button-positive");
    clearTimeout(lapTimeout);
  }

  // TODO 4) Complete this function so that it:
  // a. Appropriately updates the value of elapsedTimeMillis
  // b. Sets the text of the #timer_face <span> to the current elapsed time, in seconds, rounded to 2 decimal places.
  function updateTimer() {
    elapsedTimeMillis += 100;
    document.querySelector("#timer_face").innerHTML = (
      elapsedTimeMillis / 1000
    ).toFixed(2);
  }
});
