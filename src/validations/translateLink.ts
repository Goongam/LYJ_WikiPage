export const translateLink = {
  /**
   * 위키 제목이 일치하며, 현재페이지의 위키가 아닌 단어
   * @param segment 각 요소
   * @param findTitle 배열 순회 중인 타이틀
   * @param title 현재 타이틀
   * @returns
   */
  findArticle: (segment: string, findTitle: string, title: string) =>
    segment === findTitle && segment !== title,
};
