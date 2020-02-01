const mix = function mix(color_1, color_2 = [0, 0, 0], width = 0.5) {
    let f = color_1.map((x) => {
        let value = width * x;
        if (value < 0)
            return 0;
        else if (value > 255)
            return 255;
        else
            return value;
    }, []);

    let g = color_2.map((x) => {
        let value = (1 - width) * x;
        if (value < 0)
            return 0;
        else if (value > 255)
            return 255;
        else
            return value;
    });


    let h = f.map((value, key) => {
        return Math.round(value + g[key]);
    });
    return h;
};

const shade = function shade(color, weight = 0.5) {
    let t = color;

    let u = mix(t, [0, 0, 0], weight);

    return u;
};


const tint = function tine(color, wieght) {
    let t = color;

    let u = mix(t, [255, 255, 255], wieght);

    return u;
};

const tone = function tone(color, wieght) {
    let t = color;

    let u = mix(t, [128, 128, 128], wieght);

    return u;
};


module.exports = {
    tone,
    tint,
    mix,
    shade
};
