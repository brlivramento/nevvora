# Componentes
Veja exemplos completos em `examples/index.html`.

| Componente | Classes |
|---|---|
| Botão | nv-btn, nv-btn--primary, nv-btn--small, nv-btn--ghost, nv-btn--danger |
| Card | nv-card |
| Formulário | nv-field, nv-input, nv-check, nv-switch, nv-error |
| Badge | nv-badge, nv-badge--success, nv-badge--warning, nv-badge--danger |
| Avatar | nv-avatar, nv-avatars |
| Alertas | nv-alert |
| Tabs | nv-tabs, nv-tab, nv-tabpanel |
| Accordion | nv-accordion com details e summary |
| Tabela | nv-table-wrap com table |
| Dropdown | nv-menu, nv-popover |
| Paginação | nv-pagination |
| Progresso | nv-progress com progress |
| Loading | nv-skeleton |
| Tooltip | nv-tooltip com span |
| Upload | nv-dropzone |
| Estado vazio | nv-empty, nv-symbol |
| Timeline | nv-timeline |
| Layout | nv-shell, nv-grid, nv-row, nv-stack, nv-two |

## JavaScript reutilizável
Carregue `dist/nevvora.js`. A inicialização é automática. Após inserir conteúdo dinamicamente, execute `Nevvora.init(container)`.

Toast: `Nevvora.toast('Salvo!', 3000)`.
Modal: `Nevvora.openModal('#meu-dialog')` e `Nevvora.closeModal('#meu-dialog')`. Use `<dialog>` com `aria-labelledby` e formulário `method="dialog"` para fechar.

Tabs: adicione `data-nv-tabs` ao container que reúne botões e painéis; botões devem ter `role="tab"`, `aria-selected` e `aria-controls` apontando para o ID do painel. Use `role="tablist"` na lista, `role="tabpanel"` e `aria-labelledby` nos painéis. Setas, Home e End navegam entre abas.

Dropdown: adicione `data-nv-dropdown` ao container; o botão tem `aria-controls` apontando para o ID do painel. O painel pode conter links e botões comuns. Escape e clique externo fecham.

Paginação, upload, formulário e slider da galeria são demonstrações em `examples/demo.js`. Conecte esses controles à lógica da sua aplicação.
