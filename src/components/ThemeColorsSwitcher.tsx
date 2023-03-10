import { useEffect, useState } from "react";
import { COLORS } from '../constants'

function ThemeSwitcher() {

    const [mounted, setMounted] = useState<boolean>(false);
    const [color, setColor] = useState<string | undefined>(undefined);

    useEffect(() => {
        setMounted(true);
        setColor(document.documentElement.dataset.color || 'indigo');
    }, [])


    useEffect(() => {
        if (!mounted || color === undefined) return;

        document.documentElement.dataset.color = color;
        localStorage.color = color;
    }, [color]);


    const onToggle = (newColor: string) => () => {
        setColor(newColor);
    }

    if(!mounted) return null;

    return (
        <div className="mb-20 flex items-center justify-center space-x-4">
            {COLORS.map(({ id, name }) => (
                <span key={id} onClick={onToggle(id)} className={`theme-color ${name} ${(color == id) && 'active'}`}></span>
            ))}
        </div>
    )
}

export default ThemeSwitcher;