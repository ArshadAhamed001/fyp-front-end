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
    "A wonderf serenity has taken poesion of my entire souin like these sweet mornins",
  content:
    "A wonderf serenity has taken poesion of my entire souin like these sweet mornins sprin which enjy with my whole hear I am alone and feel the charm of existen spot which was creatie For the blisse of souls like mineingi am so happy my dear friend, so absoribed in the exquisite sense tranquilera existence, that I neglect my talentsri I should bye incapable of drawin and sinle stroke A wonderful serenity has taken possession of my entire souing like these sweet mornins sprng enjoy with mye whole heart. I am alone, and feel the charm of existthis spot which was creatied the bliss of souls like mineingi am so happy my dear friend, so absoribed in the exquisite sense tranquil existnce, dt I neglect my talentsri I should bye incapable of drawin and single stroke enjoy with my whole hrt. I am alone, and feel the charm of existencethis spot which was For the bliss of souls like mineingis am so happy my dear friend, so absoribed in the exquisite sense tranquil existence, that I neglects my talentsri I should bye incapable of drawing and single the present moment; and yet If feel that I never was a greater artst A wonderf serenity has taken poesion of my entire souin like these sweet mornins sprin which enjy with my whole hear I am alone and feel the charm of existen spot which was creatie For the blisse of souls like mineingi am so happy my dear friend, so absoribed in the exquisite sense tranquilera existence, that I neglect my talentsri I should bye incapable of drawin and sinle stroke A wonderful serenity has taken possession of my entire souing like these sweet mornins sprng enjoy with mye whole heart. I am alone, and feel the charm of existthis spot which was creatied the bliss of souls like mineingi am so happy my dear friend, so absoribed in the exquisite sense tranquil existnce, dt I neglect my talentsri I should bye incapable of drawin and single stroke enjoy with my whole hrt. I am alone, and feel the charm of existencethis spot which was For the bliss.",
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
