import messages_pt_BR from "./translations/pt_BR.json";

const DEFAULT_CONFIG = {
  "translations": [{ key: "pt_BR", messages: messages_pt_BR }],
}

export const LanguagePt_BRModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}
