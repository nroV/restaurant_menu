import AsideBar from "../components/AsideBar";

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: string;
}>) {

  return (
    <div className="my-20 grid grid-cols-12 max-w-[1300px] lg:mx-auto mx-6 border-2 
    shadow-sm shadow-orange-400">
      <AsideBar />
 
      {children}
    
    </div>
  );
}
