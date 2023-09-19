const button = document.getElementById("button-convert")
const select = document.getElementById("currency-select")

const dolar = 4.87
const euro = 5.26
const bitcoin = 126639.00
const libra = 6.13

const convertValues = () => {
  const inputReais = document.getElementById("input-real").value;
  const realValueText = document.getElementById("real-value-text")
  const currencyValueText = document.getElementById("currency-value-text")
  

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais)

  if (select.value === "US$ Dólar") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReais / dolar)
  }

  if (select.value === "€ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReais / euro)
  }

  if (select.value === "Bitcoin"){
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
      minimumFractionDigits:5
    }).format(inputReais / bitcoin)
  }

  if (select.value === "£ Libra"){
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits:5
    }).format(inputReais / libra)
  }
}

changeCurrency = () => {
  const currencyName = document.getElementById("currency-name")
  const currencyImg = document.getElementById("currency-img")

  if (select.value === "US$ Dólar") {
    currencyName.innerHTML = "Dólar"
    currencyImg.src="./assets/dolar.png"

  }

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro"
    currencyImg.src="./assets/euro.png"
  }

  if (select.value === "Bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImg.src="./assets/bitcoin.png"
  }

  if (select.value === "£ Libra") {
    currencyName.innerHTML = "Libra"
    currencyImg.src="./assets/libra 1.png"
  }
  convertValues()
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)
