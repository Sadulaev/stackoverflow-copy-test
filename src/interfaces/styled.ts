export interface ITheme {
    colors: {
      bg: string,
      font: string,
      border: string,
      primaryBtn: string;
      secondaryBtn: string;
    }
  
    media: {
      max: string,
    }
  
    //Могу использовать позже(или нет)
    // sizes: {
    //   header: { height: number }
    //   container: { width: number }
    //   footer: { height: number }
    //   modal: { width: number }
    // }
  }