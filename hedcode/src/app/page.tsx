export default function Home() {
  return (
    <>
      <div className="bg-stone-50">
        <header className="flex items-center justify-between p-6">
          <p className="text-2xl font-bold">HedCode</p>
          <nav>
            <ul className="flex items-center gap-6 font-medium">
              <li>About</li>
              <li>Showcase</li>
              <li>Project</li>
            </ul>
          </nav>
        </header>
        <div className="grid h-120 place-items-center">
          <div>
            <p className="text-8xl tracking-widest">HEDCODE</p>
            <p className="tracking-widest text-center">organization</p>
          </div>
        </div>
      </div>
    </>
  );
}
