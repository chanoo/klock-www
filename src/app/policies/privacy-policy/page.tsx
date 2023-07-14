'use client'

import { NextPage } from 'next';
import useSWR from 'swr';
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styles from './page.module.css'

const fetcher = (url: string) => fetch(url).then((res) => res.text());

const TermsOfUsePage: NextPage = () => {
  const { data, error } = useSWR('/privacy-policy.md', fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <ReactMarkdown className={styles.reactMarkDown}>
          {data}
        </ReactMarkdown>
      </div>
    </main>
  );
}

export default TermsOfUsePage;
