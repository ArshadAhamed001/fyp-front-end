const TagList = [
  {
    id: 1,
    keyword: "react",
  },
  {
    id: 2,
    keyword: "next",
  },
  {
    id: 3,
    keyword: "python",
  },
  {
    id: 4,
    keyword: "CNN",
  },
  {
    id: 5,
    keyword: "flask",
  },
];
const Tags = () => {
  return (
    <ul className="widget-wrapper">
      {TagList.map((item) => (
        <li key={item.id}>
          <a href="#">{`${item.keyword}`}</a>
        </li>
      ))}
    </ul>
  );
};

export default Tags;
