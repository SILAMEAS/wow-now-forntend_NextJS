import React from 'react';

const Facebook = () => {
    return <div className="absolute bottom-20 right-0 mb-4 mr-4 z-10">
        <div>
            <a
                title="Follow me on twitter"
                href="https://www.facebook.com/sila0106"
                target="_blank"
                className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
            >
                <img
                    className="object-cover object-center w-full h-full rounded-full"
                    src="https://s.yimg.com/fz/api/res/1.2/9Noy2LVWRFJlJzClvyY65w--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD05Njt3PTk2/https://tse1.mm.bing.net/th?q=Facebook+Logo+for+Business&pid=Api&mkt=en-US&cc=US&setlang=en&adlt=off&t=1"
                />
            </a>
        </div>
    </div>
};

export default Facebook;
