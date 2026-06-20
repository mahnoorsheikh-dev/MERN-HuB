import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1E1E2F] text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-8xl font-bold text-[#00BFA6]">404</h1>
      <p className="text-2xl font-semibold">Page Not Found</p>
      <p className="text-[#888888]">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#00BFA6] text-black rounded-xl font-semibold hover:opacity-90 transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
}