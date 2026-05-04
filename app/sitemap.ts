import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jiasesoria.com";
  const routes = ["", "/courier", "/aduanas", "/transporte", "/empresas", "/rrhh", "/contacto"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.85,
  }));
}
