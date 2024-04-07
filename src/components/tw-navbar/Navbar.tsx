"use client"
import React from 'react';
import {Avatar, Badge, IconButton, Stack, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {pink} from "@mui/material/colors";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./index.css"
import {useRouter} from "next/navigation";
import {Url} from "@/Constant/auth/ConstantAuthConfig";
import {$logout} from "@/redux/api/hook/useLogout";
import DialogCustom from "@/components/ms-dailog/DialogCustom";
import {useTriggerOpen} from "@/components/ms-dailog/useDialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import {BlockFoods} from "@/app/user/restaurant/components/BlockFoods";

const Navbar = () => {
    const router = useRouter();
    const triggerOpen = useTriggerOpen();
    const [search, setSearch] = React.useState('xx');
    return (
        <div className={`px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between `}>
            {/** logo **/}
            <div className={`flex items-center space-x-4 `} onClick={() => router.push(Url.home)}>
                <div className={`lg:mr-10 cursor-pointer flex items-center space-x-4`}>
                    <li className={`logo font-semibold text-gray-300 text-2xl`}>Sila food</li>
                </div>
            </div>
            {/** left side navbar  */}
            <div className={`flex items-center space-x-2 lg:space-x-10 `}>
                <div>
                    <IconButton onClick={triggerOpen.open}>
                        <SearchIcon sx={{fontSize: '1.5rem'}}/>
                    </IconButton>
                </div>

                <div onClick={$logout}>
                    <Avatar sx={{bgcolor: "white", color: pink.A400, fontWeight: 600}}>MS</Avatar>
                </div>
                <div>
                    <IconButton>
                        <Badge badgeContent={2} color="error">
                            <ShoppingCartOutlinedIcon sx={{fontSize: '1.5rem'}}/>
                        </Badge>
                    </IconButton>
                </div>
            </div>
            <DialogCustom
                fullScreen
                open={triggerOpen.isOpen}
                titleDialog={<AppBar sx={{position: 'relative'}}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={triggerOpen.close}
                            aria-label="close"
                        >
                            <CloseIcon/>
                        </IconButton>
                        <Typography sx={{ml: 2, flex: 1}} variant="h6" component="div">
                            Search
                        </Typography>
                    </Toolbar>
                </AppBar>}
                contentDialog={
                    <Stack>
                        <TextField placeholder={'search food ...'} value={search}
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                       setSearch(event.target.value);
                                   }}/>
                        <div className={`px-5 lg:px-10`}>
                            <BlockFoods search={search}/>

                        </div>
                    </Stack>

                }
                handleClose={triggerOpen.close}/>
        </div>
    );
};

export default Navbar;
