import messages_en from "./translations/pt_BR.json";

const DEFAULT_CONFIG = {
  "translations": [{ key: "pt_BR", messages: messages_pt_BR }],
}

export const TemplateModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}