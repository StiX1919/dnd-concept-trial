let cardPosition = 1;
let observer = null;
export function observe(o) {
    observer = o;
    observer(cardPosition)
}

export function moveCard(index) {
    cardPosition = index;
    observer(cardPosition)
}