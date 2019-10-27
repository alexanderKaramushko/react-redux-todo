import { ReactNode } from "react";

export interface Props {
    condition: boolean | undefined;
    duration: number;
    animName: string;
    children: ReactNode;
    appear?: boolean;
};
