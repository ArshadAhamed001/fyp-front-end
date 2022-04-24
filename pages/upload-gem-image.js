import React, { useState } from "react";
import axios from "axios";
import PageHeader from "../components/PageHeader";
import { BASE_URL } from "../constants";

const PageHeaderText = {
  linkText: "Home",
  heading: "Upload Gem Stone Image",
};

const UploadGemImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleUploadImage = async () => {
    if (!selectedImage) return;

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    const formData = new FormData();
    formData.append("file", selectedImage);

    setLoading(true)

    axios
      .post(`${BASE_URL}/upload-image`, formData, config)
      .then((res) => {
        const { data } = res;
        if (data?.payload) {
          setResponseData(data.payload);
          localStorage.setItem(
            "predicted-gem-payload",
            JSON.stringify(data.payload)
          );
          window.location.href = "gem-predicted-result";
        }
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      });
  };

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
                      {selectedImage && (
                        <>
                          <p>{selectedImage.name || "Hello"}</p>
                        </>
                      )}
                      <div className="custom-upload">
                        <div className="file-btn">
                          <i className="icofont-upload-alt"></i>
                          Upload a file
                        </div>
                        <input
                          type="file"
                          onChange={(event) => {
                            console.log(event.target.files[0]);
                            setSelectedImage(event.target.files[0]);
                          }}
                        />
                      </div>
                    </div>

                    <div className="submit-btn-field text-center">
                      <button disabled={loading} onClick={handleUploadImage}>{loading ? 'Loading...' : 'Analyze'}</button>
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
