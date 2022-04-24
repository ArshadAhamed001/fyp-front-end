import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import SwiperCore, { Autoplay } from "swiper";
import axios from "axios";

import SideBar from "../components/SideBar";
import ResultItem from "../components/ResultItem";

import { predictedResults, BASE_URL } from "../constants";
import { useEffect } from "react";

SwiperCore.use([Autoplay]);

const BlogTwo = () => {
  const [pageHeaderText, setPageHeaderText] = useState({
    linkText: "Home",
    heading: "Blog Right Sidebar",
  });

  const [wikiSummary, setWikiSummary] = useState(null);
  const [similarImages, setSimilarImages] = useState([]);

  useEffect(() => {
    let localResult = localStorage.getItem("predicted-gem-payload");
    if (!localResult) {
      window.location.href = "upload-image";
    }
    localResult = JSON.parse(localResult);
    const { predicted_value } = localResult;

    setPageHeaderText({ ...pageHeaderText, heading: predicted_value });

    const config = {
      headers: { "content-type": "application/json" },
    };

    axios
      .post(`${BASE_URL}/wiki-summary`, { value: predicted_value }, config)
      .then((res) => {
        const { data } = res;
        if (data?.payload) {
          const { wiki_summary = null } = data.payload;
          setWikiSummary(wiki_summary);
        }
      })
      .catch((err) => console.log(err));

    axios
      .post(`${BASE_URL}/similar-images`, { value: predicted_value }, config)
      .then((res) => {
        const { data } = res;
        if (data?.payload) {
          debugger
          const { img_array = null } = data.payload;
          if (img_array) {
            const filteredImages = img_array.filter((x) => x.includes('https'))
            setSimilarImages(filteredImages);
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <PageHeader text={pageHeaderText} />
      <section className="blog-section padding-top padding-bottom">
        <div className="container">
          <div className="main-blog">
            <div className="row g-5">
              <div className="col-xl-8 col-12">
                <div className="blog-wrapper">
                  <div className="row justify-content-center g-4">
                    {similarImages.map((item) => (
                      <ResultItem item={item} key={item.id} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-12">
                <div className="post-item-inner">
                  {/* <div className="post-content"> */}
                  <h3>{`Description`}</h3>
                  <br />
                  <p>{wikiSummary || ""}</p>
                  {/* </div> */}
                </div>
                {/* <SideBar /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogTwo;
