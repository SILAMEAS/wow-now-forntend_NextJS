import React, {PropsWithChildren} from 'react';

const LayoutSearchListRestaurant = ({children}:PropsWithChildren) => {
    return (
        <div>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    .top-100 {top: 100%}\n    .bottom-100 {bottom: 100%}\n    .max-h-select {\n        max-height: 300px;\n    }\n"
                }}
            />
            <div className="flex flex-col items-center">
                <div className="w-full md:w-1/2 flex flex-col items-center h-64">
                    <div className="w-full px-4">
                        <div className="flex flex-col items-center relative">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayoutSearchListRestaurant;


// {/** search restaurant **/}
// <LayoutSearchListRestaurant>
//     <Search/>
//     <List/>
// </LayoutSearchListRestaurant>
