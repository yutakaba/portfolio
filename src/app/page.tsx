import Image from "next/image";
import { styled } from "@linaria/react";

// ---------- Linariaスタイル定義 ----------
const Page = styled.div`
  --gray-rgb: 0, 0, 0;
  --gray-alpha-200: rgba(var(--gray-rgb), 0.08);
  --gray-alpha-100: rgba(var(--gray-rgb), 0.05);
  --button-primary-hover: #383838;
  --button-secondary-hover: #f2f2f2;

  display: grid;
  grid-template-rows: 20px 1fr 20px;
  align-items: center;
  justify-items: center;
  min-height: 100svh;
  padding: 80px;
  gap: 64px;
  font-family: var(--font-geist-sans);
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 32px;
  grid-row-start: 2;

  ol {
    font-family: var(--font-geist-mono);
    padding-left: 0;
    margin: 0;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.01em;
    list-style-position: inside;
  }

  li:not(:last-of-type) {
    margin-bottom: 8px;
  }

  code {
    font-family: inherit;
    background: var(--gray-alpha-100);
    padding: 2px 4px;
    border-radius: 4px;
    font-weight: 600;
  }
`;

const CTAs = styled.div`
  display: flex;
  gap: 16px;

  a {
    appearance: none;
    border-radius: 128px;
    height: 48px;
    padding: 0 20px;
    border: 1px solid transparent;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;

    &.primary {
      background: var(--foreground);
      color: var(--background);
      gap: 8px;
    }

    &.secondary {
      border-color: var(--gray-alpha-200);
      min-width: 158px;
    }
  }
`;

const Footer = styled.footer`
  grid-row-start: 3;
  display: flex;
  gap: 24px;

  a {
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 4px;
    }
  }

  img {
    flex-shrink: 0;
  }
`;

// ---------- JSX部分 ----------
export default function Home() {
  return (
    <Page>
      <Main>
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <CTAs>
          <a
            className="primary"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/vercel.svg" alt="Vercel" width={20} height={20} />
            Deploy now
          </a>
          <a
            className="secondary"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </CTAs>
      </Main>
      <Footer>
        <a href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer">
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </a>
        <a href="https://vercel.com/templates" target="_blank" rel="noopener noreferrer">
          <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </a>
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </Footer>
    </Page>
  );
}