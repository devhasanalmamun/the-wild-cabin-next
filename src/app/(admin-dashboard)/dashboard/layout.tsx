interface IProps {
  children: React.ReactNode;
}

export default function AdminLayout(props: IProps) {
  return <main>{props.children}</main>;
}
