const button = document.getElementById("add-todo");

button.addEventListener("click", function () {

    const input = document.getElementById("todo-input");

    const text = input.value;

    if (text === "") {
        return;
    }

    addItem(text);

    input.value = "";
});

function addItem(text) {

    const list = document.getElementById("todo-list");

    const item = document.createElement("li");

    item.textContent = text + " ";

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {

        list.removeChild(item);

    });

    item.appendChild(deleteButton);

    list.appendChild(item);
}