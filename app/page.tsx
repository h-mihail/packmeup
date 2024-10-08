"use client";

import { ListDetails } from "./components/ListDetails";
import { Lists } from "./components/Lists";

export default function Home() {
  return (
    <div className="grid grid-cols-[1fr_3fr] gap-4 m-4">
      <Lists />
      <ListDetails />
    </div>
  );
}
