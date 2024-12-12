import { hexToRgb } from '../HexToRgb/HexToRgb'
import { useEffect, useState } from "react";

export default function Converter() {
    const [form, setForm] = useState({ hex: '#34495e', rgb: 'rgb(52, 73, 94)' })

    const preventSubmit = (e) => { e.preventDefault() }

    const convert = (e) => {
        const { value } = e.target;

        if (value.length < 7) {
            return
        }
        
        const newRgb = hexToRgb(value);

        setForm({ hex: value, rgb: newRgb });
    }

    useEffect(() => {
        document.body.style.backgroundColor = form.rgb === "Ошибка!" ? 'rgb(226, 49, 49)' : form.rgb;
    }, [form.rgb]);
    
    return (
        <form className="main-form" onSubmit={preventSubmit}>
            <input className="hex-val" type="text" name="hex" onChange={convert} defaultValue={form.hex}/>
            <output className="rgb-val" name="rgb">{form.rgb}</output>
        </form>
    )
}