export function generateAvatar(firstname = "", lastname = "") {
  if (firstname !== "" && lastname !== "") {
    return `${firstname[0].toUpperCase()}${lastname[0].toUpperCase()}`;
    // console.log(`${firstname[0].toUpperCase()}${lastname[0].toUpperCase()}`)
  }
}

export function checkStrEmpty(str) {
  return !(str && str.length > 1 && str.split(' ').join('').length > 0)
}
