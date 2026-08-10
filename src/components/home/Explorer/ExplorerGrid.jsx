import ExplorerCard from "./ExplorerCard";
import explorerData from "./explorerData";

function ExplorerGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {explorerData.map((item) => (
        <ExplorerCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}

export default ExplorerGrid;
