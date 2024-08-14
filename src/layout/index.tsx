import Header from "../components/Headers.tsx";
import {Outlet} from "react-router-dom";

const Index = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Header/>
            <main className='flex-1 flex flex-col justify-center items-center'>
                <Outlet/>
            </main>
        </div>
    );
};

export default Index;