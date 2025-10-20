export default function Topic({ onClick, uniqueKey, Topic, className }: any) {
  return (
    <div
      onClick={(e) => {
        onClick(e, uniqueKey);
      }}
      className={`hover:cursor-pointer text-black h-[10vh] w-[100%] flex items-center justify-center text-2xl tracking-widest border-2 hover:bg-[#E0C9A6] border-gray-900 bg-[#F8B878] ${className}`}
    >
      <h1 className="">{Topic}</h1>
    </div>
  );
}
