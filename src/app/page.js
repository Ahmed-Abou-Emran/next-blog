import React from "react";
import { getBlogPostList } from "@/helpers/file-helpers";
import BlogSummaryCard from "@/components/BlogSummaryCard";

import styles from "./homepage.module.css";

async function Home() {
  const blogPosts = await getBlogPostList();
  console.log(blogPosts);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {blogPosts.map(({ slug, title, abstract, publishedOn }) => (
        <BlogSummaryCard
          slug={slug}
          title={title}
          abstract={abstract}
          publishedOn={publishedOn}
          key={slug}
        />
      ))}
    </div>
  );
}

export default Home;
