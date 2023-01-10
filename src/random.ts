export class Random {
    static string(length: number, characters: string): string {
        const array = new Uint32Array(length);
        window.crypto.getRandomValues(array);

        let key = '';
        for (let i = 0; i < array.length; i++) {
            key += characters[array[i] % characters.length];
        }

        return key;
    }

    static number(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    static bool() {
        return Math.random() < 0.5;
    }
}
