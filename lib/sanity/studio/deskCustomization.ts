import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import Iframe from "sanity-plugin-iframe-pane";
import { DefaultDocumentNodeResolver, StructureResolver } from "sanity/desk";
import { schemaTypes } from "./schemas";

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  const home = ["testimonial", "instagramCard"];
  const about = ["hero"];
  const services = ["service", "faq"];
  const portfolio = ["portfolio"];

  const getPreview = (slug?: string) => {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: `http://${window.location.host}/api/draft${slug || ""}`,
          loader: true,
          reload: {
            button: true,
          },
        })
        .title("Preview"),
    ]);
  };

  if (home.includes(schemaType)) return getPreview();
  else if (about.includes(schemaType)) return getPreview("?goTo=about");
  else if (services.includes(schemaType)) return getPreview("?goTo=services");
  else if (portfolio.includes(schemaType)) return getPreview("?goTo=portfolio");
  else return S.document().views([S.view.form()]);
};

export const structure: StructureResolver = (S, context) => {
  return S.list()
    .title("Content")
    .items([
      ...schemaTypes.map(({ name, title }) =>
        orderableDocumentListDeskItem({
          type: name,
          title: title,
          S,
          context,
        })
      ),
    ]);
};
