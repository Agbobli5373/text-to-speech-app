export class HuggingFaceService {
    private token: string;

    constructor(token: string) {
        this.token = token;
    }

    async generateAudio(modelUrl: string, input: any): Promise<ArrayBuffer> {
        const response = await fetch(modelUrl, {
            headers: {
                Authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ inputs: input }),
        });

        if (!response.ok) {
            throw new Error("Request failed");
        }

        return await response.arrayBuffer();
    }
}