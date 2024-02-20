import Navbar from "@/components/navbar/Navbar";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                {children}
            </div>
        </>
    );
}