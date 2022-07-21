export function generateAvatar(firstname = "", lastname = "") {
  if (firstname !== "" && lastname !== "") {
    return `${firstname[0].toUpperCase()}${lastname[0].toUpperCase()}`;
    // console.log(`${firstname[0].toUpperCase()}${lastname[0].toUpperCase()}`)
  }
}

export function checkStrEmpty(str) {
  return !(str && str.length > 1 && str.split(" ").join("").length > 0);
}

export function formatNumber(n) {
  let num = Math.round(parseInt(n), 0);
  if (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  } else {
    return "0";
  }
}
