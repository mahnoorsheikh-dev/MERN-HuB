export default function PageLoader() {
  return (
    <div className="min-h-screen bg-[#1E1E2F] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#2f3030] border-t-[#00BFA6] rounded-full animate-spin" />
        <p className="text-[#888888] text-sm">Loading...</p>
      </div>
    </div>
  );
}