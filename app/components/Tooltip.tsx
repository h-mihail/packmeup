export const Tooltip = () => {
  return (
    <div className="flex flex-col gap-2 bg-teal-900 p-8">
      <h1 className="text-xl">Welcome to Packmeup!</h1>
      <p>Here's what you need to get started:</p>
      <ol className="list-decimal">
        <li>Add a new list from the left menu. Give your list a name.</li>
        <li>Click on a list to select it.</li>
        <li>
          Add new categories and give items weights to start the visualization.
        </li>
      </ol>
    </div>
  );
};
