import { light } from "../theme/light";

const themes = { light };

export default function getTheme(theme) {
  return themes[theme];
}
