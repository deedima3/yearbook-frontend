interface ArticleToolbarsProps {
  richTextHandler: (
    inlineStyle: string
  ) => (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;

  blockTypeHandler: (
    bType: string
  ) => (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;

  saveHandler: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
}

const ArticleToolbar = ({
  richTextHandler,
  blockTypeHandler,
  saveHandler,
}: ArticleToolbarsProps) => {
  return (
    <div className="" data-aos="fade-up">
      <div className="flex flex-col shadow-md sticky z-40 top-40 bg-white border-2 px-4 py-2 gap-5 font-bold font-IBM">
        <button onClick={blockTypeHandler("header-one")}>
          <strong>H1</strong>
        </button>
        <button onClick={blockTypeHandler("header-two")}>
          <strong>H2</strong>
        </button>
        <button onClick={blockTypeHandler("header-three")}>
          <strong>H3</strong>
        </button>
        <button onClick={richTextHandler("BOLD")}>
          <strong>B</strong>
        </button>
        <button onClick={richTextHandler("ITALIC")}>
          <strong>
            <i>i</i>
          </strong>
        </button>
        <button onClick={richTextHandler("UNDERLINE")}>
          <strong>
            <u>U</u>
          </strong>
        </button>
        <button onClick={blockTypeHandler("STRIKETHROUGH")}>
          <p className="line-through font-bold">S</p>
        </button>
      </div>
    </div>
  );
};

export default ArticleToolbar;
