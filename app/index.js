document.addEventListener("DOMContentLoaded", function () {
  const template = document.getElementById("ghost-list");
  const store = document.getElementById("store");
  const menu = document.getElementById("swords");
  const btn = document.getElementById("add-btn");
  const itemQuantities = {};

  swords.forEach((x) => {
    const option = document.createElement("option");
    option.value = x.name;
    option.textContent = x.name;
    menu.appendChild(option);
  });
  // console.log(swords);

  btn.addEventListener("click", function () {
    const selectedItem = menu.value;
    // console.log(selectedItem);
    const itemInfo = swords.find((x) => x.name === selectedItem);
    // console.log(itemInfo);
    if (itemInfo) {
      const existingCard = document.querySelector(
        `[data-item="${selectedItem}"]`
      );
      if (existingCard) {
        const quantity = existingCard.querySelector("[data-quantity] span");
        itemQuantities[selectedItem]++;
        quantity.textContent = itemQuantities[selectedItem];
      } else {
        const clone = document.importNode(template.content, true);
        /* img */
        const img = clone.querySelector("img");
        img.src = itemInfo.image;
        /* name */
        clone.querySelector("[data-name]").textContent = itemInfo.name;
        /* descr */
        clone.querySelector("[data-description]").textContent =
          itemInfo.description;
        /* quantity */
        itemQuantities[selectedItem] = itemQuantities[selectedItem] || 1;
        const quantityEl = clone.querySelector("[data-quantity] span");
        quantityEl.textContent = itemQuantities[selectedItem];
        /* price */
        clone.querySelector("[data-price]").textContent = `${itemInfo.price}`;
        /* setting atribute ===> data-item */
        clone
          .querySelector("[data-quantity]")
          .setAttribute("data-item", selectedItem);
        // paste in the clone node
        store.appendChild(clone);
      }
    }
  });
});
