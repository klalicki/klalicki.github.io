const pngOverlay =
  "iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGUGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMmRlZiwgMjAyMy8wMi8wMi0xMjoxNDoyNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjMgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTA0LTEwVDE1OjU3OjAyLTA0OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA0LTEwVDE1OjU3OjAyLTA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wNC0xMFQxNTo1NzowMi0wNDowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowYjhkYzllMC0zOTI3LTQ4NTMtYjgwOC0wY2ExOWIyZWEyMWMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0NWZiYjdlNS1iMTNhLTU2NDEtOTg1ZC1jYWE0MzQwZDc3YWUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMWE4MGMwMC03ZTNmLTQ1YTItYjIwYi0wMmE5ODZjYjg4MWIiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplMWE4MGMwMC03ZTNmLTQ1YTItYjIwYi0wMmE5ODZjYjg4MWIiIHN0RXZ0OndoZW49IjIwMjMtMDQtMTBUMTU6NTc6MDItMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNC4zIChNYWNpbnRvc2gpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowYjhkYzllMC0zOTI3LTQ4NTMtYjgwOC0wY2ExOWIyZWEyMWMiIHN0RXZ0OndoZW49IjIwMjMtMDQtMTBUMTU6NTc6MDItMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNC4zIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8cGhvdG9zaG9wOlRleHRMYXllcnM+IDxyZGY6QmFnPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9IksiIHBob3Rvc2hvcDpMYXllclRleHQ9IksiLz4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpUZXh0TGF5ZXJzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pnj70/cAAAJLSURBVHja7dzrkYIwGIVhWrAFW6AFW6AFW6AFWrAFW7AFWrAFW8gus+g4I2pOcoJj9s3M909wPc8KuWETQmiozxUhAAAABQAAFAAAUAAAQAEAAAUAABQAAFAAAEABAAAFAAAUAABQAACQWvvga/smoQnnPy8c+/UA7W/1hvCH6VyJANP7j2/Of5heVx3AQhBy8I2pLbz/ZSn0agHmD3TKuSRkAtxfDqe/YxNxTHUA/Yf++zcT6Hzeo3BcdQDKTbk3hn+9BxzEYwH4VPgAZALkhg9ABoAjfAASAVzhA5AA4AwfABHAHT4AAkCJ8AGIBCgVPgARACXDB+D9RFnR8AF4AbBG+AA8AVgrfACWF0juwz83hRsAz8O/tg6AFQCehH9d1doCUBDgRfi31S0ACgFEhG9dvAHgcSfEKLy+BcALcBR3UIwA+C9B6laWAQD/TVj9JuwA8PeCzsp+opg9PwBo44BO/BYcAfCPhAcRoQPAPxekdEuzR8kAPB6/nYONbScA/NPRate0B8C/IKN2TVsA/CtiStd0BMC/JtyWHiUD8D4gtWu6A8C/L0jpmkqjZADiQlK7pjwhU2Brovo4bAeAf3Ou0jWNGiUDkP4gnmWUDIDebVS7pj0A5imEhKmKFgD/HI7SNR3/E8BQoru48D6WBZyqABJuksnz+fPYQG2HagHm6/IlpLVeHL1uEmZLb5ejcPezOF8PkHApyBo8hb+fnXG1fQ0AFAAAUAAAQAEAAAUAABQAAFAAAAAAIQAAAAUAABQAAFAAAECtWz/6B7o23lpEdAAAAABJRU5ErkJggg==";
window.currentThemes = {
  dark: {
    fg: {
      hue: 182,
      sat: 2,
      lum: 97,
      cssName: "color-fg",
    },
    bg: {
      hue: 182,
      sat: 9,
      lum: 12,
      cssName: "color-bg",
    },
    bgAlt: {
      hue: 182,
      sat: 9,
      lum: 22,
      cssName: "color-bg-alt",
    },
    accentA: {
      hue: 182,
      sat: 83,
      lum: 55,
      cssName: "color-accent-a",
    },
    accentB: {
      hue: 661,
      sat: 83,
      lum: 55,
      cssName: "color-accent-b",
    },
    accentASoft: {
      hue: 182,
      sat: 67,
      lum: 33,
      cssName: "color-accent-a-soft",
    },
    accentBSoft: {
      hue: 661,
      sat: 67,
      lum: 33,
      cssName: "color-accent-b-soft",
    },
  },
  light: {
    fg: {
      hue: 182,
      sat: 2,
      lum: 8,
      cssName: "color-fg",
    },
    bg: {
      hue: 182,
      sat: 9,
      lum: 91,
      cssName: "color-bg",
    },
    bgAlt: {
      hue: 182,
      sat: 9,
      lum: 81,
      cssName: "color-bg-alt",
    },
    accentA: {
      hue: 182,
      sat: 83,
      lum: 55,
      cssName: "color-accent-a",
    },
    accentB: {
      hue: 661,
      sat: 83,
      lum: 55,
      cssName: "color-accent-b",
    },
    accentASoft: {
      hue: 182,
      sat: 67,
      lum: 82,
      cssName: "color-accent-a-soft",
    },
    accentBSoft: {
      hue: 661,
      sat: 67,
      lum: 82,
      cssName: "color-accent-b-soft",
    },
  },
};
const getWindowColorMode = () => {
  let curMode;
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    curMode = "dark";
  } else {
    curMode = "light";
  }
  window.currentColorMode = curMode;
  return curMode;
};
getWindowColorMode();
const htmlElem = document.querySelector("html");

const createEmptyThemeObject = () => {
  return {
    dark: {
      fg: { hue: 0, sat: 0, lum: 0, cssName: "color-fg" },
      bg: { hue: 0, sat: 0, lum: 0, cssName: "color-bg" },
      bgAlt: { hue: 0, sat: 0, lum: 0, cssName: "color-bg-alt" },
      accentA: { hue: 0, sat: 0, lum: 0, cssName: "color-accent-a" },
      accentB: { hue: 0, sat: 0, lum: 0, cssName: "color-accent-b" },
      accentASoft: {
        hue: 0,
        sat: 0,
        lum: 0,
        cssName: "color-accent-a-soft",
      },
      accentBSoft: {
        hue: 0,
        sat: 0,
        lum: 0,
        cssName: "color-accent-b-soft",
      },
    },
    light: {
      fg: { hue: 0, sat: 0, lum: 0, cssName: "color-fg" },
      bg: { hue: 0, sat: 0, lum: 0, cssName: "color-bg" },
      bgAlt: { hue: 0, sat: 0, lum: 0, cssName: "color-bg-alt" },
      accentA: { hue: 0, sat: 0, lum: 0, cssName: "color-accent-a" },
      accentB: { hue: 0, sat: 0, lum: 0, cssName: "color-accent-b" },
      accentASoft: {
        hue: 0,
        sat: 0,
        lum: 0,
        cssName: "color-accent-a-soft",
      },
      accentBSoft: {
        hue: 0,
        sat: 0,
        lum: 0,
        cssName: "color-accent-b-soft",
      },
    },
  };
};
const generateFavicon = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 96;
  canvas.height = 96;
  const ctx = canvas.getContext("2d");
  const computedValues = getComputedStyle(htmlElem);
  const color1 = computedValues.getPropertyValue("--color-accent-a");
  // const color1 = currentThemes[currentColorMode].accentA;
  const color2 = computedValues.getPropertyValue("--color-accent-b");
  console.log(color1, color2);
  const gradient = ctx.createLinearGradient(0, 0, 96, 0);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 96, 96);

  const favicon = document.querySelector("link[rel='icon']");
  favicon.href = canvas.toDataURL("image/png");
};

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const quickApplyThemeColor = (themeColor) => {
  let hue, sat, lum;
  hue = Math.floor(themeColor.hue) % 360;
  sat = Math.floor(clamp(themeColor.sat, 0, 100));
  lum = Math.floor(clamp(themeColor.lum, 0, 100));
  // console.log(hue, sat, lum);
  const cssVarName = `--${themeColor.cssName}`;
  const colorRGB = gsap.utils.splitColor(`hsl(${hue}deg ${sat}% ${lum}%)`);
  const cssVarValue = `rgb(${colorRGB.join(",")})`;
  htmlElem.style.setProperty(cssVarName, cssVarValue);
};

const applyThemeColor = (themeColor) => {
  let hue, sat, lum;
  hue = Math.floor(themeColor.hue) % 360;
  sat = Math.floor(clamp(themeColor.sat, 0, 100));
  lum = Math.floor(clamp(themeColor.lum, 0, 100));
  const cssVarName = `--${themeColor.cssName}`;
  const colorRGB = gsap.utils.splitColor(`hsl(${hue}deg ${sat}% ${lum}%)`);
  const cssVarValue = `rgb(${colorRGB.join(",")})`;

  gsap.to(document.querySelector("html"), {
    [cssVarName]: cssVarValue,
    duration: 1,
    onUpdate: () => {
      window.updateAnimColors();
      // generateFavicon();
    },
  });
  // generateFavicon();
  // rootStyle.setProperty(
  //   `--${themeColor.cssName}`,
  //   `hsl(${hue}deg ${sat}% ${lum}%)`
  // );
};

const createColorTheme = () => {
  const newTheme = createEmptyThemeObject();
  //Accent colors: 2 saturated colors that form a pleasing gradient.
  // generate hue for accents
  const accentHueSign = Math.random() > 0.5 ? 1 : -1;
  const accentHueOffset = (Math.random() * 60 + 100) * accentHueSign;
  const accentAHue = Math.random() * 360;
  const accentBHue = accentAHue + 360 + accentHueOffset;
  newTheme.dark.accentA.hue = accentAHue;
  newTheme.light.accentA.hue = accentAHue;
  newTheme.dark.accentB.hue = accentBHue;
  newTheme.light.accentB.hue = accentBHue;
  //choose saturation for accents
  const accentSat = 80 + Math.random() * 20;
  newTheme.dark.accentA.sat = accentSat;
  newTheme.light.accentA.sat = accentSat;
  newTheme.dark.accentB.sat = accentSat;
  newTheme.light.accentB.sat = accentSat;
  //choose luminosity for accents
  const accentLum = 40 + Math.random() * 20;
  newTheme.dark.accentA.lum = accentLum;
  newTheme.light.accentA.lum = accentLum;
  newTheme.dark.accentB.lum = accentLum;
  newTheme.light.accentB.lum = accentLum;
  //Accent(Soft) colors: a toned-down version of the accent colors that have enough contrast with the foreground color to be legible.
  //set hue to match regular accent
  newTheme.dark.accentASoft.hue = accentAHue;
  newTheme.light.accentASoft.hue = accentAHue;
  newTheme.dark.accentBSoft.hue = accentBHue;
  newTheme.light.accentBSoft.hue = accentBHue;
  //set saturation to be slightly subdued from regular accent;
  const accentSoftSat = accentSat - 10 - Math.random() * 10;
  newTheme.dark.accentASoft.sat = accentSoftSat;
  newTheme.light.accentASoft.sat = accentSoftSat;
  newTheme.dark.accentBSoft.sat = accentSoftSat;
  newTheme.light.accentBSoft.sat = accentSoftSat;
  //set luminosity to be more similar to background (darker in dark theme, lighter in light theme)
  const darkAccentSoftLum = accentLum * 0.6;
  const lightAccentSoftLum = accentLum * 0.4 + 60;
  newTheme.dark.accentASoft.lum = darkAccentSoftLum;
  newTheme.light.accentASoft.lum = lightAccentSoftLum;
  newTheme.dark.accentBSoft.lum = darkAccentSoftLum;
  newTheme.light.accentBSoft.lum = lightAccentSoftLum;
  // Background color
  const bgHue = accentAHue;
  newTheme.dark.bg.hue = bgHue;
  newTheme.light.bg.hue = bgHue;

  const bgSat = Math.random() * 20;
  newTheme.dark.bg.sat = bgSat;
  newTheme.light.bg.sat = bgSat;

  const darkBgLum = Math.random() * 10 + 5;
  const lightBgLum = Math.random() * 10 + 90;
  newTheme.dark.bg.lum = darkBgLum;
  newTheme.light.bg.lum = lightBgLum;
  //background color alt
  const bgAltHue = bgHue;
  newTheme.dark.bgAlt.hue = bgAltHue;
  newTheme.light.bgAlt.hue = bgAltHue;
  const bgAltSat = bgSat;
  newTheme.dark.bgAlt.sat = bgAltSat;
  newTheme.light.bgAlt.sat = bgAltSat;
  const bgAltOffset = 10;
  newTheme.dark.bgAlt.lum = darkBgLum + bgAltOffset;
  newTheme.light.bgAlt.lum = lightBgLum - bgAltOffset;

  // Foreground color
  const fgHue = bgHue;
  newTheme.dark.fg.hue = fgHue;
  newTheme.light.fg.hue = fgHue;

  const fgSat = bgSat * 0.25;
  newTheme.dark.fg.sat = fgSat;
  newTheme.light.fg.sat = fgSat;

  const darkFgLum = 110 - darkBgLum;
  const lightFgLum = 100 - lightBgLum;
  newTheme.dark.fg.lum = darkFgLum;
  newTheme.light.fg.lum = lightFgLum;

  return newTheme;
};
const applyCurrentTheme = () => {};
if (currentColorMode === "dark") {
  Object.values(currentThemes.dark).forEach(applyThemeColor);
} else {
  Object.values(currentThemes.light).forEach(applyThemeColor);
}

const quickApplyCurrentTheme = () => {};
if (currentColorMode === "dark") {
  Object.values(currentThemes.dark).forEach(quickApplyThemeColor);
} else {
  Object.values(currentThemes.light).forEach(quickApplyThemeColor);
}
quickApplyCurrentTheme();
/**
 *  creates a new theme, sets the current theme to the new theme, and then applies the theme colors
 * to the page
 */
const createNewTheme = () => {
  const newTheme = createColorTheme();
  applyCurrentTheme();

  window.currentThemes = newTheme;
};
window.createNewTheme = createNewTheme;

applyCurrentTheme();

const toggleColorMode = () => {
  const htmlElem = document.querySelector("html");

  if (currentColorMode === "light") {
    currentColorMode = "dark";
    Object.values(currentThemes.dark).forEach(applyThemeColor);
  } else if (currentColorMode === "dark") {
    currentColorMode = "light";
    Object.values(currentThemes.light).forEach(applyThemeColor);
  }
};
window.toggleColorMode = toggleColorMode;

const setInitialColors = () => { 
  
}