/**
 * ResponseFactory class responsible for creating audio responses.
 */
export class ResponseFactory {
    static createAudioResponse(audioData: ArrayBuffer): Response {
        return new Response(audioData, {
            headers: {
                "Content-Type": "audio/mpeg", // Adjust the content type based on the actual audio format
            },
        });
    }
}