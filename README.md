Microfrontend Project with Webpack Module Federation
This repository demonstrates a microfrontend architecture using React, Webpack Module Federation, and Material-UI. The project is designed to showcase the seamless integration of multiple microfrontends, focusing on modularity, scalability, and reusability.

Features
1. Host Application
Acts as the primary shell for loading and coordinating microfrontends.
Dynamically integrates remote components from various microfrontends using Webpack Module Federation.
Provides shared dependencies like react and react-dom to avoid duplication.
2. Remote Application (Products App)
A standalone microfrontend exposing a Product Card Component.
Uses Material-UI to display visually appealing product cards.
Can be consumed by the host or other applications dynamically.
3. Integration with Module Federation
Enables effortless sharing of components between host and remote applications.
Supports configuration of multiple remotes for dynamic integration.
Shared libraries (react, react-dom) ensure consistent versions across applications.
Technologies Used
React: Frontend library for building UI components.
Webpack 5: Module bundler with support for Module Federation.
Material-UI: UI framework for modern and responsive designs.
Babel: Transpiler for writing modern JavaScript syntax.
Webpack Dev Server: For hot module replacement during development.
