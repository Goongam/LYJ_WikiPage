export const validArticle = {
  title: (value: string) => {
    if (value === "") return false;
    if (value.length >= 50) return false;
    return true;
  },
  content: (value: string) => {
    if (value === "") return false;

    return true;
  },
};
