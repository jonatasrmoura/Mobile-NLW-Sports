export interface GameParams {
  id: string;
  title: string;
  bannerUrl: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: string;
      game: GameParams;
    }
  }
}
