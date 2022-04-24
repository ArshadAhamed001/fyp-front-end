import Link from "next/link";

const ResultItem = ({ item }) => {
  return (
    <div className="col-sm-6">
      <div className="nft-item blog-item">
        <div className="nft-inner">
          <div className="nft-thumb">
            <Link href="/blogsingle">
              <img src={item} alt="blog-img" />
            </Link>
          </div>
          <div className="nft-content">
            <div className="author-details">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
