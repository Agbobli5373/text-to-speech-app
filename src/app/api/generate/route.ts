import { RequestValidator } from './requestValidator';
import { HuggingFaceService } from './huggingFaceService';
import { ResponseFactory } from './responseFactory';

/**
 * Handles an HTTP POST request to generate audio using a pre-trained model.
 * Expects a JSON payload with 'modelUrl' and 'input' fields.
 * @param {Request} request - The incoming HTTP request.
 * @returns {Response} - The generated audio as an HTTP response.
 */
export async function POST(request: Request): Promise<Response> {
    let requestBody;
    try {
        requestBody = await request.json();
    } catch (error) {
        // Handle the error gracefully
        console.error('Error parsing request body:', error);
        return new Response('Invalid JSON', { status: 400 });
    }

    // Validate the request
    RequestValidator.validate(requestBody);

    // Extract the 'modelUrl' and 'input' from the request body
    const { modelUrl, input } = requestBody;

    // Create an instance of HuggingFaceService
    const huggingFaceService = new HuggingFaceService(process.env.HUGGING_FACE_TOKEN!);

    // Generate audio using the Hugging Face service
    const audioData = await huggingFaceService.generateAudio(modelUrl, input);

    // Create and return the HTTP response with the generated audio data
    return ResponseFactory.createAudioResponse(audioData);
}