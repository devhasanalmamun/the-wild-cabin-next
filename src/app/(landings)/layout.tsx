interface IProps {
  children: React.ReactNode;
}

export default function AppLayout(props: IProps) {
  return <main>{props.children}</main>;
}
