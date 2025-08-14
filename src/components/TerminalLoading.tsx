import { useEffect, useState } from "react";
import { terminalLines } from "../constants";

function TerminalLoading() {
    const [visibleCount, setVisibleCount] = useState(1);

    useEffect(() => {
        if (visibleCount < terminalLines.length) {
            const timer = setTimeout(() => {
                setVisibleCount((prev) => prev + 1);
            }, 750);

            return () => clearTimeout(timer);
        }
    }, [visibleCount])

    return (
        <div className="min-h-screen flex justify-center items-center px-4">
            <div className="mockup-code max-w-lg w-full text-sm md:text-xl">
                {
                    terminalLines.slice(0, visibleCount).map((line, idx) => {
                        const isFirst = idx === 0;
                        const isLast = idx === terminalLines.length - 1;
                        let className = "";

                        if (isLast) className = "text-success";
                        else if (!isFirst) className = "text-info";

                        return (<pre key={idx} data-prefix={isFirst ? "$" : ">"} className={className}><code>{line}</code></pre>)
                    })
                }
            </div>
        </div>
    );
}

export default TerminalLoading;