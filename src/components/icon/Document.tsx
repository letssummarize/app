import { SvgIconProps } from "./types/icon";

function Document({ ...props }: SvgIconProps) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M8.999 4.5V1h-2.5a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5H12.5a1.5 1.5 0 0 0 1.5-1.5V6h-3.501a1.5 1.5 0 0 1-1.5-1.5m1 0V1.25L13.749 5h-3.25a.5.5 0 0 1-.5-.5M3 4a1 1 0 0 1 1-1v8.5A2.5 2.5 0 0 0 6.5 14H12a1 1 0 0 1-1 1H6.556A3.556 3.556 0 0 1 3 11.444z" /></svg>
    )
}


export default Document;