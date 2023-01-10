import { Edge } from "./edge";
import { Random } from "./random";
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

        // const nextEdge = targetEdges.find(e => !e.equals(edge)); // Not itself
        // Take random edge
        const nextEdges = targetEdges.filter(e => !e.equals(edge));
        if (!nextEdges.length) {
            return;
        }
        const n = Random.number(0, nextEdges.length);
        console.log(n);
        const nextEdge = nextEdges[n];

        const nextDirection = target.graphKey == nextEdge.source.graphKey;

        return [nextEdge, nextDirection];
    }
}