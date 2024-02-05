import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex justify-center gap-3 p-4 border-b border-slate-400">
      <Button variant={"link"}>Map View</Button>
      <Button variant={"link"} disabled={true}>
        Specific Panels
      </Button>
    </div>
  );
};

export default Header;