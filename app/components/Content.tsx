import HeaderUser from "./HeaderUser";

const Content = ({ children }: any) => {
  return (
    <div className=" w-full flex flex-col">
      <HeaderUser />
      {children}
    </div>
  );
};

export default Content;
