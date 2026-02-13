let bank = Number(localStorage.getItem("bank")) || 1000;

const bankDiv = document.getElementById("bank");
bankDiv.textContent = `Bank: ${bank} €`;

document.getElementById("betForm").addEventListener("submit", e => {
  e.preventDefault();

  const c = Number(confidence.value);
  const d = Number(discipline.value);
  const v = Number(value.value);

  const score = Math.floor((c + d + v) / 3);

  if (score < 7) {
    alert("Score insuficiente para apostar");
    return;
  }

  const stake = Math.round(bank * 0.03 * 100) / 100;
  bank -= stake;

  localStorage.setItem("bank", bank);
  bankDiv.textContent = `Bank: ${bank} €`;

  alert(`Apuesta guardada\nScore: ${score}\nStake: ${stake} €`);
});
