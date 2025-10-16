import Topic from "./topic";

export default function DocumentPage() {
  return (
    <div className="flex absolute z-50 left-[50%] top-[50%] translate-[-50%] flex-col gap-10">
      <h1 className="self-center text-5xl">Documentação</h1>
      <div className="flex flex-row gap-[10vw]">
        <div className="w-[15vw] h-[70vh] bg-slate-200 flex flex-col gap-10 p-4">
          <Topic/>
          <Topic/>
        </div>
        <div className="w-[40vw] h-[70vh] bg-slate-200">
          <Topic/>
        </div>
      </div>
    </div>
  );
}
