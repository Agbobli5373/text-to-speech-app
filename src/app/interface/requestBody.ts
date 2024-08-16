/**
 * Defines the structure of the request body for generating text-to-speech.
 */
interface RequestBody {
    modelUrl: string;
    input: string;
}