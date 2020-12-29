<p align="center">
  <img src="https://user-images.githubusercontent.com/6391763/95682831-30524580-0c05-11eb-9864-cc6d6d54e23c.png" alt="Logo"/>
</p>

<p align="center">
  <a href="https://twitter.com/codebrahma">
    <img alt="Twitter: Codebrahma" src="https://img.shields.io/twitter/follow/codebrahma.svg?style=social" target="_blank" />
  </a>
</p>

This is a sample application to demonstrate the difference between SWR and React Query. This monorepo consists of the following packages:

1. [**components**](https://github.com/ghoshnirmalya/swr-vs-react-query/tree/master/packages/components): Components library
2. [**react-query-nextjs**](https://github.com/ghoshnirmalya/swr-vs-react-query/tree/master/packages/react-query-nextjs): Next.js application bundled with [React Query](https://react-query.tanstack.com)
3. [**strapi**](https://github.com/ghoshnirmalya/swr-vs-react-query/tree/master/packages/strapi): Dockerized [Strapi](https://strapi.io/) application
4. [**swr-nextjs**](https://github.com/ghoshnirmalya/swr-vs-react-query/tree/master/packages/swr-nextjs): Next.js application bundled with [SWR](https://swr.now.sh/)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Overview](#overview)
- [Requirements](#requirements)
- [Installation](#installation)
  - [1. **Clone the application**](#1-clone-the-application)
  - [2. **Install necessary dependencies**](#2-install-necessary-dependencies)
  - [3. **Start the applications**](#3-start-the-applications)
  - [4. **Go inside the directory of the Strapi package on another terminal window**](#4-go-inside-the-directory-of-the-strapi-package-on-another-terminal-window)
  - [5. **Start docker-compose**](#5-start-docker-compose)
- [Other interesting repositories](#other-interesting-repositories)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Overview

This boilerplate is built using the following technologies:

1. [SWR](https://swr.now.sh/)
2. [React Query](https://react-query.tanstack.com/docs/graphql)
3. [GraphQL](https://graphql.org/)
4. [Next.js](https://nextjs.org/)

## Requirements

1. [Node.js](https://nodejs.org/)
2. [npm](https://www.npmjs.com/)
3. [Docker](https://www.docker.com/)

## Installation

### 1. **Clone the application**

```sh
git clone https://github.com/ghoshnirmalya/swr-vs-react-query
```

### 2. **Install necessary dependencies**

```sh
npx lerna bootstrap
```

### 3. **Start the applications**

From the root directory, we can run the following command to start our applications:

```sh
yarn dev
```

The above command will start the **swr-nextjs** application on [http://localhost:3001/](http://localhost:3001) and the **react-query-nextjs** application on [http://localhost:3002/](http://localhost:3002).

### 4. **Go inside the directory of the Strapi package on another terminal window**

```sh
cd packages/strapi
```

### 5. **Start docker-compose**

```sh
docker-compose up
```

We need to start Docker and then run the above command which will change the current directory to the backend package’s directory and then start the backend package. If everything goes well, it’ll be up and running on [http://localhost:1337](http://localhost:1337).

## Other interesting repositories

1. [Hasura Next.js Boilerplate](https://github.com/ghoshnirmalya/nextjs-hasura-trello-clone)
2. [Strapi Next.js Boilerplate](https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate)
3. [React Search Box](https://github.com/ghoshnirmalya/react-search-box)
4. [LinkedIn Clone using Create React App](https://github.com/ghoshnirmalya/linkedin-clone-react-frontend)
5. [Building mono-repo applications using Lerna](https://github.com/ghoshnirmalya/building-monorepos-using-lerna)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
