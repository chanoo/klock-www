import Image from 'next/image'
import styles from './page.module.css'

import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.headbg}>

      </div>
      <header className={styles.header}>
        <Image
          src="/logo.svg"
          alt="Logo"
          className={styles.logo}
          width={172}
          height={32}
          priority
        />
        <ul className={styles.menu}>
          <li className={styles.li}><a href="/policies/terms-of-use.html">서비스 이용약관</a></li>
          <li className={styles.li}><a href="/policies/privacy-policy.html">개인정보 처리방침</a></li>
        </ul>
      </header>
      <div className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.copytext}>
            <Image
              src="/img_characters.svg"
              alt="래킥터"
              className={styles.logo}
              width={152}
              height={106}
              priority
            />
            <h1 className={styles.h1}>평생 지켜질 공부습관<br/>평생 친구와 함께</h1>
            <div>
            <div className={styles.title}>
              <Image
                src="/ic_timer.svg"
                alt="타이머"
                className={styles.titleIcon}
                width={30}
                height={30}
                priority
              />
              집중 타이머</div>
            <div className={styles.comment}>집중력 향상! 개인 맞춤형 집중시간<br/>타이머를 활용하세요.</div>
            <div className={styles.title}>
              <Image
                src="/ic_ai.svg"
                alt="Ai 선생님"
                className={styles.titleIcon}
                width={30}
                height={30}
                priority
              />
              AI 선생님</div>
            <div className={styles.comment}>스마트한 공부! AI 선생님이<br/>학습을 지원합니다.</div>
            <div className={styles.title}>
              <Image
                src="/ic_screentime.svg"
                alt="스크린타임"
                className={styles.titleIcon}
                width={30}
                height={30}
                priority
              />
              스크린 타임</div>
            <div className={styles.comment}>스크린타임 기능으로 공부하는 동안<br/>집중할 수 있도록 도와드립니다.</div>
          </div>
          </div>
          <Image
              src="/img_mockup.svg"
              alt="아이폰"
              className={styles.imgContainer}
              width={450}
              height={926}
              priority
            />

        </div>
      </div>
    </main>
  );
}

export default HomePage;