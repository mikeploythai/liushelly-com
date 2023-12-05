import type { StructureBuilder } from "sanity/desk";

import Iframe from "sanity-plugin-iframe-pane";
import { iframeOptions, previewDocs } from "sanity.config";

export default function itemViews(doc: string, S: StructureBuilder) {
  return (previewDocs as string[]).includes(doc)
    ? [
        S.view.form(),
        S.view.component(Iframe).options(iframeOptions).title("Preview"),
      ]
    : [S.view.form()];
}
