const button = document.getElementById('button');
const resultEl = document.getElementById('result');

button.addEventListener('click', async () => {
  const devices = await navigator.mediaDevices.enumerateDevices();

  resultEl.innerHTML = JSON.stringify(devices);
});
