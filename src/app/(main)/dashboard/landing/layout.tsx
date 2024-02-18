import Nav from "@/components/layout/Nav";
import Side from "@/components/layout/Side";
import SideNav from "@/components/layout/SideNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="z-[10] sticky top-0">
        <Nav />
      </div>
      <div className="w-[200px]">
        <Side />
      </div>
      <div className="px-4 mt-5 sm:ml-[200px] sm:w-[100% - 200px] flex justify-center ">
        {children}
      </div>
    </main>
  );
}
