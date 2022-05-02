import PageHeader from "../components/PageHeader";
import SwiperCore, { Autoplay } from "swiper";
import SideBar from "../components/SideBar";
SwiperCore.use([Autoplay]);

const PageHeaderText = {
  linkText: "Home",
  heading: "About Gem World",
};

const BlogPost = {
  id: 1,
  type: "post",
  title:
    "Gem, Your Future Today",
  content:
    "Gemstones are minerals, rocks, or organic matters that have been chosen for their beauty, durability, and rarity and then cut or faceted and polished to make jewelry or other human adornments. Even though most gemstones are hard, some are too soft or fragile to be used in jewelry, so they are often exhibited in museums and sought by collectors. Gemstones ColorGemstones are diverse in their beauty, and many are available in a stunning variety of shades and colors. Most gemstones have little beauty in the rough state, they may look like ordinary rocks or pebbles, but after a skilled cutting and polishing the full color and luster can be seen. Generally, gemstones with clear, medium-tone, intense, and saturated primary colors are most preferred.Gemstones ClarityGemstones are formed below the Earth's surface and can sometimes show traces of other minerals, called inclusions. Inclusions can look like small spots or imperfections within the stone. When viewed through a microscope or a 10x loupe, they can give information about the geological environment in which the mineral was formed and its origin. Inclusions can sometimes identify gemstones and even prove whether the stone is natural or synthetic. Some gemstones, such as emeralds, are more likely to have inclusions. Others, such as aquamarine and topaz, generally have very few inclusions or even none at all.Gemstones Cut The natural beauty of a gem can be enhanced by the way it is cut. There are two basic kinds of gem cuts: cabochon and faceted. The cabochon cut has a smooth rounded top, usually with a flat base, and it is mainly used for opaque or translucent softer gemstones. Cabochons were the only way in which stones were cut until about the 14th century when faceting was developed. Faceting is the process of cutting a gemstone to improve its beauty by making it reflect more light. The faceted cut has many flat cut surfaces (facets) with an overall shape that might be round, oval, square, and more. Only the harder gemstones can be successfully faceted. A gemstone that has been cut and polished is called a gem, or jewel. Gemstones Formation Our planet, which was created about 4.5 billion years ago, is comprised of several layers: the Earth's crust, ranging from 3 to 25 miles deep, the mantle and the inner part of Earth known as the core. Most of the gemstones form as minerals under various conditions in the rocks of the Earth’s crust, while just a few of them form in the mantle. The crust is made up of three kinds of rock, known in geology as igneous, metamorphic and sedimentary rock. All gemstones are mined in the crust. After they are mined, they usually go to a lapidary, which does the final cleaning. This may involve grinding off the matrix or rock, in which the gemstone was buried, and then cutting or faceting and polishing the gemstones. A gemstone that has been cut and polished is called a gem, or jewel.",
};

const BlogSingle = () => {
  return (
    <div>
      <PageHeader text={PageHeaderText} />
      <section className="blog-section padding-top padding-bottom">
        <div className="container">
          <div className="main-blog">
            <div className="row g-5">
              <div className="col-xl-8 col-12">
                <div className="blog-wrapper">
                  <div className="post-item">
                    <div className="post-item-inner">
                      <div className="post-content">
                        <h3>{`${BlogPost.title}`}</h3>
                        <p>{`${BlogPost.content}`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-12">
                <SideBar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSingle;
