import React, { useState } from "react";
import PageHeader from "../components/PageHaeder";

const PageHeaderText = {
  linkText: "Home",
  heading: "Upload Gem Stone Image",
};

const UploadGemImage = () => {
  return (
    <div>
      <PageHeader text={PageHeaderText} />
      <section className="create-nft-section padding-bottom padding-top">
        <div className="container">
          <div className="section-wrapper">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="create-nft py-5 px-4">
                  <div className="create-nft-form">
                    <div className="upload-item mb-30">
                      <p>PNG,JPG,JPEG</p>
                      <div className="custom-upload">
                        <div className="file-btn">
                          <i className="icofont-upload-alt"></i>
                          Upload a file
                        </div>
                        <input type="file" />
                      </div>
                    </div>

                    <div className="submit-btn-field text-center">
                      <button>Analyze</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UploadGemImage;
