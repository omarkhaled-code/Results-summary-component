let categories = [];
let categoriesContainer = document.querySelector(".categories");

const path = "/src/assets/images/";
const fetchCategories = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:5500/data.json");
    categories = response.data;
  } catch (error) {
    console.error("Error fetching cards:", error);
  }
};

{
  {
    /* <div class="score" id="score">
    {{ category.score }} <span> / 100</span>
</div> */
  }
}

fetchCategories().then(() => {
  for (let i = 0; i < categories.length; i++) {
    // create category container

    let categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category");
    //create title container
    let titleContainer = document.createElement("div");
    titleContainer.classList.add("title");
    let title = document.createElement("h3");
    title.id = "title";
    title.innerHTML = categories[i].category;
    let img = document.createElement("img");
    img.setAttribute("src", categories[i].icon);
    img.id = "img";

    titleContainer.appendChild(title);
    titleContainer.appendChild(img);

    // create score container
    let scoreContainer = document.createElement("div");
    scoreContainer.classList.add("score");
    scoreContainer.innerHTML = categories[i].score;
    let span = document.createElement("span");
    span.innerHTML = " / 100";
    scoreContainer.appendChild(span);
    categoryContainer.appendChild(titleContainer);
    categoryContainer.appendChild(scoreContainer);
    categoriesContainer.appendChild(categoryContainer);
    console.log(categoriesContainer);
  }
});
