
import { GenreWordConversionMap } from "./genre-word-conversion-map";
import { GenreWordConversionMode } from "./genre-word-conversion-mode";

export class GenreWordConverter {
    constructor(
        conversionMode: GenreWordConversionMode,
        conversionMap : GenreWordConversionMap,
    ) {
        this.conversionMode_ = conversionMode;
        this.conversionMap_  = conversionMap;
    }
    public convertGenreWord(word: string): string | null {
        if (this.conversionMode_ === GenreWordConversionMode.ToOldWords) {
            const entry   = this.conversionMap_.entries.find((e) => e.newWord === word);
            const oldWord = (entry) ? entry.oldWord : null;
    
            return oldWord;
        }
        else {
            const entry   = this.conversionMap_.entries.find((e) => e.oldWord === word);
            const newWord = (entry) ? entry.newWord : null;
    
            return newWord;
        }
    }

    private conversionMode_: GenreWordConversionMode;
    private conversionMap_ : GenreWordConversionMap;
}