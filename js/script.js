// Constantes
const wrapper = document.querySelector(".wrapper"),
  qrInput = wrapper.querySelector(".form input"),
  qrImg = wrapper.querySelector(".qr-code img"),
  generateBtn = wrapper.querySelector(".form button");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value.trim();
  if(!qrValue) return;

  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;

  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    generateBtn.innerText = "Código QR generado";
  });
});
