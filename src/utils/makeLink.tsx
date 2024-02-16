import React, { ReactNode } from "react";
import AutoLink from "@/components/ui/AutoLink";
import { translateLink } from "@/validations/translateLink";

export function makeLink(title: string) {
  return (accContent: ReactNode[], findTitle: string) => {
    const titleRegex = new RegExp(`(${findTitle})`, "g");
    return accContent.flatMap((part, index) => {
      if (typeof part !== "string") return part;
      return part.split(titleRegex).map((segment, index2) => {
        return translateLink.findArticle(segment, findTitle, title) ? (
          <AutoLink title={findTitle} key={`${index}-${findTitle}-${index2}`} />
        ) : (
          segment
        );
      });
    });
  };
}
