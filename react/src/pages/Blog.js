import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

/**
 * Blog page listing recent articles and insights.
 */
function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Load Testing: How AI is Revolutionizing Performance Testing',
      excerpt: 'Discover how artificial intelligence is transforming load testing from a reactive to a predictive discipline.',
      date: '2024-01-15',
      category: 'Technology',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Best Practices for Continuous Performance Testing in CI/CD',
      excerpt: 'Learn how to integrate performance testing seamlessly into your development workflow.',
      date: '2024-01-10',
      category: 'Software',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Understanding Real User Behavior: Beyond Traditional Load Testing',
      excerpt: 'Why simulating real user patterns matters more than just generating traffic.',
      date: '2024-01-05',
      category: 'Architecture',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Scaling Your Application: Performance Testing for Enterprise',
      excerpt: 'Enterprise-level strategies for ensuring your application performs at any scale.',
      date: '2023-12-28',
      category: 'Application',
      readTime: '7 min read'
    }
  ];

  return (
    <main className="blog">
      <section className="blog__intro">
        <h1 className="blog__heading">Blog</h1>
        <p className="blog__subheading">
          Insights, best practices, and the latest trends in performance testing and AI
        </p>
      </section>

      <section className="blog__content">
        <div className="blog__posts">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog__post">
              <div className="post__meta">
                <span className="post__category">{post.category}</span>
                <span className="post__date">{new Date(post.date).toLocaleDateString()}</span>
                <span className="post__read-time">{post.readTime}</span>
              </div>
              <h2 className="post__title">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h2>
              <p className="post__excerpt">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="post__read-more">
                Read More →
              </Link>
            </article>
          ))}
        </div>

        <aside className="blog__sidebar">
          <div className="sidebar__section">
            <h3>Categories</h3>
            <ul>
              <li><Link to="/blog/category/technology">Technology</Link></li>
              <li><Link to="/blog/category/software">Software</Link></li>
              <li><Link to="/blog/category/architecture">Architecture</Link></li>
              <li><Link to="/blog/category/application">Application</Link></li>
              <li><Link to="/blog/category/data">Data</Link></li>
            </ul>
          </div>

          <div className="sidebar__section">
            <h3>Recent Posts</h3>
            <ul>
              {blogPosts.slice(0, 3).map((post) => (
                <li key={post.id}>
                  <Link to={`/blog/${post.id}`}>
                    {post.title.length > 50 
                      ? post.title.substring(0, 50) + '...' 
                      : post.title}
                  </Link>
                  <span className="sidebar__date">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar__section">
            <h3>Newsletter</h3>
            <p>Stay updated with the latest in performance testing and AI.</p>
            <form className="newsletter__form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter__input"
              />
              <button type="submit" className="newsletter__button">
                Subscribe
              </button>
            </form>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Blog;