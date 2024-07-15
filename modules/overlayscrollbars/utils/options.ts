import type { OverlayScrollbarsComponentProps } from "overlayscrollbars-vue";

type OverlayscrollbarsOptions = OverlayScrollbarsComponentProps["options"];

export const defaultOverlayscrollbarsOptions: OverlayscrollbarsOptions = {
    overflow: {
        x: "hidden",
    },
    scrollbars: {
        autoHide: "move",
        clickScroll: true,
    },
};
