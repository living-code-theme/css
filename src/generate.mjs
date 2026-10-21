// This port owns its application mappings. Inputs come only from the pinned local palette.


const kebab = (s) => s.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());

const block = (f, sel) => `${sel} {
  color-scheme: ${f.light ? "light" : "dark"};
${Object.entries(f.colors).map(([n, c]) => `  --lc-${kebab(n)}: ${c.css};`).join("\n")}

${Object.entries(f.roles).filter(([role]) => !(role in f.colors)).map(([role, n]) => `  --lc-${kebab(role)}: var(--lc-${kebab(n)});`).join("\n")}
}`;

const css = {
files: () => [],
all: (fs) => [{
    path: "living-code.css",
    content: `${block(fs[0], `:root,\n[data-theme="${fs[0].slug}"]`)}

${fs.slice(1).map((f) => block(f, `[data-theme="${f.slug}"]`)).join("\n\n")}

${block(fs[0], `[data-theme="living-code-auto"]`)}

@media (prefers-color-scheme: light) {
${block(fs.find((f) => f.light), `  [data-theme="living-code-auto"]`).replace(/\n/g, "\n  ")}
}
`,
  }]
};

export function generate(flavors) {
  return [...flavors.flatMap(f => css.files(f)), ...(css.all?.(flavors) ?? [])].filter(f => !["LICENSE", "README.md", "package.json", "extension.toml"].includes(f.path.split("/").at(-1)));
}
