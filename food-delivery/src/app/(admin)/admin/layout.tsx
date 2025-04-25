import { Navbar } from "./components/Navbar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center bg-[#232323]">
      <div className="w-[1440px] h-screen bg-[#f4f4f5] flex">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
