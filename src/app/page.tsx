export default function Home() {
  return (
    <div className="mt-10">
      <div className="items-center justify-between lg:flex">
        <h1>
          Welcome home!&nbsp;
        </h1>
        <a className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0" href="/newRoute">
          New Route?
        </a>
      </div>

      <div>
        <h5>Home</h5>
      </div>
    </div>
  );
}