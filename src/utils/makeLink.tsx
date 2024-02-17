import React, { ReactNode } from "react";
import AutoLink from "@/components/ui/AutoLink";
import { translateLink } from "@/validations/translateLink";

/**
 * 링크가 포함된 본문 내용 배열을 반환합니다
 * @param {string} title 현재 방문한 위키의 타이틀
 * @returns
 */
export function makeLinkContent(title: string) {
  //accContent: reduce를 통해 최종적으로 리턴할 배열, fintTitle: 링크로 변환할 title
  return (accContent: ReactNode[], findTitle: string) => {
    const titleRegex = new RegExp(`(${findTitle})`, "g"); //findTitle로 그룹화
    //accContent 배열을 1차원으로 구성 후 순회, 해당 findTitle 단어를 링크로 변환 후 return, 전체 문서의 단어 개수만큼 실행됨.
    return accContent.flatMap((part, index) => {
      if (typeof part !== "string") return part; //string이 아닌 경우(이미 생성된 ReactNode타입의 링크인 경우) return
      return part.split(titleRegex).map((segment, index2) => {
        //조건 만족 시 링크로 변환, 아닐 시 string 리턴
        return translateLink.findArticle(segment, findTitle, title) ? (
          <AutoLink title={findTitle} key={`${index}-${findTitle}-${index2}`} />
        ) : (
          segment
        );
      });
    });
  };
}
