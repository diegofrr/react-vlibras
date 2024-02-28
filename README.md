<div align="center">
<img src="https://i.imgur.com/Pgyuysn.png" />

# react-vlibras

Torne sua aplicação React acessível com o VLibras Widget.

</div>

# Instalação

yarn

```
yarn add react-vlibras
```

npm

```
npm i react-vlibras
```

# Como utilizar

> [!CAUTION]
> Para evitar re-renderizações da ferramenta ao alterar a rota, é <u>extremamente importante</u> implementar o componente no arquivo root fora do container da aplicação.

Next.js

```typescript
// providers.tsx || providers.jsx

"use client";

import VLibras from "react-vlibras";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <VLibras isNextjs />
      {children}
    </>
  );
}
```

```typescript
// layout.tsx || layout.jsx

import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

React.js

```typescript
// index.tsx | index.jsx
// É necessário remover React.StrictMode

import VLibras from "react-vlibras";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <VLibras />
    <App />
  </>
);
```

# Propriedades

Você pode definir configurações padrão da ferramenta, como por exemplo: **posição na tela**, **avatar** e **opacidade de fundo** através das propriedades.

| Atributo        | Tipo                                                                                                   | Descrição                                                                                                                                                                                                               | Padrão                       |
| --------------- | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| avatar          | `icaro` \| `hosana` \| `guga` \| `random`                                                              | Avatar 3D                                                                                                                                                                                                               | `icaro`                      |
| position        | `right` \| `left` \| `top` \| `bottom` \| `top-left` \| `top-right` \| `bottom-left` \| `bottom-right` | Posição da ferramenta na tela                                                                                                                                                                                           | `right`                      |
| opacity         | `number`                                                                                               | Opacidade do background do avatar (0 ~ 1)                                                                                                                                                                               | `1`                          |
| personalization | `string`                                                                                               | Personalização do avatar (somente parceiros do projeto VLibras).                                                                                                                                                        | `undefined`                  |
| rootPath        | `string`                                                                                               | Link da pasta root da aplicação (entrar em contato para obter). Para otimizar a inicialização da ferramenta, você pode subi-la junto da sua aplicação e fornecer o _path_ de acesso (isso impede receber atualizações). | `https://vlibras.gov.br/app` |
| isNextjs        | `boolean`                                                                                              | Define se é uma aplicação **Next.js**. É útil para a ferramenta rodar corretamente.                                                                                                                                     | `false`                      |

# Saiba mais sobre o projeto VLibras

<a href="https://www.gov.br/governodigital/pt-br/vlibras">Site oficial</a>
