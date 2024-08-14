import { useEffect, useState } from 'react';
import { Avatar, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../axios';
import { RootState } from '../../redux/store';
import { setUserData } from "../../redux/slices/userSlice";
import { AxiosError } from 'axios';

const Index = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const userData = useSelector((state: RootState) => state.user.userData);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            const fetchUserData = async () => {
                try {
                    const response = await axiosInstance.get(`/users/${id}`);
                    const user = response.data.data;
                    dispatch(setUserData(user));
                    setError(null);
                } catch (err: unknown) {
                    const axiosError = err as AxiosError;
                    if (axiosError.response?.status === 404) {
                        setError('User not found with this ID');
                    } else {
                        setError('Error fetching user data');
                    }
                }
            };

            fetchUserData();
        }
    }, [id, dispatch]);

    if (error) return <div>{error}</div>;
    if (!userData) return <div>Loading...</div>;

    return (
        <div className="flex p-6">
            <Card className="max-w-[340px]">
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        <Avatar isBordered radius="full" size="md" src={userData.avatar}/>
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">{`${userData.first_name} ${userData.last_name}`}</h4>
                            <h5 className="text-small tracking-tight text-default-400">{userData.email}</h5>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400">
                    <p>
                        Frontend developer and UI/UX enthusiast.
                    </p>
                    <span className="pt-2">
                        #FrontendWithZoey
                        <span className="py-2" aria-label="computer" role="img">
                            💻
                        </span>
                    </span>
                </CardBody>
                <CardFooter className="gap-3">
                    <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">4</p>
                        <p className=" text-default-400 text-small">Following</p>
                    </div>
                    <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">97.1K</p>
                        <p className="text-default-400 text-small">Followers</p>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Index;
