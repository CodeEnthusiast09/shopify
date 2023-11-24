document.addEventListener("DOMContentLoaded", function () {
  // FOR NOTIFICATION BELL
  const bell = document.getElementById("bell"); //Selects the bell icon

  const notification = document.getElementById("notification"); //Selects the div with id "notification"

  // FOR THE PROFILE IMAGE PLACEHOLDER
  const showMenu = document.getElementById("dc"); //Selects the element with id "info"

  const showMenuMobile = document.getElementById("pi"); //Selects the element with id "info"

  const menu = document.getElementById("menu"); //Selects the div with id "info"

  // FOR DISMISS BUTTON
  const info = document.getElementById("info"); //Selects the div with id "info"

  const removeInfo = document.getElementById("remove-info"); //Selects the "x" icon

  // FOR NOTIFICATION BELL

  if (bell && notification) {
    bell.addEventListener("click", function () {
      if (
        notification.style.display === "none" ||
        notification.style.display === ""
      ) {
        notification.style.display = "block";
      } else {
        notification.style.display = "none";
      }
    });
  }

  // FOR THE PROFILE IMAGE PLACEHOLDER

  if (showMenu && menu) {
    showMenu.addEventListener("click", function () {
      if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
      } else {
        menu.style.display = "none";
      }
    });
  }

  if (showMenuMobile && menu) {
    showMenuMobile.addEventListener("click", function () {
      if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
      } else {
        menu.style.display = "none";
      }
    });
  }

  // FOR DISMISS BUTTON

  if (removeInfo) {
    removeInfo.addEventListener("click", function () {
      if (info) {
        info.style.display = "none";
      }
    });
  }
});

// FOR ACCORDION MENU

document.addEventListener("DOMContentLoaded", function () {
  const arrowDown = document.getElementById("arrow-down"); // Selects the 'arrow down' svg

  const arrowUp = document.getElementById("arrow-up"); // Selects the 'arrow up' svg

  const showOptionsOrNot = document.getElementsByClassName("options"); // Selects every div with class 'options'

  const firstImg = document.getElementById("first-img");

  if (arrowDown && arrowUp)
    arrowDown.addEventListener("click", function () {
      toggleOptionsDisplay(showOptionsOrNot, true);
      arrowDown.style.display = "none";
      arrowUp.style.display = "block";
      firstImg.style.display = "block";
    });

  arrowUp.addEventListener("click", function () {
    toggleOptionsDisplay(showOptionsOrNot, false);
    arrowUp.style.display = "none";
    arrowDown.style.display = "block";
    firstImg.style.display = "none";
  });

  function toggleOptionsDisplay(showOptionsOrNot, show) {
    for (let i = 0; i < showOptionsOrNot.length; i++) {
      showOptionsOrNot[i].style.display = show ? "block" : "none";
    }
  }
});

// FOR THE OPTIONS

document.addEventListener("DOMContentLoaded", function () {
  const heads = document.getElementsByClassName("options"); // Selects every div with class 'options'

  const descriptions = document.getElementsByClassName("des"); // Selects every div with class 'des'

  const images = document.getElementsByClassName("img"); // Selects every image element with class 'img'

  if (
    heads.length > 0 &&
    descriptions.length > 0 &&
    images.length > 0 &&
    heads.length === descriptions.length &&
    heads.length === images.length
  ) {
    // the loop below iterates over all elements with the class 'options'
    for (let i = 0; i < heads.length; i++) {
      heads[i].addEventListener("click", function () {
        // This inner loop hides all des and img elements. This ensures that, before showing the relevant ones, we hide all others to reset the visibility.
        for (let j = 0; j < descriptions.length; j++) {
          descriptions[j].style.display = "none";
          images[j].style.display = "none";
        }

        // Display the description and image associated with the clicked options-head
        descriptions[i].style.display = "block";
        if (window.innerWidth > 600) {
          images[i].style.display = "block";
        }
      });
    }
  }
});

//  FOR THE CUSTOM CHECKBOX, COUNTER AND PROGRESS BAR

document.addEventListener("DOMContentLoaded", function () {
  const checkBoxes = document.getElementsByClassName("checkbox");

  const checkedIcons = document.getElementsByClassName("checked");

  const count = document.getElementById("counter");

  const progress = document.getElementById("bar");

  let countChecked = 0;

  // TO TOGGLE CHECKBOX

  if (
    checkBoxes.length > 0 &&
    checkedIcons.length > 0 &&
    checkBoxes.length === checkedIcons.length
  ) {
    for (let i = 0; i < checkBoxes.length; i++) {
      checkBoxes[i].addEventListener("click", function () {
        toggleCheckbox(i);
        updateCheckedCount(i);
        updateProgress();
      });

      checkedIcons[i].addEventListener("click", function () {
        toggleCheckbox(i);
        updateCheckedCount(i);
        updateProgress();
      });
    }
  }

  function toggleCheckbox(index) {
    checkBoxes[index].style.display =
      checkBoxes[index].style.display === "none" ? "block" : "none";
    checkedIcons[index].style.display =
      checkedIcons[index].style.display === "block" ? "none" : "block";
  }

  // TO COUNT CHECKED ITEMS

  function updateCheckedCount() {
    countChecked = 0;
    for (let i = 0; i < checkBoxes.length; i++) {
      if (checkBoxes[i].style.display === "none") {
        countChecked++;
      }
    }
    count.textContent = countChecked;
  }

  // FOR UPDATING THE PROGRESS BAR
  function updateProgress() {
    const totalCheckboxes = checkBoxes.length;
    const completionPercentage = (countChecked / totalCheckboxes) * 100;
    progress.style.width = `${completionPercentage}%`;
  }
});
