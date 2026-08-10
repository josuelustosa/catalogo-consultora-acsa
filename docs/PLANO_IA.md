# Plano de Implementação

Fila de trabalho da UI do catálogo. Complementa
[CONTEXTO_IA.md](./CONTEXTO_IA.md): aqui ficam as tarefas e os critérios de
aceite; lá fica o estado consolidado da arquitetura.

> Ao concluir um item, marque o status aqui e leve a decisão relevante para o
> `CONTEXTO_IA.md`. Este arquivo é fila de trabalho, não histórico.

Status: `[x]` concluído · `[ ]` aberto

---

## Etapa atual — UI do catálogo

### 1. Listagem em grid responsivo `[x]`

Uma coluna em telas pequenas, duas em tablet, quatro a partir de `lg`.

- `CatalogGrid`: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`.
- O corte de 2 colunas é `md` (768px), não `sm` (640px): em portrait de tablet
  o card ainda respira, e no limite de 640px dois cards deixariam título e
  preço apertados.

### 2. Rota `/catalogo` sem slug `[x]`

Acessar `/catalogo` caía no `*` do roteador e exibia "Not Found".

- Nova página `pages/CatalogHome.tsx` registrada em `catalogo`, listando os
  catálogos como cards clicáveis.
- Os destinos vêm de `CATALOG_NAV_ITEMS` — mesma fonte da verdade do menu, sem
  lista paralela de links.
- O label do item do menu já enumera as marcas do grupo
  (`"o Boticário, Eudora & OUI"`), então o card não repete `item.brands`.

### 3. Busca por título e marca `[x]`

- Estado do termo em `pages/Catalog`, input controlado em `CatalogHeader`.
- `searchProducts(products, term)` em `catalog.service.ts` reaproveita o
  `normalize()` já usado no filtro de marca: o usuário digita "boticario" e a
  planilha tem "Boticário".
- Busca por substring em título **ou** marca. Sem operadores nem múltiplos
  termos — o catálogo tem dezenas de itens, não milhares.
- Debounce de 250ms via `hooks/use-debounced-value.ts`. O input responde na
  hora; só a filtragem espera.
- Trocar de catálogo pelo menu limpa a busca. Feito com `key={slug}` no
  conteúdo da página, e não com `useEffect`: o reset precisa ser síncrono, ou o
  debounce ainda propagaria o termo antigo contra a lista nova e exibiria
  "nenhum produto encontrado" por um instante.
- Estado vazio de busca é distinto de catálogo vazio, e oferece limpar o termo.

### 4. Estado vazio como componente global `[x]`

`/catalogo/qualquer-coisa` terminava em "Catálogo não encontrado." sem saída.

- `components/EmptyState.tsx`: mensagem centralizada + uma saída opcional. É o
  mesmo layout do "nenhum produto encontrado" da busca, agora compartilhado
  pelos três estados vazios do catálogo (slug inválido, catálogo sem produtos,
  busca sem resultado).
- A saída é um destino (`to`, vira `Link`) **ou** um callback (`onClick`, vira
  `button`) — união de tipos, nunca os dois: um estado vazio tem um único
  próximo passo óbvio. O estilo do botão fica no componente, então nenhum
  consumidor repete a classe.
- `message` é `ReactNode` para a busca poder destacar o termo com `<strong>`.
- Resolvido sem extrair o seletor de `CatalogHome` para `components/`, como
  previa o plano original: em slug inválido, um link "Ver catálogos" já leva ao
  seletor completo, e duplicar a lista ali só encheria a tela.

### 5. Rota `*` do roteador `[x]`

`routes.tsx` respondia `<h1>Not Found</h1>` cru para qualquer caminho
desconhecido.

- `pages/NotFound.tsx` consome o `EmptyState` da etapa 4, com saída para a Home.
- Virou página em vez de elemento inline no roteador: `routes.tsx` só mapeia
  caminho para página, sem markup.
- A rota é filha de `App`, então o cabeçalho e o menu continuam disponíveis —
  o link do `EmptyState` é conveniência, não a única saída.

---

## Backlog

### 6. Listagem seccionada por marca `[ ]`

`groupByBrand` existe no serviço e não tem consumidor. Candidata a agrupar o
catálogo por marca dentro da página. Decidir antes se conviva com a busca
(seções filtradas) ou se é uma visualização alternativa.

### 7. Planilha Google no lugar do mock `[ ]`

Substituir `data/products.mock.ts` pela leitura real. O contrato a preservar é
uma lista plana de `Product`; idealmente `catalog.service.ts` só muda a origem
dos dados. Traz assincronismo: `getCatalogBySlug` vira assíncrona e a página
passa a precisar de estados de carregando e erro.

### 8. Imagens dos produtos `[ ]`

Nenhum produto do mock tem `imageUrl`. `CatalogCard` já trata a ausência com um
bloco vazio; falta definir origem e proporção das imagens reais.

### 9. `Home.tsx` `[ ]`

Placeholder, e fora do padrão de formatação do resto (indentação de 4 espaços,
sem ponto e vírgula). Mesmo problema em `App.tsx` e `router/index.tsx`.

### 10. Testes `[ ]`

Sem runner configurado. `catalog.service.ts` é o primeiro candidato:
normalização, filtro por marca, busca e agrupamento são funções puras.
