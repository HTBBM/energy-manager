import React from "react";
import Topic from "./topic";

export default function DocumentPage() {
  const [actual, setActual] = React.useState(0);

  const titles = [
    "Sobre",
    "Requisitos",
    "Instalação",
    "Download",
    "Contato",
    "FAQ",
  ];

  const content = [
    <>
      <span>Sobre</span>
    </>,
    <>
      <span>Requisitos</span>
    </>,
    <>
      <span>Instalação</span>
    </>,
    <>
      <span>Download</span>
    </>,
    <>
      <span>Contato</span>
    </>,
    <>
      <span>FAQ</span>
    </>,
  ];

  function handleClick(e: unknown, uniqueKey: number) {
    setActual(uniqueKey);
    console.log("cliquei em", uniqueKey);
  }

  return (
    <div className=" flex absolute z-50 left-[50%] top-[50%] translate-[-50%] flex-col gap-16">
      <h1 className="self-center text-5xl text-[#5B4636] font-bold">
        Documentação
      </h1>
      <div className="flex flex-row items-start gap-[10vw] ">
        <div className="outline-1 outline-black w-[15vw] h-auto bg-slate-200 flex flex-col rounded-[1%]">
          <Topic
            className={actual === 0 ? `bg-amber-800 font-bold text-white` : ``}
            Topic="Sobre"
            uniqueKey={0}
            onClick={handleClick}
          />
          <Topic
            className={actual === 1 ? `bg-amber-800 font-bold text-white` : ``}
            Topic="Requisitos"
            uniqueKey={1}
            onClick={handleClick}
          />
          <Topic
            className={actual === 2 ? `bg-amber-800 font-bold text-white` : ``}
            Topic="Instalação"
            uniqueKey={2}
            onClick={handleClick}
          />
          <Topic
            className={actual === 3 ? `bg-amber-800 font-bold text-white` : ``}
            Topic="Download"
            uniqueKey={3}
            onClick={handleClick}
          />
          <Topic
            className={actual === 4 ? `bg-amber-800 font-bold text-white ` : ``}
            Topic="Contato"
            uniqueKey={4}
            onClick={handleClick}
          />
          <Topic
            className={actual === 5 ? `bg-amber-800 font-bold text-white` : ``}
            Topic="FAQ"
            uniqueKey={5}
            onClick={handleClick}
          />
        </div>
        <div className="w-[40vw] flex flex-col gap-4 h-[60vh] outline-3 outline-black bg-[#F8B878] p-5 rounded-2xl">
          <h1 className=" text-black text-4xl">{titles[actual]}</h1>
          <div className=" overflow-auto w-full h-full">
            <hr className="text-black" />
            <p className="wrap-break-word  text-black">{content[actual]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
