import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "../styles/news.module.css";

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
    <div
      style={{
        padding: "10px 20px 50px 20px",
        boxShadow: "1px 1px 10px black",
        marginTop: "40px",
        borderRadius: "10px",
      }}
    >
      <h1>Top News</h1>
      <div style={{ height: "600px", overflowY: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            borderRadius: "10px",
          }}
        >
          <thead
            style={{
              backgroundColor: "#1d2734",
              borderBottom: "1px solid grey",
            }}
          >
            <tr>
              <th
                style={{
                  padding: "15px",
                  fontSize: "12px",
                }}
              >
                Title
              </th>
              <th
                style={{
                  padding: "15px",
                  fontSize: "12px",
                }}
              >
                Description
              </th>
              <th
                style={{
                  padding: "15px",
                  fontSize: "12px",
                }}
              >
                Source
              </th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, index) => (
              <tr key={index}>
                <td
                  style={{
                    borderBottom: "1px solid grey",
                    padding: "15px",
                    fontSize: "12px",
                  }}
                >
                  {article.title}
                </td>
                <td
                  style={{
                    borderBottom: "1px solid grey",
                    padding: "15px",
                    fontSize: "12px",
                  }}
                >
                  {article.description}
                </td>
                <td
                  style={{
                    borderBottom: "1px solid grey",
                    padding: "15px",
                    fontSize: "12px",
                  }}
                >
                  {article.source.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewsGrid;
