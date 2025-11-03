import { Application, DeclarationReference } from "typedoc";
import { threePages } from "./three-pages.js";

const threeApiSymbols = new Set<string>();

for (const page of threePages) {
  if (page.endsWith(".html") && !page.startsWith("module-")) {
    threeApiSymbols.add(page.substring(0, page.lastIndexOf(".")));
  }
}

/**
 * The entry point for the TypeDoc plugin.
 * @param app The TypeDoc application instance.
 */
export function load(app: Application) {
  const baseUrl = "https://threejs.org/docs/#";

  app.converter.addUnknownSymbolResolver((ref: DeclarationReference) => {
    if (!ref.symbolReference?.path) {
      return;
    }
    const path = ref.symbolReference.path;
    const isThreePound =
      path.length >= 2 &&
      path[0].path === "three" &&
      path[1].navigation === "#";
    // We only care about resolving links to symbols from the 'three' module.
    if (
      !isThreePound &&
      ref.moduleSource !== "three" &&
      ref.moduleSource !== "@types/three"
    ) {
      return;
    }
    let className: string | undefined;
    let memberName: string | null = null;
    let classIndex = -1;

    // Find the last path segment that is a known class name.
    // This handles cases like `THREE.Object3D.add` correctly.
    for (let i = path.length - 1; i >= 0; i--) {
      const potentialClass = path[i].path;
      if (threeApiSymbols.has(potentialClass)) {
        className = potentialClass;
        classIndex = i;
        break;
      }
    }

    // If we couldn't find a known class in the link path, we can't resolve it.
    if (!className) {
      return;
    }

    // Anything after the class name in the path is part of the member name.
    if (path.length > classIndex + 1) {
      memberName = path
        .slice(classIndex + 1)
        .map((p) => p.path)
        .join(".");
    }

    // Construct the final URL and the desired link text.
    const target = `${baseUrl}${className}${
      memberName ? `.${memberName}` : ""
    }`;
    const caption = `THREE.${className}${memberName ? `.${memberName}` : ""}`;

    // Return the object to control both the link target and the text.
    return { target, caption };
  });
}
