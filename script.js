const button = document.getElementById('button');
const resultEl = document.getElementById('result');
const result2El = document.getElementById('result2');

button.addEventListener('click', async () => {
  /*const stream = */await navigator.mediaDevices.getUserMedia({
    video: { facingMode: "environment" },
    audio: false
  }).then(async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const filteredData = devices.filter(item => item.kind === 'videoinput');

    resultEl.innerHTML = JSON.stringify(filteredData);
  });


  //result2El.innerHTML = JSON.stringify(stream.getTracks().map(track => track.label).join(', '));
});
