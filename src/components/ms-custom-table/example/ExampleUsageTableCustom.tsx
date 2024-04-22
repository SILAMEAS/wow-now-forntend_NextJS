import React from 'react';
import {useTableCustom} from "@/components/ms-custom-table/custom/hook/useTableCustom";
import {headCellsExample, TestData} from "@/components/ms-custom-table/headCell/headCellsExample";
import {EnumTableFooterType} from "@/components/ms-custom-table/type";
import {TableCustom} from "@/components/ms-custom-table/custom/table/TableCustom";
import {FigmaBody} from "@/Constant/figma/FigmaBody";
import MSText from "@/components/mui-text/MSText";
import {useGetFoodsByRestaurantIdQuery} from "@/redux/api/service/food/foodApi";
import {useAppSelector} from "@/redux/api/hook/hoots";
import {IResListFoods} from "@/redux/api/service/food/typeFood";

interface IFoodTableCustom<O> {
    handleViewDetailPage: (dataProps: O) => void
}

const ExampleUsageTableCustom = <O extends TestData>({handleViewDetailPage}: IFoodTableCustom<O>) => {
    const {
        setVisibleRows,
        visibleRows,
        selected,
        setSelected,
        handleSelectAllClick,
        filter,
        setFilter,
        tableFooterType,
    } = useTableCustom<O>(EnumTableFooterType.infiniteScroll);
    const {restaurant} = useAppSelector(state => state.authReducer)
    const {
        currentData,
        isFetching,
        isError,
        error,
        isLoading
    } = useGetFoodsByRestaurantIdQuery({id: restaurant?.id ?? 0, ...filter}, {skip: !restaurant?.id});
    const handleSetVisibleRows = async (propData?: typeof currentData) => {
        if (propData) {
            const {contents, page} = propData;
            const newMap: Array<O> = contents.map((item, index) => ({
                id: item.id,
                name: item.name,
                price: item.price,
                images: item.images,
                categoryId: item.categoryId,
                available: item.available,
                description: item.description,
                restaurantId:item.restaurantId,
                vegetarian:item.vegetarian,
                seasonal:item.seasonal,
                action: 0,
            } as O));

            if (page <= 1) {
                // reset select
                setSelected([]);
                // don't append data
                setVisibleRows(newMap);
                return;
            }
            /** if newMap is Array and visibleRows also Array **/
            tableFooterType === EnumTableFooterType.infiniteScroll
                ? setVisibleRows(pre => [...pre, ...newMap])
                : setVisibleRows(newMap);
        }
    };
    // const router = useRouter();
    // const handleViewDetailPage = (dataProps: O) => {
    //     router.replace('/owner')
    // }
    React.useEffect(() => {
        if (currentData) {
            handleSetVisibleRows(currentData).then(() => {
            });
        }
    }, [currentData]);
    return (
        <TableCustom<IResListFoods, O>
            currentData={currentData}
            setFilter={setFilter}
            filter={filter}
            actionReq={{error, isLoading, isError, isFetching}}
            tableFooterType={tableFooterType}
            visibleRows={visibleRows}
            headCells={headCellsExample}
            selected={selected}
            handleSelectAllClick={handleSelectAllClick}
            handleViewDetailPage={handleViewDetailPage}
            hasNext={currentData?.hasNext ?? false}
            emptyData={
                <MSText
                    myStyle={{...FigmaBody.BodySmallBold}}
                    text={'no-result'}
                />
            }
        />
    );
};

export default ExampleUsageTableCustom;
// if you want to render example please copy <ExampleUsageTableCustom> paste to page render faceToFace page
