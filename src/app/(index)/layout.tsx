import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

type IndexLayoutProps = {
    children: React.ReactNode
}

const IndexLayout = ({ children }: IndexLayoutProps) => {
    return ( 
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-col flex-1 items-start justify-start">
                { children }
            </div>
            <Footer />
        </div>
     );
}
 
export default IndexLayout;