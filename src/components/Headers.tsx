import {
    Avatar,
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem
} from '@nextui-org/react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {resetState} from '../redux/slices/userSlice';
import {URLs} from '../constants';
import {RootState} from '../redux/store';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector((state: RootState) => state.user.userData);

    const logoutHandler = () => {
        localStorage.removeItem('token');
        dispatch(resetState());
        navigate(URLs.SignIn);
    };

    return (
        <Navbar isBordered isBlurred={false}>
            <a href='/'>
                <NavbarBrand>
                    <p className='font-bold text-inherit cursor-pointer'>User Management</p>
                </NavbarBrand>
            </a>

            <NavbarContent as='div' justify='end'>
                <NavbarItem>
                    {
                        localStorage.getItem('token') && userData ? (
                            <div className="flex gap-2">
                                <Dropdown placement="bottom-end">
                                    <DropdownTrigger>
                                        <Avatar
                                            isBordered
                                            as="button"
                                            className="transition-transform"
                                            color="primary"
                                            name={userData.first_name + ' ' + userData.last_name}
                                            size="sm"
                                            src={userData.avatar}
                                        />
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                                        <DropdownItem key="profile" className="h-14 gap-2">
                                            <p className="font-semibold">Signed in as</p>
                                            <p className="font-semibold">{userData.email}</p>
                                        </DropdownItem>
                                        <DropdownItem key="logout" color="danger" onClick={logoutHandler}>
                                            Log Out
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        ) : (
                            <div className="flex gap-2">
                                <Button variant='solid' onClick={() => navigate(URLs.SignIn)}>
                                    Sign In
                                </Button>
                                <Button variant='ghost' onClick={() => navigate(URLs.SignUp)}>
                                    Sign Up
                                </Button>
                            </div>
                        )
                    }
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};

export default Header;
