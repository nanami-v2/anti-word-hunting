

export enum AppMessageType {
    StartGenreWordConversion,
    GetGenreWordConversionMap,
}

export interface AppMessage {
    type: AppMessageType;
}

export class AppMessageGetGenreWordConversionMap implements AppMessage {
    type: AppMessageType = AppMessageType.GetGenreWordConversionMap;
}