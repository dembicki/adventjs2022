function renderStars(length: number) {
  return "*".repeat(length);
}

function wrapping(gifts: string[]) {
  return gifts.map((gift) => {
    return (
      renderStars(gifts.length) + `\n${gift}\n` + renderStars(gifts.length)
    );
  });
}

const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts);

console.log(wrapped);
