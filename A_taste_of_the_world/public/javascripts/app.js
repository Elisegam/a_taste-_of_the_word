/*
---------------------------------------------------------------
AOS SCROLLING ANIME SCRIPT
---------------------------------------------------------------
*/
AOS.init({
  duration: 1500
});

const input = document.getElementById("search-bar");
const list = document.getElementById("result");

const miamAPI = axios.create({
  baseURL:
    "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json"
});

miamAPI.get().then(res => {
  const food = Object.values(res.data);
  displayFood(food);

  input.onkeyup = evt =>
    showResult(evt.target.value, food).catch(APIerr => console.error(APIerr));
});

function displayFood(food) {
  list.innerHTML = "";
  food.forEach(food => {
    list.innerHTML += `<li class="item recipe">${food}</li>`;
  });
}

function showResult(needle, food) {
  const findInputMatch = food =>
    Boolean(food.toLowerCase().match(needle.toLowerCase()));
  displayFood(food.filter(findInputMatch));
}
