# Explicando estrutura do astro

    - Nesse projeto será usado ASTRO + REACT + Tailwind + shadcn/ui

## Astro

    - Astro tem uma sintaxe de pastas muito simples
    -
        projeto/
    |-- src/
    |   |-- components
    |       |-- SeuComponente.tsx-jsx-astro-vue-svelte
    |   |-- layouts/
    |       |-- Layout.astro
    |   |-- pages/
    |       |-- index.astro

    - Dentro do astro a estrutura é muito simples de ser usada
    - Um exemplo de código em astro

    ```
    import { React } from 'react'

    export default function Home() {
      return (
        <div>
          <h1>Um componente react</h1>
          <p>Astro é o brabo</p>
        </div>
      );
    }
    ```
    - Exemplo de um componente Astro e React junto `import Layout from "../layouts/layout.astro";` = Componente com tag HTML principal
    - `import Header from "../components/ui-layout/header/header";` = Componente React que contem o header > nav(Desktop, Mobile) > navbar + hamburger

    ```
    ---
    import Header from "../components/ui-layout/header/header";
    import Layout from "../layouts/layout.astro";
    ---

    <Layout title="Portfolio">
      <Header client:only />
      <main></main>
    </Layout>
    ```
