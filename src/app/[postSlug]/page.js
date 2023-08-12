import React from "react";
import { loadBlogPost } from "@/helpers/file-helpers";
import BlogHero from "@/components/BlogHero";
import { MDXRemote } from "next-mdx-remote/rsc";
import { BLOG_TITLE } from "@/constants";

import styles from "./postSlug.module.css";
export async function generateMetadata({ params }) {
  const { postSlug } = params;
  const { frontmatter } = await loadBlogPost(postSlug);
  const { abstract } = frontmatter;

  return {
    title: `${postSlug} • ${BLOG_TITLE}  `,
    description: `${abstract}`,
  };
}
async function BlogPost({ params }) {
  const { postSlug } = params;
  const { content, frontmatter } = await loadBlogPost(postSlug);
  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={content} />
      </div>
    </article>
  );
}

export default BlogPost;
