import NavBar from "@cineplex/components/NavBar";
import "flowbite";

interface props {
  children: React.ReactNode;
}

function HomeLayout(props: props) {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
}

export default HomeLayout;
