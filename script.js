// Input ichida ixtiyoriy ravishda qavslar oching. Qavslar yo ochiq "(" yo yopiq ")" turda bo'lishi mumkin. Shu input ichiga yozilgan jami ochuvchi va yopuvchi qavslar soni o'zaro teng yoki teng emasligi aniqlansin.==//

let input = document.getElementById("myInput");
let button = document.getElementById("btn")

button.addEventListener("click", () => {
  const value = input.value.split("");
  let open = 0;
  let close = 0;
  for (arr of value) {
    if (arr === "(") {
      open++;
    } else if (arr === ")") {
      close++;
    }
  }
  alert(`ochilgan qavslar soni ${open} ta`);
  alert(`Yopilgan qavsllar soni ${close} ta`);
});



