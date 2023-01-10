import { Vertex } from "./vertex";

export class Edge {
    public source: Vertex;
    public target: Vertex;

    constructor(source: Vertex, target: Vertex) {
        this.source = source;
        this.target = target;
    }

    equals(edge: Edge): boolean {
        return (this.source.graphKey == edge.source.graphKey && this.target.graphKey == edge.target.graphKey)
            || (this.source.graphKey == edge.target.graphKey && this.target.graphKey == edge.source.graphKey)
    }
}