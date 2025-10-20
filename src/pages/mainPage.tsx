import { motion } from "motion/react";
import React from "react";
import DocumentPage from "../components/documentation";

export default function MainPage() {
  const [submit, setSubmit] = React.useState(false);
  const [move, setMove] = React.useState(false);

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmit(true);
  }

  return (
    <>
      {submit ? (
        <motion.div
          className="flex absolute z-50 left-[50%] top-[50%] scale-90  translate-[-50%]"
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.75, delay: 1 }}
        >
          <DocumentPage />{" "}
        </motion.div>
      ) : (
        ""
      )}

      <motion.h1
        animate={{ color: submit ? "#FFFF" : move ? "#000000" : "#FFFF" }}
        className={`absolute text-6xl top-10 left-10 z-50`}
      >
        IF
      </motion.h1>
      <div className={`overflow-hidden flex justify-center`}>
        <motion.div
          animate={{ y: submit ? -10 : move ? screen.availHeight / 4 : 0 }}
          transition={{ duration: 0.5 }}
          className=" relative flex justify-center overflow-hidden w-screen h-screen"
        >
          <div className="absolute bottom-[50%] scale-120 w-[100%] h-[160%] flex justify-center items-center">
            <motion.div
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: submit ? -100 : move ? screen.availHeight : 0,
              }}
              transition={{
                duration: 1.25,
              }}
              className="h-[100%] w-[100%] bg-[#F9C784] rounded-[50%] flex flex-col items-center justify-between p-10 overflow-clip"
            >
              <div className="h-[-50%] w-[25%] flex flex-col justify-around scale-[80%] items-center gap-[1vh] ">
                <h1 className="text-5xl tracking-widest font-bold text-[#5B4636]">
                  Fazer Login
                </h1>{" "}
                <form action="" onSubmit={handleSubmit}>
                  <div className=" flex flex-col w-auto h-auto gap-5 scale-90 p-10 bg-[#FFE8C2] rounded-4xl">
                    <div className="flex flex-col gap-2">
                      <label className="text-[#5B4636] text-2xl" htmlFor="">
                        Email
                      </label>
                      <input
                        className="text-[#5B4636] border-2 border-[#d7ccb5] bg-[#fff0d4] w-auto h-6 p-4 outline-none rounded-4xl"
                        type="email"
                        name=""
                        id="email"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[#5B4636] text-2xl" htmlFor="">
                        Senha
                      </label>
                      <input
                        className="text-[#5B4636]  bg-[#fff0d4] border-2 border-[#d7ccb5] w-auto h-6 p-4 outline-none rounded-4xl"
                        type="password"
                        name=""
                        id="password"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-[#ea6155] hover:bg-gray-800 text-white p-2 tracking-widest rounded-2xl text-2xl mt-5 cursor-pointer  "
                    >
                      Instalar
                    </button>
                  </div>
                </form>
              </div>
              {submit ? (
                ""
              ) : (
                <div className="h-[-50%] w-[25%] flex flex-col justify-around items-center gap-[15vh] mb-[10vh]">
                  <h1 className="text-4xl text-[#5B4636] font-bold">
                    Energy Manager
                  </h1>{" "}
                  <p className="text-[#5B4636]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    ipsa quaerat dolore incidunt ut inventore sapiente commodi
                    amet labore ad at nisi, non exercitationem sunt modi veniam!
                    Eum, totam deleniti?
                  </p>
                </div>
              )}
            </motion.div>
          </div>
          {submit ? (
            ""
          ) : (
            <button
              onClick={() => setMove(!move)}
              className="text-2xl tracking-wider h-16 w-40 absolute rounded-3xl  text-white bg-[#ea6155] bottom-30 hover:cursor-pointer hover:bg-gray-800 "
            >
              Get Started
            </button>
          )}
        </motion.div>
      </div>
    </>
  );
}
