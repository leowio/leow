const primaryFontScheme = "dinkie";

// Font configurations
const fontConfigs = {
  dinkie: {
    main: "DinkieBitmap-7px",
    content: "DinkieBitmap-9px",
  },
  opendyslexic: {
    main: "OpenDyslexic",
    content: "OpenDyslexic",
  },
  sans: {
    main: "sans-serif",
    content: "sans-serif",
  },
};

// Get font data from local storage
const currentFont = localStorage.getItem("font");

function getPreferFont() {
  // return font value in local storage if it is set
  if (currentFont) return currentFont;

  // return primary font scheme if it is set
  if (primaryFontScheme) return primaryFontScheme;

  // return default sans-serif
  return "sans";
}

let fontValue = getPreferFont();

function setPreference() {
  localStorage.setItem("font", fontValue);
  reflectPreference();
}

function reflectPreference() {
  const config = fontConfigs[fontValue];
  if (config) {
    document.documentElement.style.setProperty("--font-main", config.main);
    document.documentElement.style.setProperty(
      "--font-content",
      config.content,
    );
  }

  // Update button states
  document.querySelectorAll("[id^='select-']").forEach((button) => {
    button.classList.remove("text-skin-accent");
  });

  const activeButton = document.querySelector(`#select-${fontValue}`);
  if (activeButton) {
    activeButton.classList.add("text-skin-accent");
  }
}

// set early so no page flashes / CSS is made aware
reflectPreference();

window.onload = () => {
  // set on load so screen readers can get the latest value on the buttons
  reflectPreference();

  // now this script can find and listen for clicks on the font controls
  document.querySelector("#select-dinkie")?.addEventListener("click", () => {
    fontValue = "dinkie";
    setPreference();
  });

  document
    .querySelector("#select-opendyslexic")
    ?.addEventListener("click", () => {
      fontValue = "opendyslexic";
      setPreference();
    });

  document.querySelector("#select-sans")?.addEventListener("click", () => {
    fontValue = "sans";
    setPreference();
  });
};
