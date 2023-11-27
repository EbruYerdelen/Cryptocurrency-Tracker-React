export default function numberWithCommas(x) {
  if (typeof x === "number") {
    return x.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
}
