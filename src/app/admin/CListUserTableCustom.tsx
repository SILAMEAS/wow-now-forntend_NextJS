import React from 'react';
import {useTableCustom} from "@/components/ms-custom-table/custom/hook/useTableCustom";
import {EnumTableFooterType} from "@/components/ms-custom-table/type";
import {TableCustom} from "@/components/ms-custom-table/custom/table/TableCustom";
import {FigmaBody} from "@/Constant/figma/FigmaBody";
import MSText from "@/components/mui-text/MSText";
import {useDeleteFoodMutation, useGetFoodsByRestaurantIdQuery} from "@/redux/api/service/food/foodApi";
import {useAppSelector} from "@/redux/api/hook/hoots";
import {IResFood, IResListFoods} from "@/redux/api/service/food/typeFood";
import {Button, IconButton, TableCellProps, Tooltip} from "@mui/material";
import {IUseTriggerOpen} from "@/components/ms-dailog/useDialog";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export interface TestData extends IResFood {
    action: number
}
interface IFoodTableCustom<O> {
    triggerOpen:IUseTriggerOpen,
    setIsCreated:React.Dispatch<React.SetStateAction<boolean>>,
    setFoodSelected: React.Dispatch<React.SetStateAction<IResFood | null>>
}

const CListUserTableCustom = <O extends TestData>({triggerOpen,setIsCreated,setFoodSelected}: IFoodTableCustom<O>) => {
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
    const [deleteFood,resultDeleteFood]=useDeleteFoodMutation();
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
    // const handleViewDetailPage = (dataProps: O) => {
    //     triggerOpen.open();
    //     setIsCreated(false);
    //     setFoodSelected(dataProps);
    // }
    React.useEffect(() => {
        if (currentData) {
            handleSetVisibleRows(currentData).then(() => {
            });
        }
    }, [currentData]);
    const defaultTableCellProps: TableCellProps = {
        width: '210px',
        align: 'left',
        padding: 'none',
    }
    return (
        <TableCustom<IResListFoods, O>
            currentData={currentData}
            setFilter={setFilter}
            filter={filter}
            actionReq={{error, isLoading, isError, isFetching}}
            tableFooterType={tableFooterType}
            visibleRows={visibleRows}
            headCells={[
                {
                    id: 'id',
                    disableSort: false,
                    hidden: true,
                    label: 'id',
                    tableCellProps: {
                        ...defaultTableCellProps
                    },
                    tableSortLabelProps: {},
                },
                {
                    id: 'images',
                    disableSort: false,
                    label: 'Images',
                    tableCellProps: {
                        ...defaultTableCellProps
                    },
                    tableSortLabelProps: {},
                    render: data => (
                        <Button>
                            <img src={data.images[0]} className={`w-[60px] h-[60px] rounded-lg`}
                                 alt={"image/food"}/>
                        </Button>
                    ),
                },
                {
                    id: 'name',
                    disableSort: false,
                    label: 'Name',
                    tableCellProps: {
                        ...defaultTableCellProps
                    },
                    tableSortLabelProps: {},
                    render: data => (
                        <Button onClick={() => {
                        }} sx={{bgcolor: 'red', color: 'white'}}>
                            {data.name}
                        </Button>
                    ),
                },
                {
                    id: 'price',
                    disableSort: false,
                    label: 'Price',
                    tableCellProps: {
                        width: '210px',
                        align: 'center',
                        padding: 'none',
                    },
                    tableSortLabelProps: {},
                    render: data => (
                        <MSText text={data.price + " $"} sx={{color: 'white'}}/>
                    ),
                },
                {
                    id: 'action',
                    disableSort: false,
                    label: 'Action',
                    tableCellProps: {
                        width: 'auto',
                        align: 'right',
                        padding: 'none',
                        sx:{
                            position:'sticky',
                            zIndex:2
                        }
                    },
                    tableSortLabelProps: {},
                    render: data => (
                        <div className={`inline pr-2`}>
                            <Tooltip title={undefined} onClick={async ()=>{
                                triggerOpen.open();
                                setIsCreated(false);
                                setFoodSelected(data);
                            }}>
                                <IconButton>
                                    <ModeEditOutlineOutlinedIcon sx={{color:"primary.main"}}/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={undefined} onClick={async ()=>{
                                await deleteFood({id:data.id}).then(r=>console.error(r));
                            }}>
                                <IconButton>
                                    <DeleteOutlinedIcon sx={{color:"red"}}/>
                                </IconButton>
                            </Tooltip>
                        </div>
                    ),
                },
            ]}
            selected={selected}
            handleSelectAllClick={handleSelectAllClick}
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

export default CListUserTableCustom;
// if you want to render example please copy <ExampleUsageTableCustom> paste to page render faceToFace page
