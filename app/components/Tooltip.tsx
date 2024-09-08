export const Tooltip = () => {
  return (
    <div className="flex flex-col gap-2 bg-teal-900 p-8">
      <h1 className="text-xl">Welcome to Packmeup!</h1>
      <p>Here is what you need to get started:</p>
      <ol className="list-decimal">
        <li>Select a list from the left menu.</li>
        <li>
          Click on things to edit them. Give your list and category a name.
        </li>
        <li>
          Add new categories and give items weights to start the visualization.
        </li>
      </ol>
    </div>
  );
};
