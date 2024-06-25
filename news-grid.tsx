import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NewsGrid = () => {
  const [articles, setArticles] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=b5a2b8b283844a40bf1e1dd12779d760"
        );
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Top News</h1>
      {/* <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Title</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Description
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Source</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {article.title}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {article.description}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {article.source.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default NewsGrid;
