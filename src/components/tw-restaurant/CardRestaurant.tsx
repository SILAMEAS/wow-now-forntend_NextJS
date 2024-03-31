"use client"
import React from 'react';
import {CircularProgress, IconButton} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useRouter} from "next/navigation";
import {IResRestaurant} from "@/redux/api/service/restaurant/typeRestaurant";
import {useAppSelector} from "@/redux/api/hook/hoots";
import {useAddRestaurantFavMutation} from "@/redux/api/service/restaurant/restaurantApi";
import {store} from "@/redux/store/store";

interface ICardRestaurant {
    data: IResRestaurant
}

const CardRestaurant = ({data}: ICardRestaurant) => {
    const navigate = useRouter();
    const {profile} = useAppSelector(state => state.authReducer);
    const isFavarite = store.getState().authReducer.profile?.favourites.find(i => i.id === data.id) !== undefined;
    const [favorite, setFavorite] = React.useState<boolean>(isFavarite);
    const [addFav] = useAddRestaurantFavMutation();
    const [loading, setLoading] = React.useState<boolean>(false);
    React.useMemo(() => {
        if (profile?.favourites.find(i => i.id === data.id)) {
            setFavorite(true);
        }
    }, [data])
    return (
        <div
            className={`h-[22rem] w-[20rem] rounded-xl bg-black/10 overflow-hidden relative ${data?.open ? 'cursor-pointer' : "cursor-not-allowed"} ${!data?.open && "opacity-50"} z-10`}>
            {/** header of card **/}
            <section onClick={() => data.id && navigate.replace("/user/restaurant/" + data.id)}>
                {/** image of restaurant **/}
                <img className={`object-center object-cover h-[40%] w-full`} src={data.images[0]}/>
                {/** status of restaurant **/}
                <p className={`${data?.open ? "bg-green-700" : "bg-red-700"}  py-[5px] px-[10px] absolute left-[10px] top-[10px] text-white text-xs font-semibold rounded-full`}>
                    {data?.open ? "OPEN" : "CLOSE"}
                </p>
            </section>
            {/** body of card **/}
            <section className={`flex justify-between p-[15px]`}>
                <div className={`space-y-2`}>
                    {/** title of restaurant **/}
                    <p className={`text-white text-xl font-semibold`}>
                        {data?.name}
                    </p>
                    {/** description of restaurant **/}
                    <p className={`text-gray-500 text-md`}>
                        {data?.description}
                    </p>
                    {/** description of restaurant **/}
                    <p className={`text-gray-500 text-md`}>
                        {data?.openingHours}
                    </p>
                </div>
                <IconButton disabled={loading || !data?.open} disableRipple disableFocusRipple disableTouchRipple
                            onClick={async () => {
                                setLoading(true);
                                await addFav({id: data.id}).unwrap().then(() => {
                                    setFavorite(!favorite);
                                    setLoading(false);
                                })

                            }}>
                    {
                        loading ? <CircularProgress size={20}/> :
                            favorite ? <FavoriteIcon sx={{color: "red"}}/> : <FavoriteBorderIcon/>
                    }
                </IconButton>
            </section>

        </div>
    );
};

export default CardRestaurant;
