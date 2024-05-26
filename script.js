document.addEventListener("DOMContentLoaded", function () {
    const addBtn = document.getElementById("addBtn");
    const limparBtn = document.getElementById("limparBtn");

    addBtn.addEventListener("click", addElemento);
    limparBtn.addEventListener("click", limparLista);
});

function limparLista() {
    document.getElementById("itemLista").innerHTML = "";
}

function addElemento() {
    const tarefaInput = document.getElementById("tarefa");
    const dataInput = document.getElementById("dataTarefa");

    const tarefaTexto = tarefaInput.value.trim().toUpperCase();
    const dataTexto = dataInput.value ? new Date(dataInput.value).toLocaleDateString() : '';

    if (tarefaTexto && dataTexto) {
        const li = document.createElement("li");
        li.textContent = `${dataTexto} - ${tarefaTexto}`;
        li.addEventListener("click", toggleConcluida);
        document.getElementById("itemLista").appendChild(li);
        tarefaInput.value = "";
        dataInput.value = "";
    } else {
        alert("Por favor, preencha a tarefa e a data.");
    }
}

function toggleConcluida() {
    this.classList.toggle("checked");
}
