import Navbar from "./_components/navbar";

const SettingsLayout = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-950 to-black h-full w-full flex flex-col gap-y-10 items-center justify-center">
            <Navbar />
            {children}
        </div>
    );
}

export default SettingsLayout;