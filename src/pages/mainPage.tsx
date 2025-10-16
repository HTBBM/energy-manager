import {  motion } from "motion/react";
import React from "react";
import DocumentPage from "../components/documentation";

export default function MainPage() {
  const [submit, setSubmit] = React.useState(false);
  const [move, setMove] = React.useState(false);

  function handleSubmit(event:React.ChangeEvent<HTMLFormElement>){
    event.preventDefault()
    setSubmit(true)
  }

  return (
    <>
      {submit ? <DocumentPage/> : ""}

      <motion.h1
        animate={{ color: submit ? "#FFFF" : (move ? "#000000" : "#FFFF" )}}
        className={`absolute text-6xl top-10 left-10 z-50`}
      >
        IF
      </motion.h1>
      <div className={`overflow-hidden flex justify-center`}>
        <motion.div
          animate={{ y: submit ? 0 : (move ? screen.availHeight / 4 : 0) }}
          transition={{ duration: 0.5}}
          className=" relative flex justify-center overflow-hidden w-screen h-screen"
        >
          <div className="absolute bottom-[50%] scale-120 w-[100%] h-[160%] flex justify-center items-center">
            <motion.div
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: submit ? 0 : (move ? screen.availHeight : 0),
              }}
              transition={{
                duration: 1.25,
              }}
              className="h-[100%] w-[100%] bg-black rounded-[50%] flex flex-col items-center justify-between p-10 overflow-clip"
            >
              <div className="h-[-50%] w-[25%] flex flex-col justify-around items-center gap-[5vh] mt-[2vh]">
                <h1 className="text-5xl tracking-widest">Fazer Login</h1>{" "}
                <form action="" onSubmit={handleSubmit}>
                  <div className=" flex flex-col w-auto h-auto gap-5 scale-90">
                    <div className="flex flex-col gap-2">
                      <label className="text-white text-2xl" htmlFor="">
                        Email
                      </label>
                      <input
                        className="text-black bg-slate-300 w-auto h-6 p-3 outline-none rounded-4xl"
                        type="email"
                        name=""
                        id="email"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-white text-2xl" htmlFor="">
                        Senha
                      </label>
                      <input
                        className="text-black bg-slate-300 w-auto h-6 p-3 outline-none rounded-4xl"
                        type="password"
                        name=""
                        id="password"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-slate-400 hover:bg-slate-700 hover:text-white p-2 tracking-widest rounded-2xl text-2xl mt-5 cursor-pointer text-black "
                    >
                      Instalar
                    </button>
                  </div>
                </form>
              </div>
              {submit ? "" : <div className="h-[-50%] w-[25%] flex flex-col justify-around items-center gap-[15vh] mb-[10vh]">
                <h1 className="text-5xl">Nome Logo</h1>{" "}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  ipsa quaerat dolore incidunt ut inventore sapiente commodi
                  amet labore ad at nisi, non exercitationem sunt modi veniam!
                  Eum, totam deleniti?
                </p>
              </div>}
            </motion.div>
          </div>
          {submit ? "" : <button
            onClick={() => setMove(!move)}
            className="text-2xl tracking-wider h-16 w-40 absolute rounded-3xl  text-white bg-black bottom-30 hover:cursor-pointer hover:bg-gray-600 "
          >
            Get Started
          </button>}
        </motion.div>
      </div>
    </>
  );
}
