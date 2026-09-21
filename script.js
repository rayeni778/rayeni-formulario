const formulario = document.querySelector("form");

// Quando o formulário for enviado
formulario.addEventListener("submit", function(event) {
// Impede a página de recarregar
event.preventDefault();

// Seleciona todos os campos de resposta
const campos = formulario.querySelectorAll("input, textarea, select");

let preenchido = true;

// Verifica se algum campo está vazio
campos.forEach(function(campo) {
if (campo.value.trim() === "") {
preenchido = false;
campo.style.border = "2px solid #e74c3c";
} else {
campo.style.border = "2px solid #6d35d8";
}
});

// Mensagem de erro
if (!preenchido) {
alert("Por favor, responda todas as perguntas!");
return;
}

// Mensagem de sucesso
alert("🎉 Formulário enviado com sucesso!");

// Limpa os campos
formulario.reset();
});