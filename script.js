const button = document.getElementById('button');
const resultEl = document.getElementById('result');

button.addEventListener('click', async () => {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { facingMode: "environment" },
    audio: false
  });

  stream.play();

  const devices = await navigator.mediaDevices.enumerateDevices();
  const filteredData = devices.filter(item => item.kind === 'videoinput');

  resultEl.innerHTML = JSON.stringify(filteredData);
});
