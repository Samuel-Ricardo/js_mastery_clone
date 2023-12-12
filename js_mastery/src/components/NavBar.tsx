import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 bg-black-100 py-7 text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <link href="/">
          <Image src="/jsm-logo.svg" alt="JSM logo" width={55} height={40} />
        </link>
      </div>
    </nav>
  );
};
