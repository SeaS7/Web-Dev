function consoleStyler(color, background, fontSize, txt) {
    const message = `%c${txt}`;
    let style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;

    console.log(message, style);
}

// Example usage:
consoleStyler('white', 'blue', '20px', 'Styled Console Message');
