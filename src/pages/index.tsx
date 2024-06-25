import styled from "../styles/Home.module.css";
import NewsGrid from "./news-grid";

export default function HomePage() {
  return (
    <>
      <div className={styled.main_container}>
        {/* <iframe src="news-grid" width="100%" height="800px"></iframe> */}
        <div style={{ padding: "0px 20px 0px 20px" }}>
          <NewsGrid></NewsGrid>
        </div>
      </div>
    </>
  );
}
