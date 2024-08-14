import {Button, Input} from "@nextui-org/react";
import {useState} from "react";
import axiosInstance from "../../axios";
import {useNavigate} from "react-router-dom";

const Index = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

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
            const response = await axiosInstance.post("/login", {
                email,
                password,
            });

            if (response.status === 200) {
                // Save the token to localStorage
                localStorage.setItem("token", response.data.token);

                // Redirect to /user route
                navigate("/user");
            } else {
                // Handle unexpected status codes
                console.error("Unexpected response", response);
                setError("Unexpected response from the server.");
            }
        } catch (err) {
            console.error("Error creating user", err);
            setError("There was an error creating the user.");
        }
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign-in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <Input
                            isRequired
                            value={email}
                            type="email"
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
                        Sign In
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Index;
