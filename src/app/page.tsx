import { Chatbot } from "@/components/chatbot";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-black via-purple-900 to-blue-900">
      <div className="w-full max-w-4xl">
        <Chatbot />
      </div>
    </main>
  );
}
