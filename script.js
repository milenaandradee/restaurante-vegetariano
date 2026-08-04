const botoesFaq = document.querySelectorAll(".toggle");

botoesFaq.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const resposta = botao.nextElementSibling;

    const abriu = resposta.classList.toggle("aberta");

    botao.setAttribute("aria-expanded", abriu);

    // Mostra ou esconde a resposta de fato.
    resposta.style.display = abriu ? "block" : "none";
  });
});


