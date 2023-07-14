'use client'

import { NextPage } from 'next';
import useSWR from 'swr';
import React from 'react'
import ReactMarkdown from 'react-markdown'

const fetcher = (url: string) => fetch(url).then((res) => res.text());

const TermsOfUsePage: NextPage = () => {

  const { data, error } = useSWR('/privacy-policy.md', fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <main>
      <ReactMarkdown>{data}</ReactMarkdown>
    </main>
  );
}

export default TermsOfUsePage;
