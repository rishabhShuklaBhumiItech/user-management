import {Button, Chip} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col justify-center items-center space-y-8 text-center mt-6'>
            <a href='https://github.com/RishabhShukla309' target='_blank'>
                <Chip size='lg'>Follow along on Github</Chip>
            </a>
            <h1 className='font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>Proof of Concept<br/>for
                User Management</h1>
            <p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>

            </p>
            <div className='space-x-4'>
                <Button size='lg' variant='solid' onPress={() => navigate('/sign-in')}>Login to your account</Button>
                <Button size='lg' variant='ghost' onPress={() => navigate('/sign-up')}>Create your account</Button>
            </div>
        </div>
    );
};

export default Index;