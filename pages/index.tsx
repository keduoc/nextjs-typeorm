import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div className="cover">
        <img src="/logo.png" alt="" />
        <h1>卢潮的个人博客</h1>
        <p>我是一个爱学习的人</p>
        <p>
          <Link href="/posts">
            <a>点击查看文章列表</a>
          </Link>
        </p>
      </div>
      <style jsx>{`
        .cover {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .cover > img {
          width: 120px;
          height: 120px;
        }
      `}</style>
    </>
  );
};

export default Home;
