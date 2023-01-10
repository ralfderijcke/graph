export class Vertex {
    public readonly graphKey: string = window.crypto.randomUUID();
    public readonly value: object;

    constructor(value: object) {
        this.value = value;
    }
}