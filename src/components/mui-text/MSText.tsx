import {Typography, TypographyProps} from '@mui/material';
import Stack from '@mui/material/Stack';
import {TypographyPropsVariantOverrides} from '@mui/material/Typography/Typography';
import {Variant} from '@mui/material/styles/createTypography';
import {SxProps} from '@mui/system';
import {OverridableStringUnion} from '@mui/types';
import React, {ReactNode} from 'react';
import {SxConstant} from "@/Constant/SxConstant";
import {SxStyleConstant} from "@/Constant/SxStyleConstant";

export function $ok(o: any): boolean {
    return o !== undefined && typeof o !== 'undefined' && o !== null;
}

interface Type extends TypographyProps {
    disable?: boolean;
    iconStart?: ReactNode;
    iconEnd?: ReactNode;
    dataMulti?: string[];
    multiLine?: boolean;
    propsParentMulti?: SxProps;
    propsChildMulti?: SxProps;
    rows?: number;
    text: string | ReactNode;
    font?:
        | 'Tahoma'
        | 'poppins'
        | 'fredoka'
        | 'verdana-bold-italic'
        | 'verdana-bold'
        | 'verdana';
    fontWeight?: '100' | '200' | '300' | '400' | '500' | '600';

    myStyle?: SxProps;
    variant?: OverridableStringUnion<
        Variant | 'inherit',
        TypographyPropsVariantOverrides
    >;
    component?: React.ElementType;
    styleTextHaveIcon?: SxProps;
}

const NGText = ({
                    text,
                    font = 'poppins',
                    variant,
                    myStyle,
                    fontWeight,
                    component = 'span',
                    multiLine = false,
                    dataMulti,
                    propsParentMulti,
                    propsChildMulti,
                    iconStart,
                    iconEnd,
                    disable,
                    styleTextHaveIcon,
                    ...props
                }: Type) => {
    /** When have Icon **/
    const handleHaveIcon = () => {
        if (!$ok(iconEnd) && !$ok(iconStart)) {
            return (
                <Typography
                    component={component}
                    sx={{
                        color: SxConstant.color.blackMain,
                        ...myStyle,
                        opacity: !disable ? 1 : 0.5,
                        fontFamily: font,
                    }}
                    variant={variant}
                    fontWeight={fontWeight}
                    {...props}>
                    {text}
                </Typography>
            );
        } else {
            return (
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    width={'100%'}
                    justifyContent={'flex-start'}
                    sx={{...styleTextHaveIcon}}>
                    {$ok(iconStart) && iconStart}
                    <Typography
                        component={component}
                        sx={{
                            color: SxConstant.color.blackMain,
                            ...myStyle,
                            opacity: !disable ? 1 : 0.5,
                            fontFamily: font,
                        }}
                        variant={variant}
                        fontWeight={fontWeight}
                        {...props}>
                        {text}
                    </Typography>
                    {$ok(iconEnd) && iconEnd}
                </Stack>
            );
        }
    };
    return (
        <>
            {multiLine ? (
                <Typography
                    sx={{lineHeight: 1, ...propsParentMulti}}
                    component={component}>
                    {multiLine &&
                        dataMulti?.map(i => (
                            <Typography
                                key={i}
                                sx={{
                                    ...SxStyleConstant.textSmall,
                                    fontWeight: 'bold',
                                    opacity: !disable ? 1 : 0.5,
                                    ...propsChildMulti,
                                    fontFamily: font,
                                }}>
                                {i}
                            </Typography>
                        ))}
                </Typography>
            ) : (
                handleHaveIcon()
            )}
        </>
    );
};
export default NGText;
