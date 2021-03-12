import React from 'react';
import { graphql, Link } from 'gatsby';

function PostList({posts}) {
  return (
    <div>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={post.slug.current}>{post.title}</Link>
            </li>
          )
        }) }
      </ul>
    </div>
  );
}

export default function BlogPage({ data }) {
  const posts = data.posts.nodes;
  // console.log(posts);
  return (
    <PostList posts={posts} />
  );
}

export const query = graphql`
  query postTitleQuery {
    posts: allSanityPost {
      nodes {
        title
        id
        slug {
          current
        }
        categories {
          title
        }
        author {
          name
        }
        body {
          children {
            text
          }
        }
      }
    }
  }
`;