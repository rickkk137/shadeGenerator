const mix = function mix(color_1,color_2 = [0,0,0],width = 0.5){
    let f = color_1.map((x) => {
        return width * x;
    },[]);

    let g = color_2.map((x) => {
        return (1 - width) * x;
    });


    let h = f.map((value,key) => {
        return value + g[key];
    });
    return h;
};

const shade= function shade(color, weight = 0.5)
{
    let t = color;

    let u = mix(t, [0, 0, 0], weight);

    return u;
}


module.exports = {
    mix,
    shade
};
