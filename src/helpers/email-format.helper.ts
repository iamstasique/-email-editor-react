import { FormatType } from '../enums/format-types.enum';

export const applyFormat = (type: FormatType, selectedText: string) => {
  let formattedText = selectedText;

  switch (type) {
    case FormatType.Bold:
      {
        formattedText = '<b>' + selectedText + '</b>';
      }
      break;
    case FormatType.Italic:
      {
        formattedText = '<i>' + selectedText + '</i>';
      }
      break;
    case FormatType.Underline:
      {
        formattedText = '<u>' + selectedText + '</u>';
      }
      break;
  }

  return formattedText;
};
