# Nevvora

**Bordas delicadas. Sombras suaves. Interfaces leves.**

Nevvora é um framework CSS experimental para criar interfaces clean, com superfícies claras, cantos arredondados e profundidade discreta. Usa uma tipografia no estilo Helvetica e verde sálvia como cor de destaque.

Feito com **HTML, CSS e JavaScript puro**, sem dependências externas.

## Características

- Estilos separados por componente.
- Tokens CSS para personalizar cores, fontes, raios e sombras.
- Classes com prefixo `nv-`.
- Layout responsivo.
- JavaScript opcional para tabs, dropdowns, modal e toast.
- Exemplos que funcionam localmente, sem instalação.
- Build com Node.js, sem dependências de terceiros.

## Começar

Baixe ou clone o repositório e abra `examples/index.html` no navegador.

Para usar em outro projeto, copie a pasta `dist/` e inclua:

```html
<link rel="stylesheet" href="dist/nevvora.css">

<!-- Opcional: interações -->
<script src="dist/nevvora.js" defer></script>
```

### Primeiro componente

```html
<article class="nv-card nv-stack">
  <h2>Novo projeto</h2>

  <label class="nv-field">
    Nome do projeto
    <input class="nv-input" placeholder="Meu projeto">
  </label>

  <button class="nv-btn nv-btn--primary" type="button">
    Criar projeto
  </button>
</article>
```

O botão recebe o estilo visual. Conecte a ação à lógica da sua aplicação.

## Componentes

| Categoria | Componentes |
| --- | --- |
| Ações | Botões, dropdowns e paginação |
| Formulários | Inputs, textarea, select, checkbox, radio, switch e upload |
| Organização | Cards, tabs, accordion e tabelas |
| Feedback | Alertas, badges, tooltip, modal e toast |
| Conteúdo | Avatares, listas, timeline e estado vazio |
| Indicadores | Progress bars e skeleton loading |
| Layout | Container, grid, linhas e pilhas |

Veja a galeria em `examples/index.html` e exemplos adicionais em `examples/forms.html` e `examples/dashboard.html`.

## Personalização

Sobrescreva os tokens depois de carregar o CSS:

```css
:root {
  --nv-font: "Helvetica Neue", Helvetica, Arial, sans-serif;
  --nv-accent: #718578;
  --nv-bg: #fafbfc;
  --nv-surface: #ffffff;
  --nv-text: #292e39;
  --nv-muted: #6d7482;
  --nv-border: #e9ecf1;
  --nv-radius: 14px;
  --nv-shadow:
    0 3px 7px #28324803,
    0 12px 32px #28324809;
}
```

Helvetica será utilizada quando estiver instalada. Arial e sans-serif são alternativas. Algumas cores semânticas e decorativas ficam nos arquivos dos componentes.

## JavaScript

Ao carregar `dist/nevvora.js`, tabs e dropdowns com os atributos documentados são inicializados automaticamente.

```js
// Exibir uma mensagem por 3 segundos
Nevvora.toast('Alterações salvas!', 3000);

// Abrir e fechar um elemento <dialog>
Nevvora.openModal('#meu-modal');
Nevvora.closeModal('#meu-modal');

// Inicializar componentes inseridos dinamicamente
Nevvora.init(document.querySelector('#novo-conteudo'));
```

Consulte [a documentação dos componentes](docs/components.md) para a marcação de tabs e dropdowns.

## Estrutura

```text
nevvora/
├── src/
│   ├── css/
│   │   ├── components/
│   │   ├── tokens.css
│   │   ├── reset.css
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── utilities.css
│   │   └── nevvora.css
│   └── js/
│       ├── components/
│       └── nevvora.js
├── dist/
│   ├── nevvora.css
│   └── nevvora.js
├── examples/
├── docs/
├── scripts/
│   └── build.mjs
├── package.json
└── README.md
```

## Desenvolvimento

Edite os arquivos em `src/` e gere novamente a distribuição:

```bash
npm run build
```

Requer Node.js. Não é necessário executar `npm install`.

### Servidor local

Com o script `dev` incluído no projeto:

```bash
npm run dev
```

Abra http://localhost:8080/examples/.

Para escolher a porta pelo comando, altere o script no `package.json`:

```json
"dev": "python3 -m http.server"
```

Depois execute:

```bash
npm run dev -- 3000
```

Abra http://localhost:3000/examples/. O servidor requer Python; no Windows, use `python` no script caso esse seja o comando disponível.

## Documentação

- [Primeiros passos](docs/getting-started.md)
- [Personalização](docs/customization.md)
- [Componentes e interações](docs/components.md)

## Status

Versão experimental **0.1.0**. A base inclui reset e tipografia globais. As demonstrações simulam ações e não enviam dados ou arquivos. O projeto ainda não foi publicado no npm.

## Contribuições

Sugestões e melhorias são bem-vindas. Abra uma issue descrevendo o problema ou uma proposta de componente. Para mudanças visuais, inclua um exemplo de uso e, se possível, uma captura de tela.

## Licença

Uma licença de distribuição ainda não foi definida.
