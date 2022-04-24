/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const BannerTwo = () => {
  return (
    <section
      className="banner-section"
      style={{ backgroundImage: "url('assets/images/banner/bg-1.jpg')" }}
    >
      <div className="container">
        <div className="banner-wrapper">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="banner-content">
                <h1 className="mb-3">
                  <span className="gradient-text-orange">Upload</span> ,
                  Analyze, And Identify
                  <span className="gradient-text-orange"> Gem Stones</span>
                </h1>
                <p className="mb-5">
                  Digital Platform to Analyze and Identify Gem Stones.
                </p>
                <div className="banner-btns d-flex flex-wrap">
                  <Link href="/upload-image">
                    <a className="default-btn move-top">
                      <span>Upload Image</span>{" "}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-image">
                <img
                  src="assets/images/banner/banner-img-replace.png"
                  alt="Gem Image"
                  width={250}
                  height={250}
                  style={{ marginLeft: 200 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
