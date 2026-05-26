const projects = [
    {
        title: "Lista de Compras Web",
        image: "./assets/image/lista de compras.png",
        alt: "Tela do projeto Lista de Compras Web",
        description:
            "Mini aplicação em React criada para organizar itens de compra com interação dinâmica, foco em usabilidade e fluxo simples para o usuário.",
        demo: "https://mp-lista-de-compras-em-react-henna.vercel.app/",
        repo: "https://github.com/SergioDevSousa/mp-lista-de-compras-em-react.git",
        tags: ["React", "Componentes", "Estado", "UX"]
    },
    {
        title: "Jogo da Adivinhação",
        image: "./assets/image/jogo da advinhacao.png",
        alt: "Tela do projeto Jogo da Adivinhação",
        description:
            "Jogo educativo com HTML, CSS e JavaScript em que o usuário tenta descobrir uma palavra secreta por meio de dicas e feedback a cada tentativa.",
        demo: "https://imersao-alura-wine.vercel.app/",
        repo: "https://github.com/SergioDevSousa/imersao-alura.git",
        tags: ["JavaScript", "Lógica", "Interatividade", "Game"]
    },
    {
        title: "Pokedex",
        image: "./assets/image/pokedex.png",
        alt: "Tela do projeto Pokedex",
        description:
            "Projeto com consumo de API para listar Pokémons e apresentar detalhes de cada item, reforçando prática com requisições, renderização e interface responsiva.",
        demo: "https://js-developer-pokedex-beta-vert.vercel.app/",
        repo: "https://github.com/SergioDevSousa/js-developer-pokedex.git",
        tags: ["API", "JavaScript", "Responsivo", "Dados"]
    },
    {
        title: "Robo_ANVISA",
        image: "./assets/image/projeto_robo.png",
        alt: "Aplicação que filtra e seleciona dados em um PDF",
        description:
            "Um Projeto de grande utilidade onde podemos extrair dados do PDF da Publicação do DO. Assim podemos gerar um relatório, exportar como csv e exportar como json os dados estraídos para trabalho.",
        demo: "https://roboanvisa.netlify.app/",
        repo: "https://github.com/sergiosousacode/robo_anvisa.git",
        tags: ["EXPRESS", "Node", "JavaScript", "HTML", "CSS"]
    },
    {
        title: "Meu site",
        image: "./assets/image/site_ampla.png",
        alt: "Site ampla tecserv",
        description:
            "Site hospedado em MVP na AWS, serve de aplicação de serviços que trabalho. Utilizamos docker, JavaScript, CSS, HTML, TailwindCSS.",
        demo: "https://amplatecserv.com.br/",
        repo: "https://github.com/sergiosousacode/ampla-tecserv-landing.git",
        tags: ["Prisma", "Node", "JavaScript", "HTML", "CSS", "Tailwind", "Docker"]
    }
    
];

const storageKey = "portfolio-theme";
const body = document.body;
const themeToggle = document.querySelector(".theme-toggle");
const projectsList = document.querySelector("#projects-list");

function applyTheme(theme) {
    const isDark = theme === "dark";

    body.classList.toggle("dark-theme", isDark);
    themeToggle?.setAttribute("aria-pressed", String(isDark));

    if (!themeToggle) {
        return;
    }

    themeToggle.innerHTML = isDark
        ? '<i class="bi bi-sun"></i><span>Light</span>'
        : '<i class="bi bi-moon-stars"></i><span>Dark</span>';
}

function getInitialTheme() {
    const storedTheme = localStorage.getItem(storageKey);

    if (storedTheme) {
        return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function toggleTheme() {
    const nextTheme = body.classList.contains("dark-theme") ? "light" : "dark";
    localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
}

function renderProjects() {
    if (!projectsList) {
        return;
    }

    projectsList.innerHTML = projects
        .map(
            (project) => `
                <article class="project-card">
                    <div class="project-media">
                        <img src="${project.image}" alt="${project.alt}">
                    </div>
                    <div class="project-content">
                        <div class="project-tags">
                            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
                        </div>
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-links">
                            <a href="${project.demo}" target="_blank" rel="noreferrer">Ver demonstração</a>
                            <a href="${project.repo}" target="_blank" rel="noreferrer">Repositório</a>
                        </div>
                    </div>
                </article>
            `
        )
        .join("");
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

applyTheme(getInitialTheme());
renderProjects();

themeToggle?.addEventListener("click", toggleTheme);
