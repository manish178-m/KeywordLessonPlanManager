class DisplayString {
    key: string;
    value: string;
}

export class I18nService {
    private currentLang: "en" | "zh"
    private strings: DisplayString[];

    constructor(lang: "en" | "zh") {

    }
}