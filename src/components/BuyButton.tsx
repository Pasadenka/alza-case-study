import { useState } from 'react';
import './BuyButton.css';

interface IMenuItem {
    className: string;
    title: string;
}

const menu: IMenuItem[] = [
    {className: 'fo', title: 'Koupit zrychleně'},
    {className: 'fvrt', title: 'Přidat do seznamu'},
    {className: 'cmpr', title: 'Porovnat'},
    {className: 'watchdog', title: 'Hlídat'},
];

const BuyButton = () => {
    const [menuSwitch, setMenuSwitch] = useState(false);

    const menuClass = {
        toString() {
            return `menu ${!menuSwitch && 'hidden'}`;
        }
    }

    return (
        <div className='buy-button'>
            <div className='button-group'>
                <button>Koupit</button>
                <button onClick={() => setMenuSwitch(!menuSwitch)}>▼</button>
            </div>
            <div className={`${menuClass}`} onMouseLeave={() => setMenuSwitch(false)}>
                {menu.map((item: IMenuItem, index: number) => 
                    <a 
                        onClick={(e) => {
                            e.preventDefault();
                            setMenuSwitch(false);
                            return false;
                        }}
                        className={item.className}
                        key={index}
                        href='null'
                    >
                        {item.title}
                    </a>
                )}
            </div>
        </div>
    );
}

export default BuyButton;
