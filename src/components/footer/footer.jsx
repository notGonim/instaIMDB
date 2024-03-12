import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>Copyright &copy; {new Date().getFullYear()} InstaMovie</p>
      </footer>
    </>
  );
};

export default Footer;
