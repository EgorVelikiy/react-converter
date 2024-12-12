export function hexToRgb(hex) {
    if (hex.slice(0, 1) !== '#' ) {
        console.log('Error')
        return 'Error'
    }

    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if (result) {
        const r = parseInt(result[1], 16)
        const g = parseInt(result[2], 16)
        const b = parseInt(result[3], 16)
        return `rgb(${r}, ${g}, ${b})`
    }
    
    return 'Ошибка!';
}