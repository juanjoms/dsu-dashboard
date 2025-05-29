// Server side approach
const items = [
  { id: "1", name: "Item 1" },
  { id: "2", name: "Item 2" },
];

export const DiscoverTabs = () => {
  const itemId: FormDataEntryValue | null = "123";
  const handleDelete = async (data : FormData) => {
    const itemId = data.get("itemId");
    // API call to delete an item
  };

  return (
    <div className="text-center text-lg font-semibold bg-purple-950 p-4 rounded-lg shadow-md">
      <h2>Example Form</h2>
      Removing {itemId}...
      <br />
      {items.map((el, i) => (
        <div key={i}>
          <div >{el.name}</div>

          <form action={handleDelete}>
            <input readOnly name="itemId" className="hidden" value={el.id}/>
            <button type="submit" className="bg-blue-500 text-white rounded" >Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
}