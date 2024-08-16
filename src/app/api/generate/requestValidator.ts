/**
 * Validates the request body for generating text-to-speech.
 * @param requestBody - The request body object.
 * @throws {Error} If the 'modelUrl' field is missing in the request body.
 * @throws {Error} If the 'input' field is missing in the request body.
 * @throws {Error} If the 'Hugging Face Access Token' is missing.
 */
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