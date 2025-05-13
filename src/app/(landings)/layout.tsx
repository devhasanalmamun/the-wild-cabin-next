import Link from "next/link";

interface IProps {
  children: React.ReactNode;
}

export default function AppLayout(props: IProps) {
  return (
    <>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about-us">About us</Link>
          </li>
        </ul>
      </nav>
      <main>{props.children}</main>

      <footer>Footer</footer>
    </>
  );
}
