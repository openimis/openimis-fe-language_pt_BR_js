import messages_pt_br from "./translations/pt-br.json";

const DEFAULT_CONFIG = {
  "translations": [{ key: "pt-br", messages: messages_pt_br }],
}

export const LanguagePtBrModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}
