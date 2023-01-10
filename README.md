# Graph

[![npm version](https://img.shields.io/npm/v/@ralfderijcke/graph)](https://www.npmjs.com/package/@ralfderijcke/graph)

Basic graph data structure to store data.

## Installation

[@ralfderijcke/graph](https://www.npmjs.com/package/@ralfderijcke/graph) is available as a npm.

```sh
npm install @ralfderijcke/graph --save
```

## Getting Started

```typescript
const graph = new Graph();

const object1 = {};
const vertex1 = new Vertex(object1);

const object2 = {};
const vertex2 = new Vertex(object2);

const edge1 = graph.addEdge(vertex1, vertex2);
```
