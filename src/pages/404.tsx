import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function NotFound() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Page Not Found" description="Oops, page not found">
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className="hero__title">404 - Page Not Found</h1>
          <p className="hero__subtitle">
            The page you're looking for doesn't exist.
          </p>
          <div className={styles.links}>
            <Link to="/" className="button button--primary button--lg">
              Go to Home Page
            </Link>
            <Link to="/docs/intro" className="button button--secondary button--lg">
              Read the Docs
            </Link>
          </div>
          <div className={styles.search}>
            <p>You can also try searching:</p>
            {/* Docusaurus search component can be integrated here, for simplicity, I'm just adding a placeholder */}
            <input type="text" placeholder="Search..." className={styles.searchInput} />
            <button className="button button--primary">Search</button>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default NotFound;
