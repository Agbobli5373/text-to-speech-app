/**
 * ResponseFactory class responsible for creating audio responses.
 */
export class ResponseFactory {
    /**
     * Creates an audio response.
     * @param audioData The audio data as an ArrayBuffer.
     * @returns The created Response object.
     */
    static createAudioResponse(audioData: ArrayBuffer): Response {
        // Adjust the content type based on the actual audio format
        return new Response(audioData, {
            headers: {
                "Content-Type": "audio/mpeg",
            },
        });
    }
}