import type { ButtonHTMLAttributes } from 'react';
import React from 'react';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    bgColor?: string;
    textColor?: string;
}
declare const BUTTON: React.FC<Props>;
export default BUTTON;
