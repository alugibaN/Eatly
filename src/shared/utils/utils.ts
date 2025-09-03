
type TIconTypes = "secondary" | "primary" | "error" | "success" | "disabled" | "null";
export type TIconProps = { type?: TIconTypes; className?: string; onClick?: ()=> void };

export const getIconColor = (type: TIconTypes) => {
 return type === "primary" 
        ? "#6C5FBC"
        : type === "secondary"
        ? "#323142"
        : type ===  "error"
        ? "#E52B1A"
        : type === "success"
        ? "#74FDA7"
        : type === "disabled" 
        ? "#E3E3E6"
        : "#E3E3E6"
}