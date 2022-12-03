async function IP() {
  let response = await fetch('https://api.ipify.org/');
  if (response.ok) {
    let ip = await response.text();
    document.getElementById("Bruh").innerHTML = ip;
    document.getElementById("BUTTON").style.visibility = "hidden";
  }
}