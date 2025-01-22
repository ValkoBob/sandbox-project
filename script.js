const button = document.getElementById('button');
const resultEl = document.getElementById('result');

button.addEventListener('click', async () => {
  await navigator.mediaDevices.getUserMedia({
    video: { facingMode: "environment" },
    audio: false
  })

  const devices = await navigator.mediaDevices.enumerateDevices();
  const filteredData = devices.filter(item => item.kind === 'videoinput');

  resultEl.innerHTML = JSON.stringify(filteredData);
});
