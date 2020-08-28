import React from 'react';
import { PostMasonry, MasonryPost } from '../components/common';
import trending from '../assets/mocks/trending';
import featured from '../assets/mocks/featured';

const trendingConfig = {
  1: {
    gridArea: '1 / 2 / 3 / 3',
  },
};

const featuredConfig = {
  0: {
    gridArea: '1/ 1 / 2 / 3',
    height: '300px',
  },
  1: {
    height: '300px',
  },
  3: {
    height: '630px',
    marginLeft: '30px',
    width: '630px',
  },
};

const mergeStyles = function (posts, config) {
  posts.forEach((post, index) => {
    post.style = config[index];
    post.author = 'Jorge DV';
    post.description =
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus at natus esse eos maxime! Facilis quae similique delectus dolor et!';
  });
};

const recentPosts = [...trending, ...featured, ...featured];

mergeStyles(trending, trendingConfig);
mergeStyles(featured, featuredConfig);

const lastFeatured = featured.pop();

const Home = () => {
  return (
    <main className="home">
      <section className="container">
        <div className="row">
          <h1>Featured Posts</h1>
          <section className="featured-posts-container">
            <PostMasonry tagsOnTop={true} posts={featured} columns={2} />
            <MasonryPost post={lastFeatured} tagsOnTop={true} />
          </section>
          <h1>Trending Posts</h1>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <h1>Recent Posts</h1>
          <PostGrid posts={recentPosts} />
        </div>
      </section>
      <section className="container">
        <div className="row">
          <PostMasonry tagsOnTop={true} posts={trending} columns={3} />
        </div>
      </section>
    </main>
  );
};

export default Home;
