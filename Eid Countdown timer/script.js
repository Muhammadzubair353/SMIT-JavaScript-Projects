function setCountdownDate() {
    return new Date("2024-06-17");
  }
  
  function getTimeRemaining(countdownDate) {
    const now = new Date();
    const timeDifference = countdownDate - now;
  
    const totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const totalHours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const totalMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const totalSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    return {
      totalDays,
      totalHours,
      totalMinutes,
      totalSeconds
    };
  }
  
  function updateClock() {
    const countdownDate = setCountdownDate();
    const timeLeft = getTimeRemaining(countdownDate);
  
    daysSpan.textContent = ('0' + timeLeft.totalDays).slice(-2);
    hoursSpan.textContent = ('0' + timeLeft.totalHours).slice(-2);
    minutesSpan.textContent = ('0' + timeLeft.totalMinutes).slice(-2);
    secondsSpan.textContent = ('0' + timeLeft.totalSeconds).slice(-2);
  
    if (timeLeft.totalDays <= 0 && timeLeft.totalHours <= 0 && timeLeft.totalMinutes <= 0 && timeLeft.totalSeconds <= 0) {
      clearInterval(interval);
       main.innerHTML = `<img src="./unnamed.png" alt="eid" width="100%">`;
    }
  }
  
  const countdownContainer = document.querySelector('.countdown-container');
  const daysSpan = document.getElementById('days');
  const hoursSpan = document.getElementById('hours');
  const minutesSpan = document.getElementById('minutes');
  const secondsSpan = document.getElementById('seconds');
  const message = document.getElementById('message');
  const main = document.getElementById('main');
  
  const interval = setInterval(updateClock, 1000); // Update every second
  