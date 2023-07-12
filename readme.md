# N5 Challenge - Project

A Micro-Frontend solution to submit as a Challenge.

### Dependencies

-   Node LTS version

# Instructions to initialize the project

### Clone this repo

```bash
	git clone https://github.com/DanielRmz1/n5-challenge.git
```

### Attention: Make sure you are are located on root project and using a bash terminal

I have created some bash scripts to make easier to setup and initialize this project.

From project root where **dev** file is located:

-   Run the following commands:

```bash
	./dev install
	./dev start
```

-   After everything ran successfully, open the following url in a browser:

http://localhost:5173

## Run tests

I have created a bash script to run all the projects test cases at once

```bash
	./dev test
```

But if you prefer you can run each one independently

```bash
	cd host-project
	npm run test
```

```bash
	cd pokemon-remote
	npm run test
```

```bash
	cd rick-n-morty-remote
	npm run test
```

## Tools & Libraries used

-   [React](https://reactjs.org/)
-   [Vite](https://vitejs.dev/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoke)
-   [SWR](https://swr.vercel.app/)
-   [Zustand](https://zustand-demo.pmnd.rs/)
-   [styled-components](https://styled-components.com/)
-   [React-Intl](https://formatjs.io/docs/react-intl/)
-   [Module-Federation](https://webpack.js.org/concepts/module-federation/)
-   [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro/)
-   [Jest](https://jestjs.io/)
-   [Vitest](https://vitest.dev/)
-   [msw](https://mswjs.io/)
