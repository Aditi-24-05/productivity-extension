document.getElementById('startTimer').addEventListener('click', () => {
    const timeInput = document.getElementById('time').value;
    const timeInMinutes = parseInt(timeInput);

    if (isNaN(timeInMinutes) || timeInMinutes <= 0) {
        document.getElementById('status').innerText = 'Please enter a valid time.';
        return;
    }

    chrome.storage.sync.set({ lockTime: timeInMinutes }, () => {
        document.getElementById('status').innerText = `App will be locked after ${timeInMinutes} minutes.`;


        chrome.runtime.sendMessage({ type: 'startTimer', duration: timeInMinutes }, (response) => {
            console.log(response.status); 
        });
    });
});
