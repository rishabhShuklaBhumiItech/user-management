import {Button, Input} from "@nextui-org/react";
import React, {useState} from "react";
import axiosInstance from "../../axios";
import {useDispatch} from "react-redux";
import {setId} from "../../redux/slices/userSlice";
import {useNavigate} from "react-router-dom";
import {AxiosError} from "axios";

const Index = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validateEmail = (email: string): boolean => {
        return email.trim() !== "";
    };

    const validatePassword = (password: string): boolean => {
        return password.trim() !== "";
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null);

        if (!validateEmail(email)) {
            setError("Please enter an email address.");
            return;
        }

        if (!validatePassword(password)) {
            setError("Please enter a password.");
            return;
        }

        try {
            const response = await axiosInstance.post("/register", {
                email,
                password,
            });

            if (response.status === 200) {
                localStorage.setItem("token", response.data.token);

                dispatch(setId(response.data.id));

                navigate(`/user/${response.data.id}`);
            } else {
                setError("Unexpected response from the server.");
            }
        } catch (err: unknown) {
            const axiosError = err as AxiosError<{ error: string }>;
            console.error("Error creating user", axiosError);

            setError(
                axiosError.response?.data?.error || "An error occurred during registration."
            );
        }
    };


    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Create your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <Input
                            isRequired
                            value={email}
                            type="text"
                            label="Email"
                            className="max-w-xs"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <Input
                            isRequired
                            value={password}
                            type="password"
                            label="Password"
                            className="max-w-xs"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {error && (
                        <div className="text-red-600 text-sm">
                            {error}
                        </div>
                    )}

                    <Button variant='solid' className="w-full" type="submit">
                        Sign up
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Index;
