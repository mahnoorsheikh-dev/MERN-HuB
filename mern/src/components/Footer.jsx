import footerLinks from "./footerLinks";

export default function Footer() {
  return (
    <>
      <FooterLinks />
      <footer className="bg-[#1E1E2F] text-[#E0E0E0] py-4 text-center border-t border-[#2f3030]">
        <p className="text-sm text-[#888888]">
          &copy; 2026 MERN Hub. All rights reserved.
        </p>
      </footer>
    </>
  );
}