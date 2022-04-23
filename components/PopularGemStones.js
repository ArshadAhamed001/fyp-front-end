import Gem from "./common/Gem";
import GemList from "../data/Gem/Gems.json";
import Link from "next/link";

var PopularGemStonesList = GemList.slice(0, 3);

const PopularGemStones = () => {
  return (
    <div>
      <section className="blog-section pb-120">
        <div className="container">
          <div className="section-header">
            <h3 className="header-title"> Popular Gem Stones</h3>
            <div className="header-content"></div>
          </div>

          <div className="section-wrapper">
            <div className="blog-wrapper">
              <div className="row justify-content-center g-4">
                {PopularGemStonesList.map((item) => (
                  <Gem data={item} key={item.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularGemStones;
