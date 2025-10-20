import { addons } from "storybook/manager-api";
import theme from "./theme";

addons.setConfig({
  theme,
  title: "Veloce Vue",
});

addons.register("TitleAddon", (api) => {
  const PAGE_TITLE = "Veloce Vue";

  const setTitle = () => {
    let storyData: { title?: string; name?: string } | null = null;

    try {
      storyData = api.getCurrentStoryData() as { title?: string; name?: string };
    } catch (e) {
      // ignore
    }

    const componentname = storyData?.title?.replace("Components/", "");
    const storyname = storyData?.name;

    let newTitle;

    if (storyData && storyData.title) {
      if (componentname && storyname && componentname.trim() === storyname.trim()) {
        newTitle = `${componentname} ⋅ ${PAGE_TITLE}`;
      } else {
        newTitle = `${componentname}${storyname ? " - " + storyname : ""} ⋅ ${PAGE_TITLE}`;
      }
    } else {
      newTitle = PAGE_TITLE;
    }

    if (document.title !== newTitle) {
      document.title = newTitle;
    }
  };

  const titleElement = document.querySelector("title");

  if (titleElement) {
    const observer = new MutationObserver(setTitle);
    observer.observe(titleElement, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  } else {
    setTitle(); // fallback if <title> is not yet in DOM
  }
});
