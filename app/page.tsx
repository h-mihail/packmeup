"use client";

import { ListDetails } from "./components/ListDetails";
import { Lists } from "./components/Lists";

export default function Home() {
  return (
    <div className="grid grid-cols-[400px_2fr] gap-4">
      <Lists />
      <ListDetails />
    </div>
  );
}
