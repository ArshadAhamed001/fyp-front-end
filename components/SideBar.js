import TechStack from "./common/TechStack";

const SideBar = () => {
  return (
    <aside>
      <div className="widget widget-tags">
        <div className="widget-header">
          <h5 className="title">Technology Stack</h5>
        </div>
        <TechStack />
      </div>
    </aside>
  );
};

export default SideBar;
