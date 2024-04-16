import type { StructureBuilder } from "sanity/structure";

import Iframe, { type IframeOptions } from "sanity-plugin-iframe-pane";
import { iframeOptions, previewDocs } from "sanity.config";

export default function itemViews(doc: string, S: StructureBuilder) {
  return (previewDocs as string[]).includes(doc)
    ? [
        S.view.form(),
        S.view
          .component(Iframe)
          .options(
            doc === "socials"
              ? ({
                  ...iframeOptions,
                  defaultSize: "mobile",
                } satisfies IframeOptions)
              : iframeOptions,
          )
          .title("Preview"),
      ]
    : [S.view.form()];
}
