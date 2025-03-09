const Nav_Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <div>{children}</div>{" "}
    </>
  );
};

export default Nav_Layout;
