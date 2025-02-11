//In this project, you will be building a number sorter.
const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
    event.preventDefault();

    const inputValues = [...document.getElementsByClassName("values-dropdown")];
}

sortButton.addEventListener("click", sortInputArray);