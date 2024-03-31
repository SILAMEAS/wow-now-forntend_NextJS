import React from "react";

export const useLinearBuffer = (delay: number, isLoading: boolean) => {
    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);

    const progressRef = React.useRef(() => {
    });
    React.useEffect(() => {
        progressRef.current = () => {
            if (isLoading) {
                if (progress > 100) {
                    setProgress(0);
                    setBuffer(10);
                } else {
                    const diff = Math.random() * 10;
                    const diff2 = Math.random() * 10;
                    setProgress(progress + diff);
                    setBuffer(progress + diff + diff2);
                }
            } else {
                setProgress(100);
                setBuffer(100);
            }

        };
    });

    React.useEffect(() => {
        const timer = setInterval(() => {
            progressRef.current();
        }, delay);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return {progress, buffer}
}
