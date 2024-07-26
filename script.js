var clicks = 0
var clickPower= 1
const hamsterCoinz = () => {
    document.getElementById('coins').innerText = clicks + clickPower;
    clicks++;
}
