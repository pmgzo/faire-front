import Image from "next/image";
import Dadj from "../../../public/dadj.svg";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
    return (
        <div>
            <div className="mt-14 ml-16 flex flex-col">
                {/* TODO: to change alt */}
                <div className="flex flex-row"> <Image src={Dadj} width={100} alt="follow us on twitter" /> </div>
                            
            {children}

            </div>
        
        </div>)
}