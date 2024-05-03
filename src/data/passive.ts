const lazyEffect = (a: number):void => {
    for (let index = 0; index < 2; index++) {
        if(index <=1 ){
            a=a*1.2
        }
        else{
            a=0
            index=0
        }
        
    }
}

const exchangeEffect = (a: number, b: number):void => {
    let c
    for (let index = 0; index < 1; index++) {
        if(index == 0 ){
            c=a
            a=b
            b=c
        }
        else{
            c=a
            a=b
            b=c
            index = 0
        }
        
    }
}

const passives = [
    {
        name: "Fégnant",
        desc: "Pouis quand il est motivé boost ses attaques pendant 2 tours, et se repose au troisieme tours",
        effect: lazyEffect
    },
    {
        name: "Ombre et Lumière",
        desc: "Un tour sur deux Péonard échange ses stats attaque et defense",
        effect: exchangeEffect
    },
    {
        name: "Ombre et Lumière",
        desc: "Pyllia gagne 1 mp de plus à chaque manche",
        effect: lazyEffect
    },
    {
        name: "Ombre et Lumière",
        desc: "Un tour sur 3 Pulien convertis la moitié de sa défense en attaque",
        effect: lazyEffect
    }
]

export { passives }