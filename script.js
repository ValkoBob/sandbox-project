const button = document.getElementById('button');
const resultEl = document.getElementById('result');

button.addEventListener('click', async () => {
  const devices = await navigator.mediaDevices.enumerateDevices();
  const filteredData = devices.filter(item => item.kind === 'videoinput');
  await navigator.mediaDevices.getUserMedia({
    video: { facingMode: "environment" },
    audio: false
  })

  resultEl.innerHTML = JSON.stringify(filteredData);
});
