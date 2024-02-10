import Header from "./header";
import Map from "./map";
const Feed = () => {
  return (
    <div className="flex flex-col w-full min-h-screen border-x border-slate-400 md:max-w-full">
      <Header />
      <Map />
    </div>
  );
};

export default Feed;
