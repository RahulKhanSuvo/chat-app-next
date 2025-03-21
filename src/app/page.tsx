import ChatForm from "@/components/ChatForm";

export default function Home() {
  return (
    <div className="flex mt-24 justify-center">
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="mb-4 text-2xl font-bold">Room:1</h1>
        <div>TODO:Add Chat Room</div>
        <ChatForm />
      </div>
    </div>
  );
}
