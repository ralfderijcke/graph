import { Random } from "./random";

export class Vertex {
    public readonly graphKey: string = Random.string(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    public readonly value: object;

    constructor(value: object) {
        this.value = value;
    }
}