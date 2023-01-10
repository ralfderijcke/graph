import { Edge } from "./edge";
import { Vertex } from "./vertex";

export class Graph {
    public edges: Array<Edge> = [];

    get vertices() {
        const vertices = this.edges.flatMap(e => [e.source, e.target]);
        const keys = [...new Set(vertices.map(e => e.graphKey))]; // Unique
        const values = keys.map(k => vertices.find(vertice => vertice.graphKey == k));
        return values;
    }

    addEdge(source: Vertex, target: Vertex) {
        let edge = new Edge(source, target);
        if (!this.edges.find(e => e.equals(edge))) {
            this.edges.push(edge);
        }

        return edge;
    }

    nextEdge(edge: Edge, direction: boolean): [nextEdge: Edge, nextDirection: boolean] | undefined {
        let target = direction ? edge.target : edge.source;

        const targetEdges = this.edges.filter(e => e.source.graphKey == target.graphKey || e.target.graphKey == target.graphKey);

        const nextEdges = targetEdges.filter(e => !e.equals(edge)); // Not itself
        if (!nextEdges.length) {
            return;
        }

        function randomNumber(min: number, max: number): number {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
        }

        const n = randomNumber(0, nextEdges.length);
        const nextEdge = nextEdges[n];

        const nextDirection = target.graphKey == nextEdge.source.graphKey;

        return [nextEdge, nextDirection];
    }
}