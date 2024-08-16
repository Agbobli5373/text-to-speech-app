# Text-to-Speech App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). This application allows users to generate audio from text using a pre-trained model hosted on Hugging Face.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm, yarn, pnpm, or bun (package managers)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/text-to-speech-app.git
    cd text-to-speech-app
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3. Create a `.env` file in the root directory and add your Hugging Face Access Token:

    ```plaintext
    HUGGING_FACE_TOKEN=your_hugging_face_token
    ```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev 
```

Open http://localhost:3000 with your browser to see the result.

#Environment Variables
Create a .env file in the root directory and add the following environment variables:

```plaintext
HUGGING_FACE_TOKEN=your_hugging_face_token
```
