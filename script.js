const listaDeFrutas = [{
    logo: "assets/pngwing.com.png",
    frutas: ['Banana', 'Morango', 'Goiaba', 'Pêssego']
}];

// Selecionando elementos do DOM
const body = document.querySelector("body");
const div = document.createElement("div");
const title = document.createElement("h1"); // Corrigido para selecionar o elemento <h1>
const frutasLista = document.createElement("ul");
const frutas = document.createElement("li");

// Obtendo o caminho da imagem do logo e criando um elemento de imagem
const logoSrc = listaDeFrutas[0].logo;
const logoImg = document.createElement('img');
logoImg.src = listaDeFrutas[0].logo;
logoImg.classList.add('logo');

// Adicionando elementos ao DOM
body.appendChild(div);
div.appendChild(logoImg);
div.appendChild(title);
div.appendChild(frutasLista);
div.appendChild(frutas);

// Adicionando texto ao título
const tituloTexto = document.createTextNode('VidaFruta');
title.appendChild(tituloTexto); // Adicionando o nó de texto ao título
title.classList.add('title'); // Adicionando a classe 'title' ao título

// Adicionando a classe 'frutas-lista' ao elemento <ul>
frutasLista.classList.add('frutas-lista');

// adicionado a lista na ul
listaDeFrutas[0].frutas.forEach(fruta => {
    // Cria um elemento <li> para a fruta
    const frutaElemento = document.createElement("li");
    // Adiciona o nome da fruta como texto dentro do elemento <li>
    frutaElemento.textContent = fruta;
    // Adiciona a classe 'frutas' ao elemento <li>
    frutaElemento.classList.add('frutas');
    // Adiciona o elemento <li> à lista de frutas
    frutasLista.appendChild(frutaElemento);
});

// Alterar a cor de apenas uma parte do texto

// Obter o texto do título
const titleText = title.textContent;

// Verificar se o título contém a palavra "Fruta"
if (titleText.includes('Vida')) {
    // Substituir "Fruta" por "<span class='highlight'>Fruta</span>"
    const newTitle = titleText.replace('Vida', '<span class="highlight">Vida</span>');
    
    // Definir o novo HTML do título
    title.innerHTML = newTitle;
} else {
    console.error('A palavra "Fruta" não foi encontrada no título.');
}

// Adicionando eventos de mouse para cada elemento <li> (fruta)
const frutasElementos = document.querySelectorAll('.frutas');
frutasElementos.forEach(frutaElemento => {
    // Adiciona um evento de mouseover para cada fruta
    frutaElemento.addEventListener('mouseover', () => {
        // Define a ação a ser realizada quando o mouse passar sobre a fruta
        frutaElemento.style.backgroundColor = '#026120'; // Por exemplo, muda a cor de fundo da fruta para amerelo ou a cor da sua preferencia
    });
    
    // Adiciona um evento de mouseout para cada fruta
    frutaElemento.addEventListener('mouseout', () => {
        // Define a ação a ser realizada quando o mouse sair da fruta
        frutaElemento.style.backgroundColor = ''; // Remove a cor de fundo da fruta
    });
});




















