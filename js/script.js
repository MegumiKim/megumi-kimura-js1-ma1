const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Q1
const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

console.log(cat.complain());

// Q2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Q3
heading.style.fontSize = "2em";

// Q4
heading.className = "subheading";

// Q5
const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Q6
const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Q7
function logName(list) {
  for (i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

logName(cats);

// Q8
function createCats(cats) {
  let html = "";

  for (let i = 0; i < cats.length; i++) {
    let catAge = "Age Unknown";
    if (cats[i].age) {
      catAge = cats[i].age;
    }

    html += `
    <div>
    <h5>${cats[i].name}</h5>
    <p>${catAge}</p>
    </div>
    `;
  }
  return html;
}

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = createCats(cats);
