import Box from "./Box";

export interface ParagraphProps {
  line: number;
}

const Paragraph = ({ line, ...props }: ParagraphProps) => {
  return (
    <div {...props}>
      {Array.from(Array(line), (_, index) => {
        return <Box width="100%" height={16} key={index} />;
      })}
    </div>
  );
};

export default Paragraph;
