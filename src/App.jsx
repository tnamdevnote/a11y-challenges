import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="bg-lighter-blue min-h-screen flex items-start md:items-center">
      <header className="bg-bg-sidebar-mobile bg-cover fixed top-0 w-full h-[172px] md:hidden"></header>
      <section className="rounded-xl max-w-[940px] w-full min-h-96 lg:mx-auto my-[99px] md:top-0 drop-shadow-xl mx-8 bg-white"></section>
      <footer className="bg-white h-[72px] fixed bottom-0 items-center w-full justify-between md:hidden">
        <button type="button">Next Step</button>
      </footer>
    </main>
  );
}

export default App;
