interface IProps {
  children: React.ReactNode;
}

export default function AdminDashboardLayout(props: IProps) {
  return <main>{props.children}</main>;
}
