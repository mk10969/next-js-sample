import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function NextJsStars() {
  const { data, error } = useSWR('https://api.github.com/repos/vercel/next.js', fetcher);

  // ブラウザのコンソールログに出力される。つまりクライアント側で処理される
  // eslint-disable-next-line no-console
  console.log(data);
  // eslint-disable-next-line no-console
  console.log(error);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <p>Next.js has {data.stargazers_count} ⭐️</p>
    </div>
  );
}
