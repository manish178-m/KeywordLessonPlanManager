class DisplayString {
    key: string;
    value: string;
}

export class I18nService {
    private currentLang: "en" | "zh"
    private strings: DisplayString[];

    constructor(lang: "en" | "zh") {
        let enFileName: string = `./i18n/Strings.en.json`;
        let fileName: string = `./i18n/Strings.${lang}.json`;
    }
}