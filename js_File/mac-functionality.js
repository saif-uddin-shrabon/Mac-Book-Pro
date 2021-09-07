function calculation() {
  const totalPrice = document.getElementById("tPrice");
  const fTPrice = document.getElementById("fOOterTprice");
  const mCost = document.getElementById("memoryCost");
  const sCost = document.getElementById("storageCost");
  const dCost = document.getElementById("dCharge");

  totalPrice.innerText =
    parseInt(sCost.innerText) +
    parseInt(mCost.innerText) +
    parseInt(dCost.innerText) +
    1299;

  fTPrice.innerText = totalPrice.innerText;
  document.getElementById("cuponButton").addEventListener("click", function () {
    const cInput = document.getElementById("cuponInput");
    const cValue = cInput.value;

    if (cValue == "stevekaku") {
      const applyedCupon = parseFloat(totalPrice.innerText) * 0.2;
      fTPrice.innerText = totalPrice.innerText - applyedCupon;
      cInput.value = "";
    }
  });
}

function addCart(input, itemType) {
  const itemValue = document.getElementById(input);
  //Memory
  if (itemType == "8GB_M") {
    itemValue.innerText = 0;
    calculation();
  } else if (itemType == "16GB_M") {
    itemValue.innerText = 180;
    calculation();
  }
  //SSD
  else if (itemType == "256GB_SSD") {
    itemValue.innerText = 0;
    calculation();
  } else if (itemType == "512GB_SSD") {
    itemValue.innerText = 100;
    calculation();
  } else if (itemType == "1TB_SSD") {
    itemValue.innerText = 180;
    calculation();
  }
  //Deleviry
  else if (itemType == "DFreeCharge") {
    itemValue.innerText = 0;
    calculation();
  } else if (itemType == "Dcharge") {
    itemValue.innerText = 20;
    calculation();
  }
}

//    Memory
document.getElementById("8GB_M").addEventListener("click", function () {
  addCart("memoryCost", "8GB_M");
});
document.getElementById("16GB_M").addEventListener("click", function () {
  addCart("memoryCost", "16GB_M");
});

//   SSD
document.getElementById("256GB_SSD").addEventListener("click", function () {
  addCart("storageCost", "256GB_SSD");
});
document.getElementById("512GB_SSD").addEventListener("click", function () {
  addCart("storageCost", "512GB_SSD");
});
document.getElementById("1TB_SSD").addEventListener("click", function () {
  addCart("storageCost", "1TB_SSD");
});

//  Delivery
document.getElementById("DFreeCharge").addEventListener("click", function () {
  addCart("dCharge", "DFreeCharge");
});
document.getElementById("Dcharge").addEventListener("click", function () {
  addCart("dCharge", "Dcharge");
});
