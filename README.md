# react-redux-coryhouse

Ao perceber que está exibindo as mesmas informações em múltiplos lugares, provavelmente teremos state changes que ficarão difíceis de administrar, e com isso fica evidente o benefício de ter um único lugar para lidar com essas alterações de estado da aplicação. O que inclusive facilita os testes e a manutenção da aplicação.
    - react context
    - react e redux

### Formas de lidar com a administração de estado da aplicação:

    1. Lift state, onde a ideia é passar os dados via props, entre cada componente. Isso causa o problema de prop drilling e somente é recomendado para small e mid-size apps.
    2. React context, criamos o UserContext.Provider no topo da pirâmide de componentes, e importamos o UserContext.Consumer em qualquer componente abaixo do Provider. É uma forma elegante de tratar os dados e padrão do próprio react, mas exige que os componentes possuam uma relação na pirâmide.
    3. Redux, armazena os dados em uma store central. Quando é necessário alterar os dados, os componentes disparam uma ação, então a store é atualizada e informa os componentes sobre a atualização, forçando-os a renderizar novamente. Sua aplicação fica evidente quando precisamos lidar com situações complexas de fluxo de dados:
    - como atualizar os dados em componentes que não possuem uma relação de pai-filho
    - quando possuímos muitas ações a serem disparadas (crud)
    - utilização dos mesmos dados em diversos pontos

### Conceitos do Redux:

    - One immutable store, a única forma de mudar o estado é submetendo uma ação, que em si utiliza pure functions, chamadas reducers.
    - Unidirectinoal data flow
    - Reducers, recebem um estado e uma ação, e retornam um novo estado
    - Containers, contém lógica (estado) e passam informações via props para os Presentational components
    - Immutability, os dados não podem ser alterados diretamente, ou seja, para alterar o estado de um objeto, devemos clonar, alterar e retornar um novo objeto (clareza, quem alterou o estado + performance, comparamos o endereço do objeto em memória !== ao invés de cada valor do objeto). Abaixo algumas formas de copiar um objeto:
    - Object.assign
    - Spread operator (...)
    - Array methods like map, filter, reducer
    - Libraries like Immer, Seamless-Immutable, Immutable, etc

    | **Flux**                                       |
    | ---------------------------------------------- |
    | Action                                         |
    | Dispatcher (singleton)                         |
    | Store (conecta ao dispatcher via eventEmmiter) |
    | React                                          |

    | **Redux**                                         |
    | ------------------------------------------------- |
    | Action (atualiza store via reducers)              |
    | Store (é atualizada pelos reducers) <==> Reducers |
    | React                                             |

### Conectando React com Redux

    - Provider, attaches app to store
    - Connect, creates container components
    - mapStateToProps (pode expor somente parte da store para o componente) (executa sempre que o componente é renderizado - memoize with reselect)
    - mapDispatchToProps (expõe ações ao componente)
        1. dispatch implícito
        2. dispatch único por ação
        3. bindActionCreator, é uma helper function do Redux que evita o trabalho de ter que englobar cada actionCreators em uma chamada ao dispatch
        4. mapDispatchToProps como um objeto

# instalação e configuração do ambiente

## troubleshoot

- Please note that webpack-dev-server runs in memory by design. If you want a real bundle, build through webpack.

## production dependencies

| **Dependency**   | **Use**                                              |
| ---------------- | ---------------------------------------------------- |
| bootstrap        | CSS Framework                                        |
| immer            | Helper for working with immutable data               |
| prop-types       | Declare types for props passed into React components |
| react            | React library                                        |
| react-dom        | React library for DOM rendering                      |
| react-redux      | Connects React components to Redux                   |
| react-router-dom | React library for routing                            |
| react-toastify   | Display messages to the user                         |
| redux            | Library for unidirectional data flows                |
| redux-thunk      | Async redux library                                  |
| reselect         | Memoize selectors for performance                    |

## development dependencies

| **Dependency**                  | **Use**                                                          |
| ------------------------------- | ---------------------------------------------------------------- |
| @babel/core                     | Transpiles modern JavaScript so it runs cross-browser            |
| babel-eslint                    | Lint modern JavaScript via ESLint                                |
| babel-loader                    | Add Babel support to Webpack                                     |
| babel-preset-react-app          | Babel preset for working in React. Used by create-react-app too. |
| css-loader                      | Read CSS files via Webpack                                       |
| cssnano                         | Minify CSS                                                       |
| enzyme                          | Simplified JavaScript Testing utilities for React                |
| enzyme-adapter-react-16         | Configure Enzyme to work with React 16                           |
| eslint                          | Lints JavaScript                                                 |
| eslint-loader                   | Run ESLint via Webpack                                           |
| eslint-plugin-import            | Advanced linting of ES6 imports                                  |
| eslint-plugin-react             | Adds additional React-related rules to ESLint                    |
| fetch-mock                      | Mock fetch calls                                                 |
| html-webpack-plugin             | Generate HTML file via webpack                                   |
| http-server                     | Lightweight HTTP server to serve the production build locally    |
| jest                            | Automated testing framework                                      |
| json-server                     | Quickly create mock API that simulates create, update, delete    |
| mini-css-extract-plugin         | Extract imported CSS to a separate file via Webpack              |
| node-fetch                      | Make HTTP calls via fetch using Node - Used by fetch-mock        |
| npm-run-all                     | Display results of multiple commands on single command line      |
| postcss-loader                  | Post-process CSS via Webpack                                     |
| react-test-renderer             | Render React components for testing                              |
| react-testing-library           | Test React components                                            |
| redux-immutable-state-invariant | Warn when Redux state is mutated                                 |
| redux-mock-store                | Mock Redux store for testing                                     |
| rimraf                          | Delete files and folders                                         |
| style-loader                    | Insert imported CSS into app via Webpack                         |
| webpack                         | Bundler with plugin ecosystem and integrated dev server          |
| webpack-bundle-analyzer         | Generate report of what's in the app's production bundle         |
| webpack-cli                     | Run Webpack via the command line                                 |
| webpack-dev-server              | Serve app via Webpack                                            |

## vscode

- se JSX estiver quebrando ao salvar, adicionar o código abaixo no settings.json
    <pre><code>"files.associations": {
      "*.js": "javascriptreact"
    }</code></pre>
- para emmet funcionar no jsx, adicionar o seguinte trecho no settings.json
    <pre><code>"emmet.includeLanguages": {
          "javascript": "javascriptreact"
    }</code></pre>
- habilitar format on save
- instalação da extensão Redux Dev Tools

## projeto

- adicionar e configurar .editorconfig ou .prettierrc.json
- package.json
    - copiar/criar arquivo package.json
- yarn install
- configurar webpack
    - criar arquivo de configuração webpack.config.dev.js
- configurar babel
    - adicionar babel no package.json
- configurar eslint
    - adicionar .eslintrc.json

... criando componentes e rotas

## async in Redux

Existem diversas bibliotecas que permitem lidar com async no Redux, como:

- redux-thunk, retorna funções a partir dos action creators
    - é muito útil para trazer os seguintes benefícios:
        - consistência, os componentes podem chamar ações síncronas e assíncronas da mesma forma (consistência de código)
        - pureza, evita ligar o fonte a side effects
        - facilidade nos testes, e a pureza facilita nos testes
    - thunk nos ajuda a evitar side effects nas actions, action creators e componentes. Tudo que é impuro é envolto pela thunk. Mais tarde a thunk será chamada pelo Middleware, o que irá causar o effect, ou seja, o effect roda somente no middleware, fica centralizado.
- redux-promise, usa promises para operações async
- redux-observable, usa RxJS observables
- redux-saga, usa generators

**Thunk**
- As ações retornam funções ao invés de objetos
- Difíceis de testar
- API simples de aprender

**Sagas**
- Lida com async via generators, que são funções que podem ser pausadas e retomadas futuramente
- Simples de testar (não precisa mockar nada, código mais limpo)
- Difícil de entender pois precisa conhecer uma API mais extensa