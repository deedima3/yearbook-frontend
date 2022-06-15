import { EditorState, RichUtils } from "draft-js";
import { useState } from "react";

export function useArticle(articleState? : EditorState) : any {
    const [article, setArticle] = useState<EditorState>(
        articleState || EditorState.createEmpty()
      );
      const [title, setTitle] = useState("");
    
      const handleRichText =
        (inlineStyle: string) =>
        (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
          e.preventDefault();
          setArticle(RichUtils.toggleInlineStyle(article, inlineStyle));
        };
    
      const handleBlockType =
        (bType: string) =>
        (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
          e.preventDefault();
          setArticle(RichUtils.toggleBlockType(article, bType));
        };

        const handleSave = () => {
            return article.getCurrentContent().getPlainText()
          };

    return {article, setArticle, handler : { handleBlockType, handleRichText, handleSave }, title, setTitle} 
}