import dynamic from "next/dynamic";

const Nps = dynamic(() => import("../../../../@local/mycarrier-nps"), {
  ssr: false,
});

export const ScreenNps = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-red-600 underline">
        Hello world!
      </h1>
      <Nps />
    </>
  );
};
