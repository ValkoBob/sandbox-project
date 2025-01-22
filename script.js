const button = document.getElementById('button');
const resultEl = document.getElementById('result');
const result2El = document.getElementById('result2');

button.addEventListener('click', async () => {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { facingMode: "environment" },
    audio: false
  });

  stream.play();

  const devices = await navigator.mediaDevices.enumerateDevices();
  const filteredData = devices.filter(item => item.kind === 'videoinput');

  console.log(devices);

  resultEl.innerHTML = JSON.stringify(stream.getTracks()[0].label);
});
