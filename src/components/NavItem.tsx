interface NavItemProps {
  label: string;
}

function NavItem(props: NavItemProps): JSX.Element {
  return (
    <>
      <a href="#">{props.label}</a>
      <span> {props.label === "sign-out" ? "" : "|"} </span>
    </>
  );
}

export default NavItem;
