import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "The Wild Cabin",
  description: "Generated by create next app",
};

interface IProps {
  children: React.ReactNode;
}

export default function RootLayout(props: IProps) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
}
