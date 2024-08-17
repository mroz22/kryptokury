import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className=" left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            My jsme kryptokury. Fuck fiat. Koko.{" "}
          </p>
        </div>
        <a
          className="underline"
          href="https://btcpay.kryptokury.cz/apps/SDs9aRrbhk67t789LMoxzGqsHm8/pos"
        >
          Prodavame vajca za Bitcoin. Klikni zde.
        </a>
        &nbsp;
        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
          <Image
            src="/citadel.jpg"
            alt="kryptokury v citadele"
            width={512}
            height={512}
            priority
          />
        </div>
      </div>

      <video
        className="bottom-0 w-full object-cover"
        src="./videos/raptors2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </main>
  );
}
