let timeInterval;

function startCountdown() {
    clearInterval(timeInterval);

    const timerDisplay = document.getElementById("timerDisplay");
    let timeLeft = document.getElementById("timerInput").value;

    timerDisplay.textContent = timeLeft;

    timeInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
        } else {
            clearInterval(timeInterval);
            alert("Timer completed!");
        }
    }, 1000);
}

// Task 2: Delayed Notification

function showDelayedNotification(){
    setTimeout(() => {
        alert("Timer is completed!")
    }, 10000);
}

// Task 3: Repeat Notification

let notificationInterval;

function startNotifications(){
    notificationInterval = setInterval(() =>{
        alert("This is a repeated notification.");
    }, 1000);
}

function stopTimer(){
    clearInterval(notificationInterval)
}