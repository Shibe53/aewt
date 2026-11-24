export function FourOhFour() {
  return (
    <main className="flex min-h-[75vh] w-full flex-col items-center justify-center bg-black px-6 text-center">
      <h1 className="text-8xl font-black tracking-tight text-white sm:text-9xl">
        <span className="text-[#ae1a20]">4</span><span className="text-[#6c0287]">0</span><span className="text-[#ae1a20]">4</span>
      </h1>
      <h2 className="mt-4 text-xl font-bold text-white sm:text-2xl">
        Page not found
      </h2>
      <p className="mt-3 max-w-sm text-sm leading-6 text-gray-400">
        The page you're looking for doesn't exist or may have been moved.
      </p>
    </main>
  );
}
