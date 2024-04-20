import {SxConstant} from "@/Constant/SxConstant";

const _webkitBoxShadow = 'inset 0 0 6px rgba(0,0,0,0.00)';
const _outline = '1px solid slategrey';

export function pixelToRem(pixel: number) {
    const rem = pixel / 16;
    return rem + 'rem';
}

export const SxStyleConstant = {
    line: {
        lineIdentityPage: {
            width: '100%',
            opacity: 0.5,
            borderBottomWidth: 1.5,
            border: '1px solid #E9E9E9',
        },
    },
    box: {
        statusAndDateExpiration: {
            width: 'fit-content',
            height: '36px',
            borderRadius: '6px',
            padding: '8px 12px 8px 12px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
        },
        advancedSignature: {
            width: ['100%', '100%', '48%'],
            borderRadius: 1.5,
            display: 'flex',
            bgcolor: 'white',
            alignItems: 'center',
            justifyContent: SxConstant.justifyContent.spaceBetween,
            cursor: 'pointer',
        },
        gridCard: {
            boxShadow: `-1px 0px 1px 10px ${SxConstant.color.black + '02'} inset`,
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '140px',
            cursor: 'pointer',
            gap: '8px',
        },
        cardIdentity: {
            borderRadius: '8px',
            py: '16px',
            px: '20px',
            gap: '20px',
            bgcolor: 'white',
            boxShadow: '0 1px 10px #00000010',
            cursor: 'pointer',
        },
    },
    timeLineCircle: {
        mx: 2,
        boxShadow: 0,
        border: 0,
        height: pixelToRem(SxConstant.numberConstants._40),
        width: pixelToRem(SxConstant.numberConstants._40),
    },
    timeLineIcon: {
        ml: pixelToRem(SxConstant.numberConstants._6),
        mt: pixelToRem(SxConstant.numberConstants._5),
    },
    inputStyleLogin: {
        '& input::placeholder': {
            fontSize: pixelToRem(SxConstant.numberConstants._12),
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: SxConstant.color._E9E9E9,
                borderWidth: '0.1px',
                // background: 'blue',
                // height: 40,
                background: 'inherit',
            },
            '&:hover fieldset': {
                borderColor: SxConstant.color._E9E9E9,
            },
            '&.Mui-focused fieldset': {
                borderColor: SxConstant.color.primaryMain,
                borderWidth: '0.2px',
            },
        },
    },
    inputSelectStyleLogin: {
        '& input::placeholder': {
            fontSize: pixelToRem(SxConstant.numberConstants._12),
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: SxConstant.color._E9E9E9,
                borderWidth: '0.1px',
                // background: 'blue',
                height: 60,
                background: 'inherit',
            },
            '&:hover fieldset': {
                borderColor: SxConstant.color._E9E9E9,
            },
            '&.Mui-focused fieldset': {
                borderColor: SxConstant.color.primaryMain,
                borderWidth: '0.2px',
            },
        },
    },
    inputField: {
        '& input::placeholder': {
            fontSize: pixelToRem(SxConstant.numberConstants._12),
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: SxConstant.color._E9E9E9,
                borderWidth: '0.1px',
                // background: 'blue',
                height: 40,
                background: 'inherit',
            },
            '&:hover fieldset': {
                borderColor: SxConstant.color._E9E9E9,
            },
            '&.Mui-focused fieldset': {
                borderColor: SxConstant.color.primaryMain,
                borderWidth: '0.2px',
            },
        },
    },
    root: {
        fontFamily: 'consolas, sans-serif',
        textAlign: 'center',
        position: 'relative',
        width: '50%',
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 30,
        bottom: 0,
        left: 30,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 96,
        color: SxConstant.color.white,
        // background: "#FFFFFF33",
        textAlign: 'center',
        // This is important to preserve the chart interactivity
        pointerEvents: 'none',
    },
    totalLabel: {
        fontSize: 24,
    },
    main: {
        display: 'flex',
        width: '100vw',
        height: '100%',
        bgColor: '#f7f7f7',
    },
    left: {
        height: '93vh',
        position: 'static',
        top: 0,
        overflowY: 'auto',
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
            width: '0.2em',
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: _webkitBoxShadow,
            webkitBoxShadow: _webkitBoxShadow,
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.3)',
            borderRadius: 10,
        },
    },
    timeLine: {
        height: '50vh',
        position: 'static',
        top: 0,
        overflowY: 'auto',
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
            width: '0em',
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: _webkitBoxShadow,
            webkitBoxShadow: _webkitBoxShadow,
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: _outline,
        },
    },
    right: {
        height: '90vh',
        position: 'static',
        top: 0,
    },
    textBold: {
        fontSize: '15px',
        fontWeight: 'bolder',
    },
    textSmall: {
        color: 'grey',
        fontWeight: 'semi',
        fontSize: '16px',
    },
    layoutDashboard: {
        height: '100%',
        width: '100vw',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        bgColor: 'bg.main',
    },
    locate: {
        center: {alignItems: 'center', width: '100%'},
        left: {alignItems: 'flex-start', width: '100%'},
        right: {alignItems: 'flex-end', width: '100%'},
    },
    button: {
        disableActive: {
            '&:disabled': {
                backgroundColor: SxConstant.color.secondaryMain,
                color: 'grey',
                borderColor: SxConstant.color.blackMain,
            },
            cursor: 'pointer',
            border: 1,

            borderRadius: '5px',
            color: 'black',
            px: '20px',
            height: '35px',
            fontSize: '14px',
            pt: '5px',
        },
        disable: {
            '&:disabled': {
                backgroundColor: SxConstant.color.secondaryMain,
                color: 'grey',
                borderColor: SxConstant.color.blackMain,
            },
            cursor: 'not-allowed',
            border: 1,

            borderRadius: '5px',
            color: 'grey',
            px: '20px',
            height: '35px',
            fontSize: '14px',
            pt: '5px',
        },
        enable: {
            backgroundColor: SxConstant.color.primaryMain,
            color: SxConstant.color.white,
            '&:hover': {
                backgroundColor: 'primary.dark',
            },
            cursor: 'pointer',
            border: 1,

            borderRadius: '5px',
            px: '20px',
            height: '35px',
            fontSize: '14px',
            pt: '5px',
        },
    },
    scrollDashboardEndUser: {
        width: '100%',
        mb: 2,
        overflowY: 'scroll',
        height: '50vh',
        '&::-webkit-scrollbar': {
            width: '0.1rem',
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: _webkitBoxShadow,
            webkitBoxShadow: _webkitBoxShadow,
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'grey',
            outline: _outline,
        },
    },
    scrollNormal: {
        '&::-webkit-scrollbar': {
            width: '0.01em',
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: _webkitBoxShadow,
            webkitBoxShadow: _webkitBoxShadow,
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'grey',
            outline: _outline,
        },
    },
    scrollNoWidth: {
        '&::-webkit-scrollbar': {
            width: '0.00em',
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: _webkitBoxShadow,
            webkitBoxShadow: _webkitBoxShadow,
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'grey',
            outline: _outline,
        },
    },
    DataGrid: {
        /* style of row*/

        '.styleRow': {
            py: 2,
        },
        /* hide outline when focus row in table */
        '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
            bgColor: 'green',
            outline: 'none !important',
        },
    },
    muiInputOtpTelephone: {
        '& input::placeholder': {
            color: 'inherit',
        },
        '& .MuiInputBase-input.MuiOutlinedInput-input': {
            height: '55px',
            width: '60px',
            p: 0,
            // borderColor: 'red',
        },
        '& .MuiOutlinedInput-notchedOutline ': {
            borderColor: SxConstant.color.primaryMain, // set your desired color here
            borderWidth: '0.2px',
            '&:focus': {
                borderColor: 'red',
            },
        },
    },
    inputStyleField: {
        cursor: 'pointer',
        minWidth: '280px',
        borderRadius: '6px',
        p: '7.5px',
        background: 'white',
        border: 'solid 1px #E9E9E9',
    },
    muiInputOtp: {
        '& .MuiInputBase-input.MuiOutlinedInput-input': {
            height: '55px',
            width: '40px',
            p: 0,
            // borderColor: 'red',
        },
        '& .MuiOutlinedInput-notchedOutline ': {
            borderColor: SxConstant.color.primaryMain, // set your desired color here
            borderWidth: '0.2px',
            '&:focus': {
                borderColor: 'red',
            },
        },
    },
};

export enum M_size {
    h1 = '24px',
    h2 = '20px',
    h3 = '14px',
    h4 = '10px',
    h5 = '16px',
    h01 = '34px',
    h02 = '25px',
}

// theme, we will move to theme configuration in the future

export const colorPrimary = SxConstant.color._D6056A;
export const colorPrimaryHover = SxConstant.color._D60599;
export const colorDisable = SxConstant.color._6D676A;

export const colorWhite = SxConstant.color.white;
export const colorBlack = SxConstant.color.black;
export const colorSuccess = SxConstant.color._1C8752;
