function verifyAge() {
  const check = document.getElementById("ageCheck");

  if (!check.checked) {
    alert("You must confirm that you are 18+ to enter.");
    return false;
  }

  return true;
}