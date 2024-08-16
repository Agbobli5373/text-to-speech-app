export class RequestValidator {
    static validate(requestBody: any): void {
        if (!requestBody.modelUrl) {
            throw new Error("Missing 'model url' field in the request body");
        }
        if (!requestBody.input) {
            throw new Error("Missing 'input' field in the request body");
        }
        if (!process.env.HUGGING_FACE_TOKEN) {
            throw new Error("Missing 'Hugging Face Access Token'");
        }
    }
}